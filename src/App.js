import { Component } from "react";
import {Map, GoogleApiWrapper} from '@googlemaps/react-wrapper';

class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        initialCenter={{ lat: 47.444, lng: -122.176}}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAyoJ9O-UFtRi6MfQ5rhAbvz-dvMtVAiuI'
})(MapContainer);

