import React from 'react'
import { BrowserRouter,Route,Switch} from 'react-router-dom'
import ShowList from './Components/ShowList'
const App = () => {
  return (
    <div>
      <center>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <ShowList/>
            </Route>
          </Switch>
        </BrowserRouter>
        </center>
    </div>
  )
}

export default App
