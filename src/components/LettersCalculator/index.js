// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {inputPhrase: ''}

  onChangeCalculate = event => {
    this.setState({inputPhrase: event.target.value})
  }

  render() {
    const {inputPhrase} = this.state

    return (
      <div className="app-container">
        <div className="calculate-container">
          <div className="input-phrase-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="label-container">
              <label htmlFor="phraseText" className="label">
                Enter the phrase
              </label>
              <input
                type="text"
                placeholder="Enter the phrase"
                className="letters-input"
                id="phraseText"
                onChange={this.onChangeCalculate}
              />
              <p className="letters-count">
                No.of letters: {inputPhrase.length}
              </p>
            </div>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="calculate-img"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
