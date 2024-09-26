# StopwatchApp
A demo React stopwatch app that accounts for laps and time tracking.

A bare bones stopwatch application built with React, allowing users to start, stop, reset, and record lap times. It uses modern React features like hooks (useState - to track state, useEffect - for managing side effects, useCallback- to memoize and reduce re-renders) for more reliable state management and rendering. 

**NOTE**: This demo is built with the assumption that it would be used as part of a larger system. If it is to be used on a smaller application, then the use of useCallback hook should be limited, as it is a costly calculation. 

**Key components include**:

1. Lap feature: Helps users to capture lap times and view them in an ordered list.
2. Start and Stop feature: This tracks current time with a start and stop button.
3. Reset feature: Wipes and reset the timers and clear laps.
4. Delete feature: Wipes and remove single laps based on their indexes from the list.

**Probable Use Case**: 
1. Time tracking
2. Could be used like a pomodoro app for productivity improvement

**Other things to note**:
There would be comments in the code to show best practices. 
