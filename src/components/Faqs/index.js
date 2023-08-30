import FaqItem from '../FaqItem'

import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="main-container">
      <div className="card-container">
        <h1 className="heading">FAQs</h1>
        <ul className="list-container">
          {faqsList.map(each => (
            <FaqItem faqsDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Faqs
