import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {iconIsClicked: false}

  onPlus = () => {
    this.setState(prevState => ({iconIsClicked: !prevState.iconIsClicked}))
  }

  render() {
    const {iconIsClicked} = this.state
    const {faqsDetails} = this.props
    const {questionText, answerText} = faqsDetails

    const plusOrMinus = iconIsClicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const plusOrMinusName = iconIsClicked ? 'minus' : 'plus'

    return (
      <li className="list-item">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          <button type="button" onClick={this.onPlus} className="button">
            <img src={plusOrMinus} alt={plusOrMinusName} />
          </button>
        </div>
        {iconIsClicked === true && (
          <div className="answer-container">
            <hr className="horizontal-line" />
            <p>{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}
export default FaqItem
