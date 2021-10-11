import React, {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="left-nav-container">
              <h3>Left Navbar Menu</h3>
              <ul className="list-styles">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="content-container">
              <h3>Content</h3>
              <p>
                Lorem ipsum in this practice let's build a Layout Builder App by
                applying the concepts we have learned till now.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="right-nav-container">
              <h3>Right Navbar Menu</h3>
              <div>
                <div className="ad-container">
                  <p>Ad 1</p>
                </div>
                <div className="ad-container">
                  <p>Ad 2</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
