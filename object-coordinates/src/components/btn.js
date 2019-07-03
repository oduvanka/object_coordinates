import React from 'react';

class Btn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "button",
      text: "Кнопка"
    }
  }
  render() {
    return (
      <button className="btn" type={this.props.type} onClick={() => alert('клик')}>
      {this.props.text}
      </button>
    );
  }
}

export default Btn;