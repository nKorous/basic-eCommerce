---
to: src/<%= h.changeCase.pathCase(h.changeCase.lowerCase(h.changeCase.paramCase(path))) %>/<%= h.changeCase.paramCase(name) %>/index.tsx
---
import React, { FC } from 'react'
import * as styles from './styles'

export interface Props {}

const <%= h.changeCase.pascalCase(name) %>Component: FC<Props> = props => {

  return(
    <>
      <h1>This is <%= h.changeCase.pascalCase(name) %>Component</h1>

    </>
  )
}

export default <%= h.changeCase.pascalCase(name) %>Component

