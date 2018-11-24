import React, { Component } from 'react'
import { Container, Dropdown, Header } from 'semantic-ui-react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Leaflet from 'leaflet'
import TargetLink from './atoms/TargetLink'

Leaflet.Icon.Default.imagePath =
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/'

const style = {
  h1: {
    marginTop: '3em'
  },
  h2: {
    margin: '4em 0em 2em'
  },
  h3: {
    marginTop: '2em',
    padding: '2em 0em'
  },
  last: {
    marginBottom: '300px'
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      centerPosition: {
        lat: 35.6467334,
        lng: 139.7101065
      },
      zoom: 17,
      info: [],
      data: {
        active: 0,
        options: [
          { value: 0, text: 'Ebisu' },
          { value: 1, text: 'Shibuya' },
          { value: 2, text: 'Roppongi' }
        ]
      }
    }
  }

  async componentDidMount() {
    const res = await fetch(
      'https://script.google.com/macros/s/AKfycbyzNqxPtInjD8kDqZiD_kVr9MavY655S8oPR-uixuafnG-9YkU/exec'
    )
    const info = await res.json()
    this.setState({ info })
  }

  onSelectChange(d, e) {
    const { data } = this.state
    data.active = e.value
    let centerPosition
    switch (e.value) {
      case 0:
        centerPosition = {
          lat: 35.6467334,
          lng: 139.7101065
        }
        break
      case 1:
        centerPosition = {
          lat: 35.6580339,
          lng: 139.7016358
        }
        break
      case 2:
        centerPosition = {
          lat: 35.6628656,
          lng: 139.7315065
        }
        break
      default:
        break
    }
    this.setState({ data, centerPosition })
  }

  render() {
    const { centerPosition, zoom, info, data } = this.state
    return (
      <div>
        <Header as="h1" content="Hatsu Log" style={style.h1} textAlign="center"/>
        <Container>
          <Map center={[centerPosition.lat, centerPosition.lng]} zoom={zoom}>
            <TileLayer
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {info.map(e => {
              return e.stores && e.stores.map((store, key) => {
                return (<Marker key={key} position={[store.lat, store.lng]}>
                  <Popup>
                    <TargetLink href={e.tweetLink} text={store.name}/> <br/>
                    {e.hashtags}
                  </Popup>
                </Marker>)
              })
            })}
          </Map>
          <Dropdown
            label='area'
            name='area'
            selection
            value={data.active}
            width={4}
            options={data.options}
            style={{ marginTop: 20 }}
            onChange={(d, e) => this.onSelectChange(d, e)}
          />
        </Container>
      </div>
    )
  }
}

export default App