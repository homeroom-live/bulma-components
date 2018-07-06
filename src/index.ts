/* Import singletons */

import StyleSheetManager, { BulmaContext } from './models/StyleSheetManager'
import ServerStyleSheet from './models/ServerStyleSheet'
import css from './constructors/css'

/* Import singleton constructors */

import _bulma from './constructors/bulma'
import _constructorWithOptions from './constructors/constructorWithOptions'
import _BulmaComponent from './models/BulmaComponent'
import StyleSheet from './models/StyleSheet'

/* Instantiate singletons */

const constructorWithOptions = _constructorWithOptions(css)
const BulmaComponent = _BulmaComponent(BulmaContext)

const bulma = _bulma(BulmaComponent, constructorWithOptions)

/* Export everything */

export default bulma
export { ServerStyleSheet, StyleSheetManager }
