import React, { Component, PropTypes } from 'react';

import Table from 'grommet/components/Table';
import Button from 'grommet/components/Button';
import Status from 'grommet/components/icons/Status';
import CloseIcon from 'grommet/components/icons/base/Close';

const tasks = [
  {
    status: 'ok',
    item: 'task 1'
  },
  {
    status: 'warning',
    item: 'task 2'
  },
  {
    status: 'error',
    item: 'task 3'
  }
]

export default class extends Component {

  static propTypes = {};

  render() {
    return (
        <Table>
          <tbody>
          {tasks.map((task, index) => this.renderTask(task, index))}
          </tbody>
        </Table>
    )
  }

  renderTask(task, index) {
    return (
        <tr key={index}>
          <td width="10%"><Status value={task.status} small={true} /></td>
          <td>{task.item}</td>
          <td width="10%">
            <Button type="icon" onClick={() => alert('del')}>
              <CloseIcon />
            </Button>
          </td>
        </tr>
    )
  }
}