import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      title: "",
      image: "",
      rating: 0
    };

    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Movie data</ModalHeader>
          <ModalBody>
            <form onSubmit={e => e.preventDefault()}>
              <input
                onChange={this.handleChange}
                type="text"
                placeholder="movie title"
                name="title"
                value={this.state.title}
              />
              <input
                onChange={this.handleChange}
                type="text"
                placeholder="src"
                name="image"
                value={this.state.image}
              />
              <input
                onChange={this.handleChange}
                type="text"
                placeholder="rating"
                name="rating"
                value={this.state.rating}
              />
            </form>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={event => {
                this.props.addMovie(
                  this.state.title,
                  this.state.image,
                  this.state.rating
                );
              }}
            >
              Add Movie
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddMovie;
