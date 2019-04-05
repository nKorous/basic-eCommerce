import React, { FC } from 'react'
import * as styles from './styles'

//@material-ui
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import HomeIcon from '@material-ui/icons'

export interface Props {
  isLoggedIn?: boolean,
  loggedInAs?: string | null
  logOut(loggedIn: boolean): void
}

const AppBarComponent: FC<Props> = ({ isLoggedIn = false, loggedInAs = null, logOut }) => {

  return(
    <AppBar>
      <Toolbar>
        <span style={{ flex: '1 1'}}></span>
        {
          isLoggedIn && loggedInAs && (
            <>Welcome: {loggedInAs}!!</>

          )
        }
      </Toolbar>
    </AppBar>
  )
}

export default AppBarComponent

