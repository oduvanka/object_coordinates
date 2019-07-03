import React from 'react';

class LinkMap extends React.Component {
  render() {
    let fullLink = "",
      textLink = "",
      centerLatitude = "",
      centerLongitude = "";

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
      <a href={fullLink}>
        {textLink}
      </a>
    );
  }
}

export default LinkMap;