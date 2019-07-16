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
            <HeaderT onChange={this.props.changeSort.bind(this, null)} />
          </tr>
        </thead>
        <tbody>
          {tRows}
        </tbody>
      </table>      
    );
  }
}

class HeaderT extends React.Component {
  render() {
    return (
      <React.Fragment>
        <th>
          <p>
            <input 
              className="sort-input visually-hidden-input" id="sort-latitude" type="radio" name="sort" value="latitude" 
              onChange={this.props.onChange} 
            />
            <label className="sort-label" htmlFor="sort-latitude">широта</label>
          </p>
        </th>
        <th>
          <p>
            <input 
              className="sort-input visually-hidden-input" id="sort-longitude" type="radio" name="sort" value="longitude" 
              onChange={this.props.onChange} 
            />
            <label className="sort-label" htmlFor="sort-longitude">долгота</label>
          </p>
        </th>
        <th>в Яндексе</th>
        <th>в Гугле</th>
      </React.Fragment>
    )
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