import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {check: true}
  onNumber = () => {
    this.setState(prvt => ({
      check: prvt.check + Math.floor(Math.random() * 100),
    }))
  }
  render() {
    const {check} = this.state
    const result = check % 2 === 0 ? 'even' : 'odd';
    return (
      <div className="background">
        <div className="container">
          <h1 className="heading"> Count {check} </h1>
          <p> Count is {result} </p>
          <div>
            <button className="button" onClick={this.onNumber}>
              {' '}
              Increment{' '}
            </button>
          </div>
          <p> Increase By Random Number Between 0 to 100 </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp 
