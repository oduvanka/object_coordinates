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
      arrCoords: undefined
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
    const newCoords = this.state.tempArrCoords;
    const newName = evt.target.nameJSON.value;
    if (newName) {
      this.setState({
        name: newName,
        arrCoords: newCoords
      });
      
      document.title = newName;
    }
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
          />
        </div>
      </div>
    );
  }
}

export default App;
