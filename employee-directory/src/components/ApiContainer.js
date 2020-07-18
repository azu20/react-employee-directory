import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import EmployeeDetail from "./EmployeeDetail";
import API from "../controller/API";

class ApiContainer extends Component {
  state = {
    result: {},
    search: ""
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchEmployees("The Matrix");
  }

  searchEmployees = query => {
    API.search(query)
      .then((res) => {
        console.log("searchEmployees",res.data.results[0] );
        this.setState({ result: res.data.results[0] });
      })
      .catch(err => console.log(err));
  };



  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployees(this.state.search);
  };

  render() {
    return (
        <div>
      <Container>
          <Row>
          <Col size="sm-12">
            <div heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </div>
            <Card
            //   heading={this.state.result.name}
            >
              {this.state.result.name ? (
                <EmployeeDetail
                  name={this.state.result.name}
                  phone={this.state.result.phone}
                  email={this.state.result.email}
                  dob={this.state.result.dob}
                  picture={this.state.result.picture.thumbnail}
                //   released={this.state.result.Released}
                />
              ) : (
                  <h3>No Results to Display</h3>
                )}
            </Card>
          </Col>
          </Row>
          </Container>
  
      </div>
    );
  }
}

export default ApiContainer;
