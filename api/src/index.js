import { saveDailyTweets, getTimeline } from './twitter'
import { text2store, address2Location } from './batch'
import { doGet } from './api'

// Daily at 9-10am => Save new Tweets about gourmet information .
global.saveDailyTweets = () => {
  saveDailyTweets()
}

// Daily at 11-12am => Save store name
global.text2store = () => {
  text2store()
}

global.address2Location = () => {
  address2Location()
}

// Daily as 1-2pm => save tabelog info
global.store2info = () => {
  // TODO: get tabelog link from address
}

// Only Once => To get past tweet, this job used only once firstly. So it will be never used.
global.getTimeline = () => {
  getTimeline()
}

global.doGet = e => doGet(e)
