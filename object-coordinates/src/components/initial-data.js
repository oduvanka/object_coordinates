import React from 'react';
import Btn from './btn';

class InitialData extends React.Component {
  render() {
    const listCoords = this.props.tempArrCoords.map((item, index) => {
      return (
        <li className="coordinates-item" key={index} onChange={this.props.changeInput.bind(this, index)}>
          <ItemCoords item={item} />
        </li>
      );
    });

    return (
      <form className="form-coordinates" onSubmit={this.props.jsonCoords}>
        <p className="form-group">
          <label>Имя:</label>
          <input name="nameJSON" type="text" required />
        </p>
        <ul className="coordinates-list" name="coordinates">
          {listCoords}
        </ul>
        <div>
          <Btn type="button" text="+" title="Добавляет новую строку координат" onClick={this.props.addItem}/>
          <Btn type="button" text="-" title="Удаляет последнюю строку координат" onClick={this.props.removeItem}/>
          <Btn type="submit" text="Обработать" />
        </div>
      </form>
    );
  }
}

class ItemCoords extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p className="form-group">
          <label>Широта:</label>
          <input name="LatitudeJSON" type="text" onChange={this.props.onChange} required />
        </p>
        <p className="form-group">
          <label>Долгота:</label>
          <input name="LongitudeJSON" type="text" onChange={this.props.onChange} required />
        </p>
      </React.Fragment>
    )
  }
}

export default InitialData;