import React from 'react';
import Table from './table';

class Result extends React.Component {
  render() {
    return (
      <div className="result">        
        <Table 
          arrCoords={this.props.arrCoords}
          changeSort={this.props.changeSort}
        />
      </div>
    );
  }
}

export default Result;