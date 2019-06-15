import React, { Component } from 'react';
import Axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: undefined,
      name: '',
      age: '',
      height: ''
    };
  }

  editSmurf = event => {
    event.preventDefault();
    
    // add smurf to API
    Axios
      .put(`http://localhost:3333/smurfs/${this.state.id}`, {
          name: this.state.name,
          age: this.state.age,
          height: this.state.height
        }
      )
      .then(() => {
        this.setState({
          id: undefined,
          name: '',
          age: '',
          height: ''
        });
      })
      .catch(err => console.log(err))
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    const idParent = document.querySelector('.smurf-ids');

    this.props.smurfs.forEach(smurf => {
      idParent.insertAdjacentHTML("beforeend",   `<option>${smurf.id}</option>`);
    })

  }

  render() {
    return (
      <div>
        <form onSubmit={this.addSmurf}>
          <select className="smurf-ids">
          </select>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
