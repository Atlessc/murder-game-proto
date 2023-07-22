// DevConsole.jsx
import React, { useState } from 'react';

const DevConsole = ({ actions }) => {
  const [password, setPassword] = useState('');
  const [showConsole, setShowConsole] = useState(false);

  const handlePasswordChange = event => {
    setPassword(event.target.value);
    if (event.target.value === 'DevCo.Console') {
      setShowConsole(true);
    }
  };

  const handleClose = () => {
    setShowConsole(false);
    setPassword('');
  };

  return (
    <>
      {!showConsole && (
        <input type="password" value={password} onChange={handlePasswordChange} />
      )}
      {showConsole && (
        <div>
          <button onClick={handleClose}>X</button>
          <ul>
            {actions.map((action, index) => (
              <li key={index}>{action}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default DevConsole;
