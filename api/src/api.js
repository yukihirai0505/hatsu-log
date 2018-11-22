import { savedTweets } from './spreadsheet'

export const doGet = e => {
  Logger.log(e)
  const output = ContentService.createTextOutput()
  const content = savedTweets(5).map(tweet => {
    const id = tweet[0]
    const tweetLink = tweet[1]
    return {
      id,
      tweetLink
    }
  })
  // TODO: get tweet
  // TODO: get store
  output.setMimeType(ContentService.MimeType.JSON)
  output.setContent(JSON.stringify(content))
  return output
}
