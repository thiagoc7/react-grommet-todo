import React, { Component, PropTypes } from 'react';

import Meter from 'grommet/components/Meter'

export default class extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired
  };

  render() {
    let tasksMap = {
      error: 0,
      ok: 0,
      warning: 0
    };

    this.props.todos.map(task => {
      tasksMap[task.status] += 1;
    })

    const series = [
      getLabel('Past Due', tasksMap.error, 'error'),
      getLabel('Due Soon', tasksMap.warning, 'warning'),
      getLabel('Done', tasksMap.ok, 'ok')
    ]

    return (
        <Meter
            series={series}
            type="circle"
            units="Tasks"
        />
    )
  }
}

function getLabel(label, count, colorIndex) {
  return {
    "label": label,
    "value": count,
    "colorIndex": colorIndex
  };
}