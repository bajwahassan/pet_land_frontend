import React, { Component } from 'react';
import { Container, Col, Form, FormGroup, Label, Input, Button, value} from 'reactstrap';
class Contact extends Component {
  handleSubmit = event => {
    event.preventDefault();
    
    this.props.history.push('/pets');
  }

  render() {

    return (
      <div className="contact-page">
      <Container>
      <form  onSubmit={ this.handleSubmit } id="contact-form"  method="POST">
      <div className="form-group"><br/>
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" />
          </div>
          <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" aria-describedby="emailHelp" />
          </div>
          <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" rows="5"></textarea>
      </div>
          <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </Container>
      </div>
    );
  }
}

export default Contact;
