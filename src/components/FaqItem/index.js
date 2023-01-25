import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {
    clicked: false,
  }

  showText = () => {
    this.setState(prevState => ({clicked: !prevState.clicked}))
  }

  render() {
    const {eachItem} = this.props
    const {questionText, answerText} = eachItem
    const {clicked} = this.state
    const urlImage = clicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altName = clicked ? 'minus' : 'plus'
    const displayTextNow = clicked ? (
      <div className="list_container_hide_container">
        <hr className="list_container_hide_container_line" />
        <p className="list_container_hide_container_para">{answerText}</p>
      </div>
    ) : (
      ''
    )

    return (
      <li className="list_container">
        <div className="list_container_show_container">
          <h1 className="list_container_heading">{questionText}</h1>
          <button type="button" className="noUseButton" onClick={this.showText}>
            <img
              className="list_container_show_container_image"
              alt={altName}
              src={urlImage}
            />
          </button>
        </div>
        {displayTextNow}
      </li>
    )
  }
}

export default FaqItem
