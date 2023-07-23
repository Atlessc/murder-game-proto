import React, { useState, useEffect } from 'react';
import useStore from './store';

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(10 * 60);
  const gameStatus = useStore(state => state.gameStatus);

  useEffect(() => {
    if (gameStatus === 'Active') {
      console.log('timer started');
      const intervalId = setInterval(() => {
        setTimeLeft(timeLeft => {
          if (timeLeft === 1) {
            clearInterval(intervalId);
          }
          return timeLeft - 1;
        });
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [gameStatus]);

  return (
    <div>
      Time left: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}
    </div>
  );
};

export default Timer;
