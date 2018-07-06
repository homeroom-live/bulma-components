import { Component } from 'react'
import { isValidElementType } from 'react-is'

interface ConstructorOptions {
  [key: string]: any
  attrs?: { [key: string]: any }
}

type ComponentConstructor = (
  component: typeof Component,
  options: ConstructorOptions,
  tags: string[],
) => Component

interface TemplateFunction {
  (style: Style, ...tags: TemplateTag[]): Component<any, any, any>
  attrs?: (...attrs: any[]) => TemplateFunction
}

type CssConstructor = (style: Style, ...tags: TemplateTag[]) => BulmaTag[]

export default (css: CssConstructor) => {
  const constructWithOptions = (
    componentConstructor: ComponentConstructor,
    composedComponent: typeof Component,
    options: ConstructorOptions = {},
  ): TemplateFunction => {
    if (!isValidElementType(composedComponent)) {
      throw new Error(
        process.env.NODE_ENV !== 'production'
          ? `Cannot create bulma-component for component: ${String(
              composedComponent,
            )}`
          : '',
      )
    }

    const templateFunction: TemplateFunction = (
      style: Style,
      ...tags: TemplateTag[]
    ) =>
      // Here should go the derived tags from b``
      componentConstructor(composedComponent, options, css(style, ...tags))

    templateFunction.attrs = attrs =>
      constructWithOptions(componentConstructor, composedComponent, {
        ...options,
        attrs: { ...(options.attrs || {}), ...attrs },
      })

    return templateFunction
  }

  return constructWithOptions
}
