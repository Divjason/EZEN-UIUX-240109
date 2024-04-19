import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactForm from "./components/ContactForm";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <h1 className="title">연락처</h1>
      <Container>
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
