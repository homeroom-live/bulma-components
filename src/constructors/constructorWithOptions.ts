import { isValidElementType } from 'react-is'

interface ConstructorOptions {
  [key: string]: any
  attrs?: { [key: string]: any }
}

type TemplateLiteral = any

interface TemplateFunction {
  (): (...args: (string | TemplateLiteral)[]) => any
  attrs?: (...options: any[]) => TemplateFunction
}

export default css => {
  const constructWithOptions = (
    componentConstructor,
    tag,
    options: ConstructorOptions = {},
  ) => {
    if (!isValidElementType(tag)) {
      throw new Error(
        process.env.NODE_ENV !== 'production'
          ? `Cannot create styled-component for component: ${String(tag)}`
          : '',
      )
    }

    const templateFunction: TemplateFunction = (...args) =>
      componentConstructor(tag, options, css(...args))

    templateFunction.attrs = attrs =>
      constructWithOptions(componentConstructor, tag, {
        ...options,
        attrs: { ...(options.attrs || {}), ...attrs },
      })

    return templateFunction
  }

  return constructWithOptions
}
