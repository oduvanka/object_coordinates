import React from 'react';

class LinkMap extends React.Component {
  render() {
    let url = "#",
      text = "Ссылка";

    switch (this.props.resurs) {
      case "yandex":
        url = "https://yandex.ru/maps/?text=" + this.props.coordLatitude + "," + this.props.coordLongitude;
        break;
      case "google":
        url = "https://www.google.com/maps/search/?api=1&query=" + this.props.coordLatitude + "," + this.props.coordLongitude;
        break;
      default:
        url = "#";
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