import React from 'react';


class Entrada extends React.Component {
  //creacion del constructor
  constructor(props) {
    super(props)
    this.entrada = React.createRef()
  }



  //creacion de los elemento:
  focus = () => {
    console.log(this.entrada)
  }
  blur = () => { }
  render() {
    return (
      <div>
        <input type="text" ref={this.entrada} />
        <button onClick={this.focus}>Focus</button>
        <button onClick={this.blur}>Blur</button>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Entrada></Entrada>
      </div>
    )
  }
}

export default App;
