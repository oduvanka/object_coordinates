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
    /* Актуализирует информацию из полей ввода координат */
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
    else if (inputName === "sort" && this.state.arrCoords) {
      const newArr = this.state.arrCoords.concat();
      let j = 0;

      if (evt.target.value === "longitude") {
        j = 1;
      }
      
      newArr.sort((a, b) => {return a[j] - b[j];});
  
      this.setState({
        arrCoords: newArr
      });
    }
  }

  handleSubmitCoords(evt) {
    /* Получает координаты */
    evt.preventDefault();
    
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
    const newArr = this.state.tempArrCoords.concat([this.createUndefinedArr()]);
    this.setState({
      tempArrCoords: newArr
    });
  }

  handleClickRemove() {
    /* Удаляет последнюю строку с полями ввода координат */
    const lengthArr = this.state.tempArrCoords.length;
    const newArr = this.state.tempArrCoords.slice(0, lengthArr-1);
    this.setState({
      tempArrCoords: newArr
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
            changeSort={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
