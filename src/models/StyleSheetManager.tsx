import React, { Component, createContext } from 'react'
import StyleSheet from './StyleSheet'

export const BulmaContext = createContext<StyleSheet>(null)

const targetPropErr =
  process.env.NODE_ENV !== 'production'
    ? `
The StyleSheetManager expects a valid target or sheet prop!
- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?
`.trim()
    : ''

interface Props {
  sheet?: StyleSheet
  target?: HTMLElement
}

export default class StyleSheetManager extends Component<Props, any> {
  sheetInstance: StyleSheet

  componentWillMount() {
    if (this.props.sheet) {
      this.sheetInstance = this.props.sheet
    } else if (this.props.target) {
      this.sheetInstance = new StyleSheet(this.props.target)
    } else {
      throw new Error(targetPropErr)
    }
  }

  render() {
    return (
      <BulmaContext.Provider value={this.sheetInstance}>
        {React.Children.only(this.props.children)}
      </BulmaContext.Provider>
    )
  }
}
