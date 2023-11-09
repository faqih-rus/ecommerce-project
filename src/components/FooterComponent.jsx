import {Container,Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
 
const FooterComponent = () => {
  return (
    <div className="footer">

      <Container>
        <Row className="d-flex justify-content-between">

          <Col lg="5">
            <h3 className="fw-bold">Kelas Kemarin</h3>
            <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum corporis
              ipsum ullam culpa perspiciatis placeat, 
              eos sit a reprehenderit est?
            </p>
            <div className="no mb-1 mt-4">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">+62 818-0887-0358</p>
              </Link>
            </div>
            <div className="mail "> 
              <Link className="text-decoration-none">
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">faqihsetiawan17@gmail.com</p>
              </Link>
            </div>
          </Col>

          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold">Menu</h5>
            <Link to="">Home</Link>
            <Link to="kelas">Kelas</Link>
            <Link to="testimonial">Testimonial</Link>
            <Link to="faq">FAQ</Link>
            <Link to="syaratketen">Syarat & Ketentuan</Link>
          </Col>

          <Col lg="4" className="mt-lg-0 mt-5">
            <h5 className="fw-bold mb-3">Langganan Sekarang!</h5>
            <div className="subscribe">
              <input type="text" />
              <button className="btn btn-danger rounded-end rounded-0">Langganan</button>
            </div>
            <div className="social mt-3">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="text-center px-md-0 px-3">
          <p>&copy; Copyright {new Date().getFullYear()}&nbsp; by <span className="fw-bold text-danger ">Muhammad Faqih Setiawan</span></p>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default FooterComponent