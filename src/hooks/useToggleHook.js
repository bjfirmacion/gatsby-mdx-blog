import React from 'react';

function useToggleHook(initialVal = false) {
  const [state, setState] = React.useState(initialVal);
  function toggleState() {
    setState(!state);
  }

  return [state, toggleState];
}

export default useToggleHook;