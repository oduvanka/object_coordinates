import React, { useState, useEffect } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

 function ObjOnTheMap(props) {
    const [zoom, setZoom] = React.useState(9);
    const mapState = React.useMemo(() => ({ center: props.testCenter, zoom }), [
      zoom,
    ])
    return (
        <YMaps
          query={{
            ns: 'use-load-option',
            load: 'Map,Placemark,control.ZoomControl,control.FullscreenControl',
          }}
        >
          <Map state={mapState} />
        </YMaps>      
    )
  }

export default ObjOnTheMap;