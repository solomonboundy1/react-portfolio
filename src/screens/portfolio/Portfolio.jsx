import "./portfolio.css";
import portfolioData from "../../helpers/portfolioData";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Portfolio = () => {
  const [modalShow, setModalShow] = useState(false);
  const [tempData, setTempData] = useState({});

  function createModal(data) {
    return (
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        arial-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            {data.desc}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{data.summary}</p>
          <Image src={data.image} style={{ width: "200px" }} />
        </Modal.Body>
        <a
          id="portfolio__modal__link"
          href={data.link}
          target="_blank"
          rel="noreferrer"
        >
          View Code
        </a>
        <Modal.Footer>
          <div>Technologies Used</div>
          <p style={{ fontSize: "0.7rem", marginRight: "auto" }}>{data.tech}</p>
          <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const mapped = portfolioData.map((e, idx) => {
    return (
      <Card key={idx} id="portfolio__card__container">
        <Image
          className="portfolio__image"
          onClick={() => {
            setTempData({
              image: e.image,
              link: e.link,
              desc: e.desc,
              summary: e.summary,
              tech: e.tech,
            });
            setModalShow(true);
          }}
          src={e.image}
        />{" "}
        <h6>click image for more info</h6>
        <div className="portfolio__click__info">&#x1F50E;&#xFE0E;</div>
        {createModal(tempData)}
      </Card>
    );
  });

  return (
    <div className="portfolio__main__container" id="portfolio">
      <h1>PORTFOLIO</h1>
      <p>
        <a
          id="gitlink"
          href="https://github.com/solomonboundy1"
          target="_blank"
          rel="noreferrer"
        >
          Click Here To View My GitHub Page
        </a>
      </p>
      <Container fluid="lg" style={{ padding: "2rem 0" }}>
        <Row>{mapped}</Row>
      </Container>
    </div>
  );
};

export default Portfolio;
