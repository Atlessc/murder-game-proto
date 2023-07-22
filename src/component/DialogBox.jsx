// DialogBox.jsx
import React from 'react';
import useStore from './store';

const DialogBox = () => {
  const showDialog = useStore(state => state.showDialog);

  return (
    <>
      {showDialog && <div className="TextBox">Suspect Dialog</div>}
    </>
  );
};

export default DialogBox;
