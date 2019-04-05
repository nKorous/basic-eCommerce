import React, { FC, useState } from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import * as styles from './styles'
import AppBarComponent from './app-bar';

export interface Props {}

const MainComponent: FC<Props> = props => {
  const [loginStatus, setLoginStatus] = useState<boolean>(false)
  const [loginName, setLoginName] = useState<string>('Guest')


  const loggedInStatus = (loggedIn: boolean) => setLoginStatus(loggedIn)

  return(
    <Router>
      <AppBarComponent isLoggedIn={loginStatus} loggedInAs={loginName} logOut={loggedInStatus}/>


      <Switch>

      </Switch>
    </Router>
  )
}

export default MainComponent

