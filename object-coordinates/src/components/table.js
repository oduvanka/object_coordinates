import React from 'react';
import LinkMap from './link-map';

class Table extends React.Component {
  render() {
    let tRows = undefined;

    if (this.props.arrCoords) {
      tRows = this.props.arrCoords.map((item, index) => {
        return (
          <tr key={index}>
            <Columns latitude={item[0]} longitude={item[1]} />
          </tr>
        );
      });
    }
    return (
      <table>
        <thead>
          <tr>
            <th>
              <p>
                <input className="sort-input visually-hidden-input" id="sort-latitude" type="radio" name="sort" value="latitude" />
                <label className="sort-label" for="sort-latitude">широта</label>
              </p>
            </th>
            <th>
              <p>
                <input className="sort-input visually-hidden-input" id="sort-longitude" type="radio" name="sort" value="longitude" />
                <label className="sort-label" for="sort-longitude">долгота</label>
              </p>
            </th>
            <th>на Яндексе</th>
            <th>в Гугле</th>
          </tr>
        </thead>
        <tbody>
          {tRows}
        </tbody>
      </table>      
    );
  }
}

class Columns extends React.Component {
  render() {
    return (
      <React.Fragment>
        <td>{this.props.latitude}</td>
        <td>{this.props.longitude}</td>
        <td>
          <LinkMap 
            resurs="yandex" 
            coordLatitude={this.props.latitude} 
            coordLongitude={this.props.longitude} 
          />
        </td>
        <td>
          <LinkMap 
            resurs="google" 
            coordLatitude={this.props.latitude} 
            coordLongitude={this.props.longitude} 
          />
        </td>
      </React.Fragment>
    );
  }
}

export default Table;