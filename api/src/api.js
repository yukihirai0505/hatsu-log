import { getSavedTweets, getSavedStores, storeSheet } from './spreadsheet'

export const doGet = e => {
  Logger.log(e)
  const output = ContentService.createTextOutput()

  const savedStores = getSavedStores(storeSheet.getLastRow(), 6)
  const content = getSavedTweets(5).map(tweet => {
    const id = tweet[0]
    const tweetLink = tweet[1]
    const hashtags = tweet[3]
    const stores = savedStores.filter(store => store[0] === id && store[4]).map(store => {
      const name = store[1]
      const lat = store[4]
      const lng = store[5]
      return {
        name,
        lat,
        lng
      }
    })
    return {
      tweetLink,
      stores,
      hashtags
    }
  })
  output.setMimeType(ContentService.MimeType.JSON)
  output.setContent(JSON.stringify(content))
  return output
}
