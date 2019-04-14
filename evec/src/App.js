import React, { Component } from 'react';
import Header from './components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'

import QrScanner from './components/QrScanner'
// import InfoCard from './components/InfoSummary'
import SimpleTable from './components/CompanyRep'
// import LinearBar from './components/LinearBar'
import ScanHome from './components/ScanHome'
import ScanDone from './components/DataEntry'

//import  from './components'

class App extends Component {
    render() {
        return (
          <div>
            <Header /> 
            <BrowserRouter>
              <Switch>                
                <Route exact path="/" component={SimpleTable} />
                <Route path="/input" component={ScanHome} />
                <Route path="/qrscan" component={QrScanner} />
                <Route path="/scan-done" component={ScanDone} />
                {/* <Route path="/companyview/:id" component={CompanyView} /> */}
                {/* <Route path="/editor" component={requireAuthentication(Editor)} /> */}
                <Route path="**" component={SimpleTable} />
                </Switch>              
            </BrowserRouter>
          </div>
        );
    }
}

export default App;