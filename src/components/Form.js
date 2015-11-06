import React, { Component, PropTypes } from 'react';

import Layer from 'grommet/components/Layer';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import Footer from 'grommet/components/Footer';
import Menu from 'grommet/components/Menu';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';

export default class extends Component {

  static propTypes = {};

  render() {
    return (
        <Layer onClose={() => alert('close')} closer={true}>
          <Form onSubmit={() => alert('submit')}>

            <header><h1>Add Task</h1></header>
            <FormFields>
              <fieldset>

                <FormField label="Task" htmlFor="taskInput" help="what's to be done?">
                  <input
                      id="taskInput"
                      name="task"
                      type="text"
                      ref="taskInput"
                      onChange={this._onItemChange}
                  />
                </FormField>

                <FormField label="Status" htmlFor="statusInput">
                  <select
                      id="statusInput"
                      name="status"
                      onChange={this._onStatusChange}>

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
                      onClick={() => alert('ok')}
                      type="submit"
                  />
                </Box>
                <Box>
                  <Button label="Cancel" onClick={() => alert('cancel')} />
                </Box>
              </Menu>
            </Footer>

          </Form>
        </Layer>
    )
  }
}