import React, { Component, PropTypes } from 'react';

import Meter from 'grommet/components/Meter'

export default class extends Component {

  static propTypes = {};

  render() {
    return (
        <Meter
            series={series}
            type="circle"
            units="Tasks"
        />
    )
  }
}

const tasksMap = {
  error: 1,
  ok: 2,
  warning: 3
};

const series = [
  getLabel('Past Due', tasksMap.error, 'error'),
  getLabel('Due Soon', tasksMap.warning, 'warning'),
  getLabel('Done', tasksMap.ok, 'ok')
]

function getLabel(label, count, colorIndex) {
  return {
    "label": label,
    "value": count,
    "colorIndex": colorIndex
  };
}