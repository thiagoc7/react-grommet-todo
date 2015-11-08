import uuid from 'node-uuid';
import alt from './../Alt'

import TodoActions from './../actions/TodoActions'

class TodoStore {

  constructor() {
    this.bindActions(TodoActions)

    this.isAdding = false
    this.todos = [
      {
        id: uuid.v4(),
        status: 'ok',
        item: 'task 1'
      },
      {
        id: uuid.v4(),
        status: 'warning',
        item: 'task 2'
      },
      {
        id: uuid.v4(),
        status: 'error',
        item: 'task 3'
      }
    ]
  }

  toggleIsAdding() {
    this.setState({isAdding: !this.isAdding})
  }

  create(todo) {
    todo.id = uuid.v4()
    this.setState({
      todos: [todo, ...this.todos],
      isAdding: false
    })
  }

  update(todo) {

  }

  delete(todo) {

  }

}

export default alt.createStore(TodoStore, 'TodoStore');