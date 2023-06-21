// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    isTimerRunning: false,
    timeElapsedInSeconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onUpdate = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onStart = () => {
    this.timeInterval = setInterval(this.onUpdate, 1000)
    this.setState({isTimerRunning: true})
  }

  onStop = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  onReset = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false, timeElapsedInSeconds: 0})
  }

  renderMinute = () => {
    const {timeElapsedInSeconds} = this.state
    const minute = Math.floor(timeElapsedInSeconds / 60)

    if (minute < 10) {
      return `0${minute}`
    }
    return minute
  }

  renderSecond = () => {
    const {timeElapsedInSeconds} = this.state
    const second = Math.floor(timeElapsedInSeconds % 60)

    if (second < 10) {
      return `0${second}`
    }
    return second
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.renderMinute()}:${this.renderSecond()}`
    return (
      <div className="app-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="watch-container">
          <div className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="watch-image"
            />
            <p className="para">Timer</p>
          </div>
          <h1 className="timer">{time}</h1>
          <div>
            <button
              type="button"
              className="start-button button"
              onClick={this.onStart}
              disabled={isTimerRunning}
            >
              Start
            </button>
            <button
              type="button"
              className="button stop-button"
              onClick={this.onStop}
            >
              Stop
            </button>
            <button
              type="button"
              className="button reset-button"
              onClick={this.onReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
