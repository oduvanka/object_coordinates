import React from 'react';
import Table from './table';

class Result extends React.Component {
  render() {
    return (
      <div className="result">
        <fieldset>
          <legend>Сортировать: </legend>
          <p>
            <input type="radio" name="sort" value="sort-latitude" />
            <label>По широте</label>
          </p>
          <p>
            <input type="radio" name="sort" value="sort-longitude" />
            <label>По долготе</label>
          </p>
        </fieldset>
        <Table 
          arrCoords={this.props.arrCoords}
        />
      </div>
    );
  }
}

export default Result;