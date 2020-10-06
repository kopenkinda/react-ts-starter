import React, { useState } from 'react';
import { Button } from '../core/Button';

export const Counter = () => {
  const [ count, setCount ] = useState( 0 );
  return (
    <div>
      <p>Count is { count }</p>
      <Button onClick={ () => setCount( count - 1 ) }>
        Decrement
      </Button>
      <Button onClick={ () => setCount( count + 1 ) }>
        Increment
      </Button>
    </div >
  );
};
