import React from 'react'
import StyleSheetManager from './StyleSheetManager'
import StyleSheet from './StyleSheet'

const sheetClosedError = ''

export default class ServerStyleSheet {
  instance: StyleSheet
  masterSheet: StyleSheet
  closed: boolean

  constructor() {
    this.masterSheet = StyleSheet.master
    this.instance = this.masterSheet.clone()
    this.closed = false
  }

  complete() {
    if (!this.closed) {
      const index = this.masterSheet.clones.indexOf(this.instance)
      this.masterSheet.clones.splice(index, 1)
      this.closed = true
    }
  }

  collectStyles(children: JSX.Element) {
    if (this.closed) {
      throw new Error(sheetClosedError)
    }

    return (
      <StyleSheetManager sheet={this.instance}>{children}</StyleSheetManager>
    )
  }

  getStyleElement(): string {
    this.complete()
    return this.instance.toReactElements()
  }
}
