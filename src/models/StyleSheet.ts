let master

export default class StyleSheet {
  id: number
  sealed: boolean
  target?: HTMLElement
  clones: StyleSheet[]

  constructor(target?: HTMLElement) {
    return this
  }

  static get master(): StyleSheet {
    return master || (master = new StyleSheet())
  }

  injectTags(tags: string) {
    return
  }

  clone(): StyleSheet {
    return
  }

  toReactElements() {
    return ''
  }
}
