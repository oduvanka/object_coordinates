import React from 'react';
import './App.css';
import Info from './components/info';
import InitialData from './components/initial-data';
import Result from './components/result';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: undefined,
      tempArrCoords: [this.createUndefinedArr()],
      arrCoords: undefined,
      centerLatitude: 0,
      centerLongitude: 0
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitCoords = this.handleSubmitCoords.bind(this);
    this.handleClickAdd = this.handleClickAdd.bind(this);
    this.handleClickRemove = this.handleClickRemove.bind(this);
  }

  handleChange(id, evt) {
    const inputName = evt.target.name;
    if (inputName === "LatitudeJSON" || inputName === "LongitudeJSON") {
      const newTempArrCoords = this.state.tempArrCoords.map((item, i) => {
        if (i === id) {
          (inputName === "LatitudeJSON") ? (item[0] = evt.target.value) : (item[1] = evt.target.value);
        }
        return item;
      })

      this.setState({
        tempArrCoords: newTempArrCoords
      });
    }
  }

  handleSubmitCoords(evt) {
    /* Получает координаты */
    evt.preventDefault();
    
    const newCoords = this.state.tempArrCoords;
    const newName = evt.target.nameJSON.value;
    if (newName) {
      const newCenterLatitude = (newCoords) ? this.setMedianCoords(newCoords, 0) : 0;
      const newCenterLongitude = (newCoords) ? this.setMedianCoords(newCoords, 1) : 0;

      this.setState({
        name: newName,
        arrCoords: newCoords,
        centerLatitude: newCenterLatitude,
        centerLongitude: newCenterLongitude
      });
      
      document.title = newName;
    }
  }

  setMedianCoords(newCoords, i) {
    /* Вычисляет медиану из всех координат ширины или долготы */
    let min = newCoords[0][i],
      max = newCoords[0][i];

    newCoords.forEach((item) => {
      if (item[i] < min) {min = item[i];}
      else if (item[i] > max) {max = item[i];}
    });
    
    const median = (min + max) / 2;

    return median.toFixed(6);
  }

  handleClickAdd() {
    /* Добавляет новую строку с полями ввода координат */
    this.state.tempArrCoords.push(this.createUndefinedArr());
    this.setState({
      tempArrCoords: this.state.tempArrCoords
    });
  }

  handleClickRemove() {
    /* Удаляет последнюю строку с полями ввода координат */
    this.state.tempArrCoords.pop();
    this.setState({
      tempArrCoords: this.state.tempArrCoords
    });
  }

  createUndefinedArr() {
    /* Возвращает массив с парой неопределённых значений */
    return ([undefined, undefined]);
  }

  render() {
    return (
      <div className="App">
        <Info 
          title="Объект по координатам"
          text="Введите json-текст: ключ name с именем объекта, и coords с массивом пар координат ширины и долготы. 
          Затем нажмите кнопку Обработать."
        />
        <div className="content">
          <InitialData 
            tempArrCoords={this.state.tempArrCoords}
            jsonCoords={this.handleSubmitCoords}
            changeInput={this.handleChange}
            addItem={this.handleClickAdd}
            removeItem={this.handleClickRemove}
          />
          <Result 
            name={this.state.name}
            arrCoords={this.state.arrCoords}
            centerLatitude={this.state.centerLatitude}
            centerLongitude={this.state.centerLongitude}
          />
        </div>
      </div>
    );
  }
}

export default App;
