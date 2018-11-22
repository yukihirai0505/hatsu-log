// import { getProperty } from './props'
// const apiKey = getProperty('GOOGLE_API_KEY')

export const getGeocodeByAddress = address => {
  try {
    const response = Maps.newGeocoder()
      .setLanguage('ja')
      .geocode(address)
    if (response.status !== 'ZERO_RESULTS') {
      const result = response.results[0]
      return {
        address: result.formatted_address,
        lat: result.geometry.location.lat,
        lng: result.geometry.location.lng
      }
    }
  } catch (e) {
    Logger.log(e.message)
  }
  return {}
}
