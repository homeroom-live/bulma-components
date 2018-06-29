import domElements from '../utils/domElements'

export default (bulmaComponent, constructorWithOptions) => {
  const bulma = tag => constructorWithOptions(bulmaComponent, tag)

  domElements.forEach(domElement => {
    bulma[domElement] = bulma(domElement)
  })

  return bulma
}
