import React from 'react';
import { useEffect } from 'react';

const Component = () => {
  // mount => leere Abhängigkeiten
  // update => keine Abhängigkeiten oder ein gefülltes Array
  // unmount => rückgabewert von useEffect function
  useEffect(() => {
    // fetch data from server
    return () => {};
  }, []);

  return (
    <>
      <div>Hallo</div>
      <div>Welt</div>
    </>
  );
};

export default Component;
