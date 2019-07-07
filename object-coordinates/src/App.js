import React from 'react';
import './App.css';
import Info from './components/info';
import InitialData from './components/initial-data';
import Result from './components/result';

class App extends React.Component {
  state = {
    name: undefined,
    tempArrCoords: [this.createUndefinedArr()],
    arrCoords: undefined,
    centerLatitude: 0,
    centerLongitude: 0
  }

  handleSubmitCoords = (evt) => {
    /* Получает координаты */
    evt.preventDefault();
    
    const newCoords = evt.target.coordinates.value;
    if (newCoords) {
      const objNewCoords = JSON.parse(newCoords);
      if (objNewCoords) {
        const newCenterLatitude = (objNewCoords.coords) ? this.setMedianCoords(objNewCoords.coords, 0) : 0;
        const newCenterLongitude = (objNewCoords.coords) ? this.setMedianCoords(objNewCoords.coords, 1) : 0;

        this.setState({
          name: objNewCoords.name,
          arrCoords: objNewCoords.coords,
          centerLatitude: newCenterLatitude,
          centerLongitude: newCenterLongitude
        });
        
        document.title = objNewCoords.name;
      }
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
    this.state.tempArrCoords.push(this.createUndefinedArr());
    this.setState({
      tempArrCoords: this.state.tempArrCoords
    });
  }

  handleClickRemove() {
    alert("-");
  }

  createUndefinedArr() {
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
            addItem={() => this.handleClickAdd()}
            removeItem={() => this.handleClickRemove()}
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
