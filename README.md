# StopwatchApp
A demo React stopwatch app that accounts for laps and time tracking.

![lap reset](https://github.com/user-attachments/assets/a5f2158a-e772-4771-8cd6-53fe32735899)


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

 ![lap running](https://github.com/user-attachments/assets/fa69e6c3-b1ee-4dc5-b4fd-6633a1299906)



# To RUN

Clone the project.

1. The file **docs.md** - Shows a list of things that have been improved and things to improve on in the future. 
2. The **Prevstopwatch.tsx** - Contains all comments on the previous code. No changes were made to the code itself. There are keys included [ **NOTE: I is for issue, W is for why, and Todo is what to do differently**]
3. The **Stopwatch.tsx** - file contains the reworked code.
4. The **App.css** - contains the styling
5. The **Lap.tsx** - contains the lap details.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
