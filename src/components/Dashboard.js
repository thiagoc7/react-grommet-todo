import React, { Component, PropTypes } from 'react';

import Section from 'grommet/components/Section';
import Header from 'grommet/components/Header';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Button from 'grommet/components/Button';

import TodoChart from './Chart'
import TodosTable from './Table'
import TodoForm from './Form'

import TodoActions from './../actions/TodoActions'

export default class extends Component {

  static propTypes = {};

  render() {
    return (
        <Section primary={true}>
          <Tiles fill={true} flush={false}>
            <Tile align="center">

              <TodoChart todos={this.props.todos} />

            </Tile>
            <Tile align="start">
              <Header><h3>My Tasks:</h3></Header>

              <TodosTable todos={this.props.todos}/>

              <Button
                  label="Add Task"
                  primary={true}
                  strong={true}
                  onClick={() => TodoActions.toggleIsAdding()}
              />
            </Tile>
          </Tiles>

          <TodoForm isAdding={this.props.isAdding} />

        </Section>
    )
  }
}