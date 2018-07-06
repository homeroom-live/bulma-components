import StyleSheet from '../models/StyleSheet'

export default (sheet: StyleSheet) => {
  const bulmaTemplate = (tags: BulmaTag[]) => {
    sheet.injectTags(tags)

    return tags
  }

  return bulmaTemplate
}
