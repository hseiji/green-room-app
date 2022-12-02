import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";

function App() {

  return <Container>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/store" element={<Store/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    <h1>Hi!</h1>
  </Container>

}

export default App