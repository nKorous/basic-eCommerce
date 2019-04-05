import React, { FC } from 'react'
import * as styles from './styles'

//@material-ui
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import TimeToLeaveTwoToneIcon from '@material-ui/icons/TimeToLeaveTwoTone'
import Button from '@material-ui/core/Button';
import AccountBoxIcon from '@material-ui/icons/AccountBox'

export interface Props {
  isLoggedIn: boolean,
  loggedInAs: string | null
  isAuth(loggedIn: boolean): void
}

const AppBarComponent: FC<Props> = ({ isLoggedIn, loggedInAs, isAuth }) => {

  return(
    <AppBar>
      <Toolbar>
        <span style={{ flex: '1 1'}}></span>
        {
          !isLoggedIn && (
            <>Not logged in!</>
          )
        }
        {
          isLoggedIn && loggedInAs && (
            <>Welcome: {loggedInAs}!!
            <Button onClick={() => isAuth(false)} ><TimeToLeaveTwoToneIcon nativeColor="white" /></Button>
            </>

          )
        }
      </Toolbar>
    </AppBar>
  )
}

export default AppBarComponent

