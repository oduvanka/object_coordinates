import React from 'react';

class Table extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <Columns latitude="58" longitude="37" />
        </tr>
        <tr>
          <Columns latitude="59" longitude="37" />
        </tr>
        <tr>
          <Columns latitude="58" longitude="39" />
        </tr>
        <tr>
          <Columns latitude="58" longitude="38" />
        </tr>
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