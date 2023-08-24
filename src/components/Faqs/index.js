import {Component} from 'react'
import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  state = {isPlus: false}

  plusIcon = id => {
    const {faqsList} = this.props
    const plusAnswer = faqsList.filter(each => each.id === id)
    console.log(plusAnswer)
    this.setState(prevState => ({
      isPlus: !prevState.isPlus,
    }))
  }

  render() {
    const {isPlus} = this.state
    const {faqsList} = this.props
    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="heading">FAQs</h1>
          <ul className="list-container">
            {faqsList.map(each => (
              <FaqItem
                faqsDetails={each}
                key={each.id}
                isPlus={isPlus}
                plusIcon={this.plusIcon}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
