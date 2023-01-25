import {Component} from 'react'
import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="background_container">
        <div className="main_container">
          <h1 className="main_heading">FAQs</h1>
          <ul className="unList">
            {faqsList.map(eachItem => (
              <FaqItem key={eachItem.id} eachItem={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
