import React from 'react';
import './App.css';
import Info from './components/info';
import Table from './components/table';
import LinkMap from './components/link-map';
import Btn from './components/btn';

function App() {
  return (
    <div className="App">
      <Info 
        title="Объект по координатам"
        text="Введите координаты и нажмите кнопку Обработать" 
      />
      <div className="content">
        <form className="form-coordinates">
          <p className="form-group">
            <label>Координаты:</label>
            <textarea></textarea>
          </p>
          <Btn type="submit" text="Обработать" />
        </form>
        <div className="result">
          <Table />
          <LinkMap resurs="yandex" />
          <LinkMap resurs="google" />
        </div>
      </div>
    </div>
  );
}

export default App;
