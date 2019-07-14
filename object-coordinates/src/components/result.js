import React from 'react';
import Table from './table';
import Btn from './btn';

class Result extends React.Component {
  render() {
    return (
      <div className="result">        
        <Table 
          arrCoords={this.props.arrCoords}
          changeSort={this.props.changeSort}
        />
        <Btn type="button" text="Убрать лишние" onClick={this.props.removeExcess}/>
      </div>
    );
  }
}

export default Result;