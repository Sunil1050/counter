import {Component} from "react"
import './App.css'
class App extends Component {
  state = {
    count: 0
  };

  onIncrease = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }
  render() {
    const {count} = this.state
    return (
      <div className="d-flex flex-column justify-content-center align-items-center main-container">
        <div className="counter-container">
          <h4>Counter App</h4>
          <h1>{count}</h1>
          <button className="btn btn-primary" onClick={this.onIncrease}>Increase</button>
        </div>
      </div>
    )
  }
}
export default App;
