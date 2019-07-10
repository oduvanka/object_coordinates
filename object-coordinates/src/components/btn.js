import React from 'react';

class Btn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "button",
      text: "Кнопка",
      title: undefined
    }
  }
  /* TODO текстовые данные из поля ввода преобразовывать в json */
  render() {
    return (
      <button className="btn" type={this.props.type} title={this.props.title} onClick={this.props.onClick}>
        {this.props.text}
      </button>
    );
  }
}

export default Btn;