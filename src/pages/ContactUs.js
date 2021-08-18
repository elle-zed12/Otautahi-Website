import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.name !== "" && this.state.email !== "" && this.state.message !== "") {
      this.resetForm();
      alert("Successfully submitted!")
    }
    else alert("Please fill up all the information needed so we can get back to you.")
  }

  resetForm() {
    this.setState({ name: "", email: "", message: "" })
  }

  render() {
    return (
      <Container fluid class="main-body">
        {/* Tried to create a separate component for this that can be used both for contact us and apply now but got some bugs */}
        <Row id='contact-info'>
          <Col md={6} lg={9}>
            <h2>Contact Details</h2>
            <p>Phone: 03 940 8238</p>
            <p><a href="mailto:accommodation@ara.ac.nz" id='email-link' >Email: accommodation@ara.ac.nz</a></p>
            <h2>Office Hours</h2>
            <p>Debbie Evans</p>
            <p>Student Advisor</p>
            <p>Monday - Friday</p>
            <p>8:00 am - 4:00 pm</p>
          </Col>
          <Col md={6} lg={3}><h2>Our Location</h2>
            <p>Otautahi House</p>
            <p>79 St Asaph St</p>
            <p>CBD</p>
            <p>Christchurch 8011</p>  </Col>
        </Row>
        <Row><Col>
          <h2>Contact us now or send inquiry using the contact form below.</h2>
          <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <div className="form-group">

              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form></Col>
        </Row>
      </Container>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value })
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value })
  }
}

export default ContactUs;