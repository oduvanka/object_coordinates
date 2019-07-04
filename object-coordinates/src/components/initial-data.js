import React from 'react';
import Btn from './btn';

class InitialData extends React.Component {
  render() {
    return (
      <form className="form-coordinates" onSubmit={this.props.jsonCoords}>
        <p className="form-group">
          <label>JSON с координатами:</label>
          <textarea name="coordinates" required></textarea>
        </p>
        <Btn type="submit" text="Обработать" />
      </form>
    );
  }
}

export default InitialData;