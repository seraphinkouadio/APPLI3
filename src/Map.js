import React from "react";
import GoogleMapReact from "google-map-react";

// Ce composant affiche une carte Google Maps centrée sur les coordonnées données en props
function Map(props) {
  // Vous devez obtenir une clé API Google Maps pour utiliser cette bibliothèque
  // Vous pouvez suivre les instructions ici: https://developers.google.com/maps/documentation/javascript/get-api-key
  const apiKey = "AIzaSyC9bBw02a2FRkaDkwr86Lz5efnyXjZLp0Q";

  // Les options de la carte, comme le zoom ou le type de carte
  const mapOptions = {
    zoom: 11,
    mapTypeId: "roadmap",
  };

  return (
    <div style={{ height: "500px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={props.center}
        defaultZoom={mapOptions.zoom}
        options={mapOptions}
      ></GoogleMapReact>
    </div>
  );
}

export default Map;
