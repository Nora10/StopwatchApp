import React, { ReactNode } from "react";

interface LapProps {
    index: number 
    lap: number
    onDelete: () => void
    formatTime: (x: number) => ReactNode
}

export const Lap: React.FC<LapProps> = ({ index, lap, onDelete, formatTime }) => (
    <div className="stopwatch-lap">
    <strong>{index}</strong> / {formatTime(lap)}
    <button className="button delete-lap" onClick={onDelete} aria-label={`Lap ${index} time ${lap} seconds`}>X</button>
  </div>
  );
  