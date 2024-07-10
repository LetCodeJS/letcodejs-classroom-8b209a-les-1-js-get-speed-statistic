[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=15396493&assignment_repo_type=AssignmentRepo)
# Get Speed Statistic

The first batch of robots is ready, now they need to be tested. Each robot has a unique movement speed. In this task, you need to find the minimum, maximum, and average speeds of the robots.

## Task

Write a function `getSpeedStatistic` that takes an array of robot speeds testResults and returns an array representing the statistics as follows:

* The first element should be the minimum speed.
* The second element should be the maximum speed.
* The third element should be the average speed, rounded down (use `Math.floor`).

Note: If the input array testResults is empty, return `[0, 0, 0]`.

### Example

```javascript
getSpeedStatistic([]); // [0, 0, 0]
getSpeedStatistic([10]); // [10, 10, 10]
getSpeedStatistic([8, 9, 3, 12]); // [3, 12, 8]
getSpeedStatistic([10, 10, 11, 9, 12, 8]); // [8, 12, 10]

