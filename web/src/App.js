/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Item,
  Label,
  Menu,
  Segment,
  Step,
  Table
} from 'semantic-ui-react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
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
      info: []
    }
  }

  async componentDidMount() {
    const res = await fetch(
      'https://script.google.com/macros/s/AKfycbyzNqxPtInjD8kDqZiD_kVr9MavY655S8oPR-uixuafnG-9YkU/exec'
    )
    const info = await res.json()
    this.setState({ info })
  }

  render() {
    const { info } = this.state
    return (
      <div>
        <Header as="h1" content="Hatsu Log" style={style.h1} textAlign="center"/>
        <Container>
          <Map center={[35.6455172, 139.7118403]} zoom={12}>
            <TileLayer
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {info.map(e => {
              return e.stores && e.stores.map((store, key) => {
                return (<Marker key={key} position={[store.lat, store.lng]}>
                  <Popup>
                    <TargetLink href={e.tweetLink} text={store.name}/>
                  </Popup>
                </Marker>)
              })
            })}
          </Map>
        </Container>
      </div>
    )
  }
}

export default App