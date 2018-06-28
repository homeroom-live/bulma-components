# bulma-components

[![CircleCI](https://circleci.com/gh/homeroom-live/bulma-components.svg?style=shield)](https://circleci.com/gh/homeroom-live/bulma-components)

React library for SSR Bulma components.

## Plan

### API

**1.**

```tsx
import bulma from 'bulma-components'

const Intro = bulma.div`
  heading is-background-primary

  color: white;
  font-size: 10px;
`
```

#### PROS

- Feels nice.
- Easy to adopt.

#### CONS

- Feels a bit off since we are mixing the two concepts together.
- It's also more difficult to maintain as we could outsource css generation to `styled-components` if users wanted additional customization.

---

**2.**

```tsx
import bulma from 'bulma-components'

const Intro = bulma.div`
  heading is-background-primary
``
  color: white;
  font-size: 10px;
`
```

#### PROS

- Separated CSS from Bulma.
- It's a lot simpler to implement - way fewer edge cases.
- Possibly better SSR performance.

#### CONS

- ~~We still have to maintain CSS generation on our own.~~ We could just depend on `styled-components` here and reference them internally.
- The API is just super weird. I have never seen anything like that before.
- I am not sure about the code highlight support for the CSS part.

---

**3.**

```tsx
import bulma from 'bulma-components'
import styled from 'styled-components'

const Intro = bulma.div`
  heading is-background-primary
`

const IntroWithMoreStyle = styled(Intro)`
  color: white;
  font-size: 10px;
`
```

#### PROS

- We only take care of Bulma implementation itself.
- No edge cases.
- Easy to maintain.

#### CONS

- We need to import two libraries.
- It feels like we are creating two components whereas we could only want to implement one.

### WIP

1.  Extract CSS from Bulma. (Q: Where to import Bulma from?)
1.  Extract `classNames`.
1.  Convert `classNames` to styles, if they are found in Bulma, otherwise forward them.

### Questions

- [ ] Should we implement SSR?
- [ ] How would custom SASS parameters be included?
- [ ] Inline vs External CSS? -> External because there's less repetition.

### Useful Links

- [StyledComponents source](https://github.com/styled-components/styled-components)
- [TachyonsComponents](https://github.com/jxnblk/tachyons-components)
- [CSS to Object](https://github.com/jxnblk/css-to-object)

---

## Future README

## Overview

## Fetures

## Examples

## API

## Recipes

## License

MIT @ Homeroom
