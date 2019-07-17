import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const mapState = {
  center: [55.75, 37.57],
  zoom: 9
};

class ObjOnTheMap extends React.Component {
  state = {
    ymaps: null
  };

  setYmaps = ymaps => {
    this.setState({ ymaps });
  };

  setCenter = ref => {
    const { ymaps } = this.state;
    if (ymaps && this.props.arrCoords) {
      const POINTS = this.props.arrCoords.concat();
      ref.setBounds(ymaps.util.bounds.fromPoints(POINTS));
    }
  };
  render() {
    let tRows = undefined;

    if (this.props.arrCoords) {      
      tRows = this.props.arrCoords.map((item, index) => {
        return (
          <Placemark 
            key={index}
            defaultGeometry={item}
          />
        );
      });
    }

    return (
        <YMaps query={{ lang: "ru_RU", load: "package.full" }}>
          <Map 
            defaultState={mapState}
            onLoad={ymaps => this.setYmaps(ymaps)}
            instanceRef={ref => ref && this.setCenter(ref)}
          >
            {tRows}
          </Map>
        </YMaps>      
    )
  }
}

export default ObjOnTheMap;