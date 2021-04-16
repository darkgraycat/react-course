import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { AboutPage } from './pages/AboutPage'
import { AnotherPage } from './pages/AnotherPage'
import { TodosPage } from './pages/TodosPage'


export const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route component={TodosPage} path="/" exact />
          <Route component={AboutPage} path="/about" />
          <Route component={AnotherPage} path="/another" />
        </Switch>
      </div>
    </BrowserRouter>
  )
}