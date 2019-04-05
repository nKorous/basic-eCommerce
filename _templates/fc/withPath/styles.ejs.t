---
to: src/<%= h.changeCase.pathCase(h.changeCase.lowerCase(h.changeCase.paramCase(path))) %>/<%= h.changeCase.paramCase(name) %>/styles.ts
---
import { css } from 'emotion'

export const root = css`
  color: red
`


