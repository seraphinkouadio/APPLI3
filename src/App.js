import React from "react";
import "./App.css";
import Map from "./Map";
import { Navbar, Container } from "react-bootstrap";
import GridComplexExample from "./GridComplexExample";

function App() {
  return (
    <div className="App" style={{ backgroundColor: 'lightblue' }}>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Bienvenue sur ma page d'accueil</Navbar.Brand>
        </Container>
      </Navbar>
      <h1>UNA.COM</h1>
      <p>Cette page est créée avec React et Google Maps</p>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ flex: 1 }}>
          <Map center={{ lat: 5.351014, lng: -3.997696 }} />
        </div>
        <div style={{ flex: 1 }}>
          <GridComplexExample />
        </div>
      </div>
    </div>
  );
}

export default App;
