import React from 'react';
import ReactMapGL from 'react-map-gl';

const Map = ()  =>  {
  const state = {
    viewport: {
      width: '100%',
      height: 400,
      latitude: -23.5797969,
      longitude: -48.0380094,
      zoom: 17
    }
  };
    return (
        <ReactMapGL style={{ marginBottom: 50 }}
        {...state.viewport} 
        mapboxApiAccessToken = "pk.eyJ1IjoiaGFhc3R5ciIsImEiOiJjang3dGI4MWkwZGtiM29xYjQ2anBqcjJiIn0.s_sQ_CPRUvanfVqUnLDKiw"
        />
    );
}

export default Map