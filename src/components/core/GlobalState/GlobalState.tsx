import React, { useState } from 'react';

import { GlobalContext } from './GlobalState.context';

export interface Props {
  children: React.ReactNode | React.ReactNodeArray | null;
}

export const GlobalState: React.FC<Props> = ( props ) => {
  const [ state, setState ] = useState<{} | null>( null );
  return (
    <GlobalContext.Provider value={ { state, setState } }>
      { props.children }
    </GlobalContext.Provider>
  );
};
