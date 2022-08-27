import { useSearchParams } from 'react-router-dom';

import { useState,createRef } from 'react';
import Text from '../components/Text';
import { exportComponentAsJPEG } from 'react-component-export-image';

const Edit = () => {
  const  memeref= createRef()
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);
  const addText = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div ref={memeref}
      style={{width:'700px', border:"1px solid", borderRadius:'20px', padding:'10px'}}
      >
        <img src={params.get('url')} width="400px" alt="" />
        {Array(count)
          .fill(0)
          .map((e) => (
            <Text />
          ))}
      </div>
      <button onClick={addText}>Add Text</button>
      <button  onClick={e=>exportComponentAsJPEG(memeref)}>Save</button>
    </div>
  );
};

export default Edit;
