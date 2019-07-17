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
          <input 
            className="input-Name" name="nameJSON" type="text" required 
            defaultValue={this.props.nameObject} 
            onChange={this.props.changeInput.bind(this, null)} 
          />
        </p>
        <ul className="coordinates-list" name="coordinates">
          {listCoords}
        </ul>
        <div>
          <Btn type="button" text="+" title="Добавляет новую строку координат" onClick={this.props.addItem}/>
          <Btn type="button" text="-" title="Удаляет последнюю строку координат" onClick={this.props.removeItem}/>
          <Btn type="button" text="Демо" onClick={this.props.setTestData}/>
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
          <input 
            name="LatitudeJSON" type="number" min="-90" max="90" step="0.000001" required 
            defaultValue={this.props.item[0]}
            onChange={this.props.onChange} 
          />
        </p>
        <p className="form-group">
          <label>Долгота:</label>
          <input 
            name="LongitudeJSON" type="number" min="-180" max="180" step="0.000001" required 
            defaultValue={this.props.item[1]}
            onChange={this.props.onChange} 
          />
        </p>
      </React.Fragment>
    )
  }
}

export default InitialData;