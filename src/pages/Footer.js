import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';

const Footer = () => (
  <div>
    <footer>
      <Container fluid>
        <Row id='contact-info' ><Col lg={9} md={6} ><h2>We are conveniently located at:</h2>
          <p>Otautahi House, 279 St Asaph St</p>
          <p>Central Business District</p>
          <p>Christchurch 8011</p>  </Col>
          <Col lg={3} md={6} ><h2>Contact Us Now</h2>
            <p>Phone 03 940 8238</p>
            <p>< a href="mailto:accommodation@ara.ac.nz" class='email-link'>Email accommodation@ara.ac.nz</a></p>
            <p>Student Advisor: Debbie Evans</p>

          </Col>
        </Row>
      </Container>
    </footer>
  </div>

)

export default Footer;