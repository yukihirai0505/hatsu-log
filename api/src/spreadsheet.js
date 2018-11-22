const bk = SpreadsheetApp.getActiveSpreadsheet()
export const tweetSheet = bk.getSheetByName('tweet')
export const storeSheet = bk.getSheetByName('store')

export const getSavedTweets = column =>
  tweetSheet
    .getRange(2, 1, tweetSheet.getLastRow(), column)
    .getValues()
    .filter(e => e[0])

export const getSavedStores = (row, column) =>
  storeSheet
    .getRange(2, 1, row, column)
    .getValues()
    .filter(e => e[0])
