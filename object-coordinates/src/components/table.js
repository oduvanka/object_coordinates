import React from 'react';

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
        <tr>
          <th>широта</th>
          <th>долгота</th>
        </tr>
        {tRows}
      </table>      
    );
  }
}

class Columns extends React.Component {
  render() {
    return (
      <React.Fragment key={this.props.latitude + this.props.longitude}>
        <td>{this.props.latitude}</td>
        <td>{this.props.longitude}</td>
      </React.Fragment>
    );
  }
}

export default Table;