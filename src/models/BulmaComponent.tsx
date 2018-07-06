import React, { Component, Context } from 'react'

interface Props<context> {
  sheet: context & { injectTags: (tags: string[]) => void }
  [key: string]: any
}

export default function<context>(BulmaContext: Context<context>) {
  const withBulma = ComposedComponent => props => (
    <BulmaContext.Consumer>
      {sheet => <ComposedComponent sheet={sheet} {...props} />}
    </BulmaContext.Consumer>
  )

  const createBulmaComponent = (
    ComposedComponent: typeof Component,
    options: object,
    tags: BulmaTag[],
  ) => {
    class StyledComponent extends Component<Props<context>, any, any> {
      componentWillMount() {
        const { sheet } = this.props

        sheet.injectTags(tags)
      }

      render() {
        return <ComposedComponent classNames={tags} {...options} />
      }
    }

    return withBulma(StyledComponent)
  }

  return createBulmaComponent
}
