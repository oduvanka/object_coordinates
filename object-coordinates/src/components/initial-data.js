import React from 'react';
import Btn from './btn';

class InitialData extends React.Component {
  render() {
    return (
      <form className="form-coordinates" onSubmit={this.props.jsonCoords}>
        <p className="form-group">
          <label>Имя:</label>
          <input name="nameJSON" type="text" required></input>
        </p>
        <div className="form-item" name="coordinates">
          <p className="form-group">
            <label>Широта:</label>
            <input name="LatitudeJSON" type="text" required></input>
          </p>
          <p className="form-group">
            <label>Долгота:</label>
            <input name="LongitudeJSON" type="text" required></input>
          </p>
        </div>
        <div>
          <Btn type="button" text="+" title="Добавляет новую строку координат"/>
          <Btn type="button" text="-" title="Удаляет последнюю строку координат"/>
          <Btn type="submit" text="Обработать" />
        </div>
      </form>
    );
  }
}

export default InitialData;