import interleave from '../utils/interleave'

export default <bulmaTemplate, props>(
  bulmaTemplate: bulmaTemplate,
  props: props,
) => {
  const templateEvaluation = (
    style: Style,
    ...tags: TemplateTag[]
  ): BulmaTag[] => {
    const reducedTags = tags.map(tag => {
      if (typeof tag === 'function') {
        return tag(bulmaTemplate, props)
      } else {
        return tag
      }
    })

    return interleave(style, reducedTags)
  }

  return templateEvaluation
}
