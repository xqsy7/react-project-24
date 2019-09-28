import React, { PureComponent,Fragment } from 'react'
import renderRoutes from "@utils/renderRoutes";
import {baseConfigRoutes} from "@router";
import {Switch} from "react-router-dom";
class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  render() {
    return (
      <Fragment>
        <Switch>
        {renderRoutes(baseConfigRoutes)}
        </Switch>
      </Fragment>
    )
  }
}

export default App
