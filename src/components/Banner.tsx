import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to My Portfolio</span>
            <h1>
              {`Hi I'm Ayodele`}
              <span className="wrap">software engineer</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              obcaecati rerum molestias pariatur odio aut? Amet dolor expedita
              assumenda nisi, repellat maxime iste ut quam possimus aperiam,
              eveniet omnis eum!
            </p>
            <button onClick={() => console.log("Connect")}>
              Let's Connect
              <ArrowRightCircle size={25}/>
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;