'use strict';

module.exports = {
  getExecutionTimeInMs(diffTime) {
    const NS_PER_SEC = 1e9;
    const MS_PER_NS = 1e-6;

    return (diffTime[0] * NS_PER_SEC + diffTime[1]) * MS_PER_NS;
  },
};
