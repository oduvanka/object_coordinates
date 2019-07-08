import React from 'react';
import './App.css';
import Info from './components/info';
import InitialData from './components/initial-data';
import Result from './components/result';

class App extends React.Component {
  state = {
    name: undefined,
    arrCoords: undefined
  }
  getCoordinates = (evt) => {
    /* Получает координаты */
    evt.preventDefault();
    
    const newCoords = evt.target.coordinates.value;
    if (newCoords) {
      const objNewCoords = JSON.parse(newCoords);
      if (objNewCoords) {
        this.setState({
          name: objNewCoords.name,
          arrCoords: objNewCoords.coords
        });
        
        document.title = objNewCoords.name;
      }
    }
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
          <InitialData jsonCoords={this.getCoordinates} />
          <Result 
            name={this.state.name}
            arrCoords={this.state.arrCoords}
          />
        </div>
      </div>
    );
  }
}

export default App;
