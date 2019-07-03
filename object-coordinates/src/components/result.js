import React from 'react';
import Table from './table';
import LinkMap from './link-map';

class Result extends React.Component {
  render() {
    return (
      <div className="result">
        <Table 
          arrCoords={this.props.arrCoords}
        />
        <LinkMap resurs="yandex" />
        <LinkMap resurs="google" />
      </div>
    );
  }
}

export default Result;