import React from 'react';
import './App.css';
import Info from './components/info';
import InitialData from './components/initial-data';
import Result from './components/result';

class App extends React.Component {
  state = {
    name: undefined,
    arrCoords: [[10, 20],[100, 200]],
    error: undefined
  }
  getCoordinates = (evt) => {
    /* Получает координаты */
    evt.preventDefault();
    
    const newCoords = evt.target.coordinates.value;
    if (newCoords) {
      const objNewCoords = JSON.parse(newCoords);
      this.setState({
        name: objNewCoords.name,
        arrCoords: objNewCoords.coords,
        error: ""
      });
    }
  }
  render() {
    return (
      <div className="App">
        <Info 
          title="Объект по координатам"
          text="Введите координаты и нажмите кнопку Обработать" 
        />
        <div className="content">
          <InitialData jsonCoords={this.getCoordinates} />
          <Result 
            name={this.state.name}
            arrCoords={this.state.arrCoords}
            error={this.state.error}
          />
        </div>
      </div>
    );
  }
}

export default App;
