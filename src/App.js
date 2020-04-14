import React from 'react';


class Entrada extends React.Component {
  //cuando es sin constructor
  entrada = React.createRef()

  componentDidMount() {
    this.focus()
  }

  //creacion de los elemento:
  focus = () => {
    this.entrada.current.focus()
  }
  blur = () => {
    this.entrada.current.blur()
  }

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
