import React, { Component, PropTypes } from 'react';

import Layer from 'grommet/components/Layer';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import Footer from 'grommet/components/Footer';
import Menu from 'grommet/components/Menu';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';

import TodoActions from './../actions/TodoActions'

export default class extends Component {

  static propTypes = {
    isAdding: PropTypes.bool.isRequired
  };

  onSubmit(e) {
    e.preventDefault()
    const newTodo = {
      status: this.refs.statusInput.value,
      item: this.refs.taskInput.value
    }

    TodoActions.create(newTodo)
  }

  render() {
    if(!this.props.isAdding) { return null; }

    return (
        <Layer onClose={() => TodoActions.toggleIsAdding()} closer={true}>
          <Form onSubmit={this.onSubmit.bind(this)}>

            <header><h1>Add Task</h1></header>
            <FormFields>
              <fieldset>

                <FormField label="Task" htmlFor="taskInput" help="what's to be done?">
                  <input
                      id="taskInput"
                      name="task"
                      type="text"
                      ref="taskInput"
                  />
                </FormField>

                <FormField label="Status" htmlFor="statusInput">
                  <select id="statusInput" name="status" ref="statusInput">
                    <option value="ok">Done</option>
                    <option value="warning">Due Soon</option>
                    <option value="error">Past Due</option>
                  </select>
                </FormField>

              </fieldset>
            </FormFields>

            <Footer pad={{vertical: 'medium'}}>

              <Menu direction="row" responsive={false}>
                <Box>
                  <Button
                      label="OK"
                      primary={true}
                      onClick={this.onSubmit.bind(this)}
                      type="submit"
                  />
                </Box>
                <Box>
                  <Button label="Cancel" onClick={() => TodoActions.toggleIsAdding()} />
                </Box>
              </Menu>
            </Footer>

          </Form>
        </Layer>
    )
  }
}