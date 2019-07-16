import React from 'react';
import './App.css';
import Info from './components/info';
import InitialData from './components/initial-data';
import Result from './components/result';
import ObjOnTheMap from './components/obj-on-map';

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
    this.handleClickRemoveExcess = this.handleClickRemoveExcess.bind(this);
    this.handleClickTestData = this.handleClickTestData.bind(this);
  }

  handleChange(id, evt) {
    /* Актуализирует информацию из полей ввода координат */
    const inputName = evt.target.name;
    const inputValue = evt.target.value;
    
    if (inputName === "LatitudeJSON" || inputName === "LongitudeJSON") {
      /* Поля ввода координат */
      const newTempArrCoords = this.state.tempArrCoords.slice();
      let newRow = newTempArrCoords[id];

      (inputName === "LatitudeJSON") ? (newRow.splice(0, 1, inputValue)) : (newRow.splice(1, 1, inputValue));

      this.setState({
        tempArrCoords: newTempArrCoords
      });
    }
    else if (inputName === "sort" && this.state.arrCoords) {
      /* Радиобаттоны сортировки */
      let j = 0;
      if (inputValue === "longitude") {
        j = 1;
      }

      const newArr = this.sortArray(this.state.arrCoords.slice(), j);
  
      this.setState({
        arrCoords: newArr
      });
    }
    else if (inputName === "nameJSON") {
      this.setState({
        name: inputValue
      });
    }
  }

  handleSubmitCoords(evt) {
    /* Получает координаты */
    evt.preventDefault();
    
    const newCoords = this.state.tempArrCoords.slice();
    const newName = evt.target.nameJSON.value;
    if (newName) {
      this.setState({
        name: newName,
        arrCoords: newCoords
      });
      
      this.setDocumentTitle(newName);
    }
  }

  setDocumentTitle(newTitle) {
    /* Меняет заголовок документа */
    document.title = newTitle;
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

  handleClickRemoveExcess() {
    /* Удялет из таблицы точки, которые дальше от остальных на 100 км */
    if (this.state.arrCoords) {
      const newArrSortLatitude = this.sortArray(this.state.arrCoords.slice());
      const newArr = this.removeExcess(newArrSortLatitude, 0);
      
      this.setState({
        arrCoords: newArr
      });
    }
  }

  createUndefinedArr() {
    /* Возвращает массив с парой неопределённых значений */
    return ([undefined, undefined]);
  }

  sortArray(myArr, j) {
  /* Возвращает отсортированный двумерный массив,
  myArr - массив,
  j - измерение по которому будет сортироваться */

    myArr.sort((a, b) => {return a[j] - b[j];});

    return myArr;
  }

  removeExcess(myArr) {
    /* Удаляет из массива элементы, отличающиеся от соседей на заданную дельту,
    myArr - отсортированный массив координат,
    typeCoord - измерение, по которому отсортирован массив */

    const maxDistance = 100;
    let i = 0;
    
    let distanceLeft,
      distanceRight;

    while (i < myArr.length) {
      distanceLeft = maxDistance;
      distanceRight = maxDistance;

      if (i > 0) {
        /* Если не первый элемент - узнаем его отдалённость от предыдущего элемента */
        distanceLeft = this.getDistanceBetweenCoords(myArr[i-1], myArr[i]);
      }
      if (i < myArr.length-1) {
        /* Если не последний элемент - узнаем его отдалённость от следующего элемента */
        distanceRight = this.getDistanceBetweenCoords(myArr[i], myArr[i+1]);
      }

      if (distanceLeft >= maxDistance && distanceRight >= maxDistance) {
        /* Удалить со сдвигом из myArr */
        myArr.splice(i, 1);
      }
      else {
        i++;
      }
    }
    
    return myArr;
  }

  getDistanceBetweenCoords(coord1, coord2) {
    /* Вычисляет расстояние между географическими координатами,
    coord1, coord2 - координаты вида (широта, долгота) */

    const laticude1Rad = this.getCoordRad(coord1[0]),
      longitude1Rad = this.getCoordRad(coord1[1]),
      laticude2Rad = this.getCoordRad(coord2[0]),
      longitude2Rad = this.getCoordRad(coord2[1]);

    /* средний радиус земного шара, км */
    const R = 6371;

    /* расстояние между пунктами, измеряемое в радианах длиной дуги большого круга земного шара.  */
    /* arccos( (sin(широта1) * sin(широта2)) + (cos(широта1) * cos(широта2) * cos(долгота1 - долгота2)) ) */
    const d = 
      (Math.acos(
        Math.sin(laticude1Rad) * Math.sin(laticude2Rad) 
        +
        Math.cos(laticude1Rad) * Math.cos(laticude2Rad) * Math.cos(longitude1Rad - longitude2Rad)
        )
      );
    
    /* Расстояние между пунктами, км*/
    const L = R * d;

    return L;
  }

  getCoordRad(coordDeg) {
    /* Переводит градусы в радианы,
    coordDeg - градусы в десятичной записи */

    const coordRad = coordDeg * Math.PI / 180;
    
    return coordRad;
  }

  handleClickTestData() {
    const testName = "Рыбинское водохранилище";
    const testCoords = [
      [57.932402, 38.475200],
      [58.055728, 38.848267],
      [58.503421, 39.112639],
      [58.605576, 42.527806],
      [58.826003, 37.153202],
      [59.161561, 37.698044]
    ];

    this.setState({
      name: testName,
      tempArrCoords: testCoords
    });

    this.setDocumentTitle(testName);
  }

  render() {
    
    return (
      <div className="App">
        <Info 
          title="Объект по координатам"
          text="Введите имя объекта, заполните поля его координатами широты и долготы. Координаты должны быть в десятичной системе счисления.
          Затем нажмите кнопку Обработать."
        />
        <div className="content">
          <InitialData 
            tempArrCoords={this.state.tempArrCoords}
            nameObject={this.state.name}
            jsonCoords={this.handleSubmitCoords}
            changeInput={this.handleChange}
            addItem={this.handleClickAdd}
            removeItem={this.handleClickRemove}
            setTestData={this.handleClickTestData}
          />
          <Result 
            name={this.state.name}
            arrCoords={this.state.arrCoords}
            changeSort={this.handleChange}
            removeExcess={this.handleClickRemoveExcess}
          />
          <div className="map">
            <ObjOnTheMap testCenter={[57.932402, 38.475200]}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
