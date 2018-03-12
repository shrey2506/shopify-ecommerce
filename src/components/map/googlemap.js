import React from 'react';
import { withScriptjs, GoogleMap, withGoogleMap, Marker } from 'react-google-maps';

export const MyGoogleMap = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
  ))