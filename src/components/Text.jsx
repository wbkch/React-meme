import Draggable from 'react-draggable';
import { useState } from 'react';

const Text = () => {
  const [editMode, setEditMode] = useState(false);
  const [val, setVal] = useState('Double Click to Edit');
  return (
    <div>
      <Draggable>
        {editMode ? (
          <input
            value={val}
            onChange={(e) => setVal(e.target.value)}
            onDoubleClick={(e) => setEditMode(false)}
          />
        ) : (
          <h1 onDoubleClick={(e) => setEditMode(true)}>{val}</h1>
        )} 
      </Draggable>
    </div>
  );
};

export default Text;
