"use strict";

/**
 * @param {number[]} testResults
 *
 * @returns {number[]}
 */
function getSpeedStatistic(testResults) {
  if (testResults.length === 0) {
      return [0, 0, 0];
  }

  // Calculate minimum speed
  let minSpeed = Math.min(...testResults);

  // Calculate maximum speed
  let maxSpeed = Math.max(...testResults);

  // Calculate average speed (rounded down)
  let sum = testResults.reduce((acc, curr) => acc + curr, 0);
  let avgSpeed = Math.floor(sum / testResults.length);

  // return [minSpeed, maxSpeed, avgSpeed];
  return [];
}

module.exports = { getSpeedStatistic };
