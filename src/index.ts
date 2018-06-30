/* Import singletons */

import css from './constructors/css'
import StyleSheetManager from './models/StyleSheetManager'
import ServerStyleSheet from './models/ServerStyleSheet'

/* Import singleton constructors */

import _bulma from './constructors/bulma'
import _constructorWithOptions from './constructors/constructorWithOptions'
import _BulmaComponent from './models/BulmaComponent'

/* Instantiate singletons */

const constructorWithOptions = _constructorWithOptions(css)
const BulmaComponent = _BulmaComponent(constructorWithOptions)

const bulma = _bulma(BulmaComponent, constructorWithOptions)

/* Export everything */

export default bulma
export { ServerStyleSheet, StyleSheetManager }
