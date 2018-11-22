import moment from 'moment'
import { getProperty } from './props'
import { tweetSheet, getSavedTweets } from './spreadsheet'

const getTwitterService = () =>
  OAuth1.createService('Twitter')
    .setAccessTokenUrl('https://api.twitter.com/oauth/access_token')
    .setRequestTokenUrl('https://api.twitter.com/oauth/request_token')
    .setAuthorizationUrl('https://api.twitter.com/oauth/authorize')
    .setConsumerKey(getProperty('TWITTER_COMSUMER_KEY'))
    .setConsumerSecret(getProperty('TWITTER_COMSUMER_SECRET'))
    .setAccessToken(getProperty('TWITTER_ACCESS_TOKEN'), getProperty('TWITTER_ACCESS_SECRET'))

const twitterService = getTwitterService()

const extractHashTags = text => {
  const matches = text.match(
    /#[a-zA-Z0-9_\u3041-\u3094\u3099-\u309C\u30A1-\u30FA\u3400-\uD7FF\uFF10-\uFF19\uFF20-\uFF3A\uFF41-\uFF5A\uFF66-\uFF9E][\w-]*/gi
  )
  if (matches) {
    return matches.map(e => e.replace('#', '')).join(',')
  }
  return ''
}

export const saveDailyTweets = () => {
  const savedTweets = getSavedTweets(1)
  const sinceId = tweetSheet.getRange(savedTweets.length, 1).getValue()
  const sinceIdParam = sinceId ? `&since_id=${sinceId}` : ''
  const res = twitterService.fetch(
    `https://api.twitter.com/1.1/search/tweets.json?q=${encodeURIComponent(
      `教えます OR 選 from:hatsu823 exclude:retweets`
    )}&lang=ja&result_type=recent&count=100&tweet_mode=extended${sinceIdParam}`
  )
  const { statuses: tweets } = JSON.parse(res)

  const data = tweets.map(tweet => {
    const { full_text: text, created_at: createdAt, id_str: idStr } = tweet
    const url = `https://twitter.com/${tweet.user.screen_name}/status/${idStr}`
    return [idStr, url, text, extractHashTags(text), createdAt]
  })
  if (data.length > 0) {
    tweetSheet.getRange(savedTweets.length + 2, 1, data.length, 5).setValues(data.reverse())
  }
}

// 10-12以降のツイートを全て取得
const data = []
export const getTimeline = maxId => {
  const maxIdParam = maxId ? `&max_id=${maxId}` : ''
  const tweets = JSON.parse(
    twitterService.fetch(
      `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=hatsu823&count=200&tweet_mode=extended${maxIdParam}`
    )
  )
  tweets.forEach(tweet => {
    const { full_text: text, created_at: createdAt, id_str: idStr } = tweet
    if (text.match(/教えます|選/) && !text.match(/RT/)) {
      const url = `https://twitter.com/${tweet.user.screen_name}/status/${idStr}`
      data.push([idStr, url, text, extractHashTags(text), createdAt])
    }
  })
  const lastTweet = tweets[tweets.length - 1]
  const { created_at: createdAt, id_str: idStr } = lastTweet
  if (moment(createdAt).isAfter(moment('2018-10-12'))) {
    return getTimeline(idStr)
  }
  Logger.log(data)
  return tweetSheet.getRange(2, 1, data.length, 5).setValues(data.reverse())
}
