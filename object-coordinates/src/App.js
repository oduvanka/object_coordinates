import React from 'react';
import './App.css';
import Info from './components/info';
import InitialData from './components/initial-data';
import Result from './components/result';

function App() {
  return (
    <div className="App">
      <Info 
        title="Объект по координатам"
        text="Введите координаты и нажмите кнопку Обработать" 
      />
      <div className="content">
        <InitialData />
        <Result />
      </div>
    </div>
  );
}

export default App;
