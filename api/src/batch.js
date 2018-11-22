import { tweetSheet, storeSheet, getSavedStores } from './spreadsheet'
import { getGeocodeByAddress } from './google'

export const text2store = () => {
  const savedStores = getSavedStores(storeSheet.getLastRow(), 1)
  let sinceId = storeSheet.getRange(savedStores.length, 1).getValue()
  if (!sinceId.match(/\d+/)) {
    sinceId = 0
  }

  const savedTweets = tweetSheet
    .getRange(2, 1, tweetSheet.getLastRow(), 3)
    .getValues()
    .filter(e => e[0] > sinceId)
  let data = []

  savedTweets.forEach(savedTweet => {
    const tweetId = savedTweet[0]
    const text = savedTweet[2]
    const middlePointMatches = text.match(/^・(.*)\n/gm)
    const numMatches = text.match(/^[①-⑫](.*)\n/gm)
    data = middlePointMatches
      ? data.concat(middlePointMatches.map(e => [tweetId, e.slice(1).replace('\n', '')]))
      : data
    data = numMatches
      ? data.concat(numMatches.map(e => [tweetId, e.slice(1).replace('\n', '')]))
      : data
  })

  if (data.length > 0) {
    storeSheet.getRange(savedStores.length + 2, 1, data.length, 2).setValues(data)
  }
}

export const address2Location = () => {
  const savedStores = getSavedStores(storeSheet.getLastRow(), 6)
  const data = savedStores.map(store => {
    const newStore = store
    const name = store[1]
    const address = store[3]
    if (!address) {
      const location = getGeocodeByAddress(name)
      if (location) {
        newStore[3] = location.address
        newStore[4] = location.lat
        newStore[5] = location.lng
      }
    }
    return newStore
  })

  if (data.length > 0) {
    storeSheet.getRange(2, 1, data.length, 6).setValues(data)
  }
}
