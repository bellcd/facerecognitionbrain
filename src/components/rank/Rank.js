import React from 'react';

const Rank = ({
  name,
  entries
}) => {
  return (
    <div>
      <div className='white f3'>
        {`${name}, you have tried to detect faces in`} <span className='b'>{entries}</span> {`pictures!`}
      </div>
    </div>
  );
}

export default Rank;