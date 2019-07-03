import React from 'react';
import Btn from './btn';

class InitialData extends React.Component {
  render() {
    return (
      <div className="initial-data">
        <form className="form-coordinates">
          <p className="form-group">
            <label>Координаты:</label>
            <textarea></textarea>
          </p>
          <Btn type="submit" text="Обработать" />
        </form>
      </div>
    );
  }
}

export default InitialData;