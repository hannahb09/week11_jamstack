import * as React from "react"
import { Link } from "gatsby"

class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    render() {
        return (
        <div>
            <h1>Counter</h1>
            <p>current count: {this.state.count}</p>
            <button onClick = {() =>
            this.setState({
                count: this.state.count + 1
            })
            }>plus</button>
            <button onClick = {() =>
            this.setState({
                count: this.state.count - 1
            })
            }>minus</button>

            <Link to="/">Home</Link>
            
            <Link to="/page-2">Page 2</Link>
        </div>
            )
        }
    }
    export default Counter
    