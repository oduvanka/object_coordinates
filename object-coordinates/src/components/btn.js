import React from 'react';

class Btn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "button",
      text: "Кнопка"
    }
  }
  /* TODO текстовые данные из поля ввода преобразовывать в json */
  render() {
    return (
      <button className="btn" type={this.props.type}>
      {this.props.text}
      </button>
    );
  }
}

export default Btn;