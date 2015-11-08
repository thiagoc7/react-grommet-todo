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

  static propTypes = {
    todos: PropTypes.array.isRequired
  };

  render() {
    return (
        <Table>
          <tbody>
          {this.props.todos.map((todo) => this.renderTask(todo))}
          </tbody>
        </Table>
    )
  }

  renderTask(todo) {
    return (
        <tr key={todo.id}>
          <td width="10%"><Status value={todo.status} small={true} /></td>
          <td>{todo.item}</td>
          <td width="10%">
            <Button type="icon" onClick={() => alert('del')}>
              <CloseIcon />
            </Button>
          </td>
        </tr>
    )
  }
}