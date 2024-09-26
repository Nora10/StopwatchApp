## Things that have been worked on and Things to Improve:

The code works but is outdated and inefficient in several areas. Moving to modern React with hooks, ensuring proper state management, and avoiding forced updates or state mutation will make it more robust.

1. Convert the class component to a functional component.
2. Use React hooks (useState, useEffect) instead of class state.
3. Remove the unnecessary use of ClassAttributes.
4. Replace any types with appropriate types (e.g., NodeJS.Timeout for the interval).
5. Include type return for formattedSeconds.
6. Rename formattedSeconds to formatTime.
7. Move laps into state.
8. Remove forceUpdate() and manage state properly.
9. Use useRef() for incrementer instead of state.
10. Remove unnecessary lastClearedIncrementer.
11. Clean up the interval with useEffect on component unmount.
12. Avoid splice to mutate the laps array; use array filtering instead.
13. Simplify button rendering logic.
14. Extract complex JSX rendering logic into small components.
15. Use ReactDOM.createRoot() in React 18+.
16. Add styles to the stylesheet
17. Use more descriptive naming 
18. Implement useCallback for performance optimization.
19. Refactor Lap into its own file for better modularity.
20. Improve the layout for responsiveness.
21. Add animation for start/stop transitions for better user experience.
22. Avoid using direct manipulation like this.laps = [].
23. Improve button UI/UX (disable buttons during certain states).
24. Handle edge cases where time runs too long or is negative.
25. Move constants (e.g., 1000) to configuration
26. Remove unused imports and variables.
27. Ensure better accessibility for the buttons.
28. Use map with a stable key instead of i+1.

## MORE TODOS IN THE FUTURE:

1. Add error handling for edge cases (negative time, very high values).
2. Ensure state updates are always done immutably.
3. Use context or Redux for state management if needed.
4. Add unit tests for all functionality (start, stop, reset, lap).
5. Convert arrow functions to methods if reusability is needed.
6. Separate logic from rendering (e.g., a hook for stopwatch logic).
7. Use semantic HTML for better accessibility.
8. Implement useMemo where applicable for preventing unnecessary calculations.
9. Make the component more testable with mocked time intervals.
10. Add PropTypes or TS types for additional safety.
11. Use a context-based approach for stopwatch logic if it's part of a larger app.
12. Prevent double-click bugs with debouncing the button clicks.
13. Implement ESLint and Prettier for consistent formatting.
14. Add better comments/documentation for maintainability.
15. Consider optimizing with a requestAnimationFrame instead of setInterval for timing.
