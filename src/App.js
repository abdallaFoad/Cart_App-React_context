import "./App.css";
import Container from "react-bootstrap/Container";
import { Route, Routes } from "react-router-dom";
import Products from "./Components/Products";
import NavbarComponent from "./Components/NavbarComponent";
import Box from "./Components/Box";
import ShoppingCardContext from "./context/ShoppingContext";

function App() {
  return (
    <div className="App">
      <ShoppingCardContext>
        <NavbarComponent />
        <Container>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/box" element={<Box />} />
          </Routes>
        </Container>
      </ShoppingCardContext>
    </div>
  );
}

export default App;
