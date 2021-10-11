import React, {Component} from 'react'
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChnageShowContextStatus = () => {
        onToggleShowContent(showContent)
      }

      const onChnageShowLeftNavbarStatus = () => {
        onToggleShowLeftNavbar(showLeftNavbar)
      }

      const onChnageShowRightNavbarStatus = () => {
        onToggleShowRightNavbar(showRightNavbar)
      }
      return (
        <div className="control-container">
          <h1 className="heading-layout">Layout</h1>
          <div className="input-container">
            <input
              id="content"
              type="checkbox"
              defaultChecked={showContent}
              onClick={onChnageShowContextStatus}
            />
            <label htmlFor="content" className="text">
              Content
            </label>
          </div>
          <div className="input-container">
            <input
              id="leftNav"
              type="checkbox"
              defaultChecked={showContent}
              onClick={onChnageShowLeftNavbarStatus}
            />
            <label htmlFor="leftNav" className="text">
              Left Navbar
            </label>
          </div>
          <div className="input-container">
            <input
              id="rightNav"
              type="checkbox"
              defaultChecked={showContent}
              onClick={onChnageShowRightNavbarStatus}
            />
            <label htmlFor="rightNav" className="text">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
