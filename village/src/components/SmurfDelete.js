import React from 'react';
import Axios from 'axios';

class SmurfDelete extends React.Component{
  
  handlerDeleteSmurf = () => {
    Axios
      .delete('http://localhost:3333/smurfs/123', {
        id: 123
      })
      .catch(err => console.log(err))
  }

  render() {
    return(
      <button onClick={this.handlerDeleteSmurf}>Delete a Smurf</button>
    )
  }
}

export default SmurfDelete;