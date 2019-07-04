import React from 'react';

class LinkMap extends React.Component {
  render() {
    let url = "",
      text = "";

    switch (this.props.resurs) {
      case "yandex":
        url = "https://yandex.ru/maps/?text=" + this.props.centerLatitude + "," + this.props.centerLongitude;
        text = "на Яндекс-картах";
        break;
      case "google":
        url = "https://www.google.com/maps/search/?api=1&query=" + this.props.centerLatitude + "," + this.props.centerLongitude;
        text = "на Гугл-картах";
        break;
      default:
        url = "#";
        text = "Ссылка";
        break;
    }

    return (
      <a href={url} rel="noopener noreferrer" target="_blank">
        {text}
      </a>
    );
  }
}

export default LinkMap;