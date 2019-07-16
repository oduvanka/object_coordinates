import React, { useState, useEffect } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

 function ObjOnTheMap(props) {
  let centerCoords = [55.75, 37.57];
  if (props.testCenter) {
    centerCoords = props.testCenter;
  }

  const [zoom, setZoom] = React.useState(7);
  const mapState = React.useMemo(
    () => ({ 
      center: centerCoords, 
      zoom, 
      controls: ['zoomControl', 'fullscreenControl'] 
    }), 
    [zoom]
  );

  let tRows = undefined;
  if (props.testCoords) {
    tRows = props.testCoords.map((item, index) => {
      return (
        <Placemark 
          key={index}
          defaultGeometry={item}
        />
      );
    });
  }

  return (
      <YMaps
        query={{
          ns: 'use-load-option',
          load: 'Map,Placemark,control.ZoomControl,control.FullscreenControl',
        }}
      >
        <Map state={mapState}>
          {tRows}
        </Map>
      </YMaps>      
  )
}

export default ObjOnTheMap;