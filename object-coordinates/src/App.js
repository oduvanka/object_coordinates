import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Title text="Объект по координатам" />
      <Instruction text="Введите координаты и нажмите кнопку Обработать" />
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
          <Link resurs={"yandex"} />
          <Link resurs="google" />
        </div>
      </div>
    </div>
  );
}

class Title extends React.Component {
  render() {
    return (
      <h1>{this.props.text}</h1>
    );
  }
}

class Instruction extends React.Component {
  render() {
    return (
      <p>{this.props.text}</p>
    );
  }
}

class Table extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <Columns latitude="58" longitude="37" />
        </tr>
        <tr>
          <Columns latitude="59" longitude="37" />
        </tr>
        <tr>
          <Columns latitude="58" longitude="39" />
        </tr>
        <tr>
          <Columns latitude="58" longitude="38" />
        </tr>
      </table>
    );
  }
}

class Columns extends React.Component {
  render() {
    return (
      <React.Fragment key={this.props.latitude + this.props.longitude}>
        <td>{this.props.latitude}</td>
        <td>{this.props.longitude}</td>
      </React.Fragment>
    );
  }
}

class Link extends React.Component {
  render() {
    let fullLink = "",
      textLink = "";

    switch (this.props.resurs) {
      case "yandex":
        fullLink = "https://yandex.ru/maps";
        textLink = "на Яндекс-картах";
        break;
      case "google":
        fullLink = "https://www.google.ru/maps";
        textLink = "на Гугл-картах";
        break;
      default:
        fullLink = "#";
        textLink = "Ссылка";
        break;
    }

    return (
      <a href={fullLink} onClick={() => alert('клик')}>
        {textLink}
      </a>
    );
  }
}

class Btn extends React.Component {
  render() {
    return (
      <button className="btn" type={this.props.type}>
      {this.props.text}
      </button>
    );
  }
}

export default App;
