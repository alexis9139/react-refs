import React from 'react'

const FancyInput = React.forwardRef((props, ref) => (
    < div >
        <input type="text" ref={ref} />
    </div >
))

class App2 extends React.Component {
    entrada = React.createRef()
    componentDidMount() {
        this.entrada.current.focus()
        console.log(this.entrada)
    }
    render() {
        return (
            <div>
                <FancyInput ref={this.entrada} />
            </div>
        )
    }
}

export default App2