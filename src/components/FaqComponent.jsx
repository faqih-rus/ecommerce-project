import {Container, Row, Col, Accordion} from 'react-bootstrap';
import {faq} from "../data/index";

const FaqComponent = () => {
  return (
    <div className='faq'>
      <Container>
        <Row>
          <Col>
            <h2 className='text-center fw-bold'>QnA Seputar Kelas Kemarin</h2>
          </Col>
        </Row>
        <Row className='d-flex row-cols-lg-2 row-cols-1 gap-4 pt-5 row'>
          {faq.map((data) => {
            return (<Col key={data.id}>
              <Accordion className='shadow-mt'>
              <Accordion.Item eventKey={data.eventKey}>
                <Accordion.Header>{data.title}</Accordion.Header>
                <Accordion.Body>
                {data.desc}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>)
          })}
        </Row>
      </Container>
    </div>
  )
}

export default FaqComponent