import React, { Component } from 'react'
import { addPet } from '../actions/addPet'
import { connect } from 'react-redux'
import { Container, Col, Form, FormGroup, Label, Input, Button, value} from 'reactstrap';

export class AddPet extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: "",
      species: "",
      breed: "",
      description: ""
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addPet( this.state );
    this.props.history.push('/pets');
  }

  render() {
    return (
      <div className="bg">

      <form onSubmit={ this.handleSubmit }>
      <Container className="pet-form"><br/><br/>
        <h2>Create Pet</h2><br/>
        <Form className="form">
          <Col>
            <FormGroup>
              <Input
                type="text"
                name="name"
                id="name"
                value={this.state.name}
                onChange={ this.handleChange }
                placeholder="name"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Input
                type="text"
                name="age"
                id="age"
                placeholder="age"
                value={ this.state.age }
                onChange={ this.handleChange }
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Input
                type="text"
                name="species"
                id="species"
                placeholder="species"
                value={ this.state.species }
                onChange={ this.handleChange }
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>

              <Input
                type="text"
                name="breed"
                id="breed"
                placeholder="breed"
                value={ this.state.breed }
                onChange={ this.handleChange }
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>

              <Input
                type="text"
                name="description"
                id="description"
                placeholder="description"
                value={ this.state.description }
                onChange={ this.handleChange }
              />
            </FormGroup>
          </Col>
          <Button type = "submit" >Add Pet</Button>
        </Form>
      </Container>
      </form>
      </div>
    )
  }
}




export default connect(null, { addPet })(AddPet)
