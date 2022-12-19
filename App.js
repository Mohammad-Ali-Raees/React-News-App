import React, { Component } from 'react'
import Navbar from "./Partials/Navbar";
import { Route, Switch } from "react-router-dom";
import News from "./ClassBasedComponents/News";
import LoadingBar from 'react-top-loading-bar'
import Slects from './ClassBasedComponents/Slects';


export default class App extends Component {

  constructor() {
    super();

    this.state = {
      progress: 0
    }
  }



  render() {
    let My_Progress = (progress) => {
      this.setState({ progress: progress })
    }
    return (
      <>
        <LoadingBar
          color='#f11946'
          progress={this.state.progress}
          height={3}

        />
        <Navbar />
        <Switch>
          <Route exact path="/select">
            <Slects />
          </Route>
          <Route exact path="/">
            <News My_Progress={My_Progress} key="general"  category="general" />
          </Route>

          <Route exact path="/entertainment">
            <News My_Progress={My_Progress} key="entertainment"  category="entertainment" />
          </Route>
          <Route exact path="/science">
            <News My_Progress={My_Progress} key="science"  category="science" />
          </Route>
          <Route exact path="/sports">
            <News My_Progress={My_Progress} key="sports"  category="sports" />
          </Route>
          <Route exact path="/technology">
            <News My_Progress={My_Progress} key="technology"  category="technology" />
          </Route>
          <Route exact path="/business">
            <News My_Progress={My_Progress} key="business"  category="business" />
          </Route>
          <Route exact path="/health">
            <News My_Progress={My_Progress} key="health"  category="health" />
          </Route>

        </Switch>
      </>

    )
  }
}
