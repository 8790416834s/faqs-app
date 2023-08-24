import './index.css'

const FaqItem = props => {
  const {faqsDetails, plusIcon, isPlus} = props
  const {id, questionText, answerText} = faqsDetails

  const plusOrMinus = isPlus
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

  const plusOrMinusName = isPlus ? 'plus' : 'minus'

  const onPlus = () => {
    plusIcon(id)
  }

  return (
    <li className="list-item">
      <div className="question-container">
        <h1 className="question">{questionText}</h1>
        <button type="button" onClick={onPlus} className="button">
          <img src={plusOrMinus} alt={plusOrMinusName} />
        </button>
      </div>
      {isPlus && (
        <div className="answer-container">
          <hr className="horizontal-line" />
          <p>{answerText}</p>
        </div>
      )}
    </li>
  )
}
export default FaqItem
