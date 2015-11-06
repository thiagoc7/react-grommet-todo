import React, { Component } from 'react';

import 'grommet/grommet.min.css'

import App from 'grommet/components/App'
import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title'
import Footer from 'grommet/components/Footer'

import Dashboard from './components/Dashboard'

export default class extends Component {
  render() {
    return (
        <App centered={false}>

          <Header
              direction="row"
              justify="between"
              large={true}
              pad={{horizontal: 'medium'}}>

            <Title>Todo App</Title>

          </Header>

          <Dashboard />

          <Footer
              appCentered={true}
              direction="column"
              align="center"
              pad="small"
              colorIndex="grey-1">

            <p>Build your ideas with <a href="http://grommet.io" target="_blank">Grommet</a>!</p>

          </Footer>
        </App>
    );
  }
}