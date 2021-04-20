/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

export default function useWindowSize(cb) {
  const [[windowWidth, windowHeight], setWindowSize] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const handleResize = () => {
      cb();
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return [windowWidth, windowHeight];
}


// import React, { useState, useEffect } from 'react'

// export default function WindowSize() {
//   const [[windowWidth, windowHeight], setWindowSize] = useState([window.innerWidth, window.innerHeight])
//   const [visible, setVisible] = useState(false)
//   useEffect(() => {
//     //closure for timeout
//     let timeoutId;
//     const handleResize = () => {
//       setWindowSize([window.innerWidth, window.innerHeight]);
//       setVisible(true);
//       clearTimeout(timeoutId);
//       timeoutId = setTimeout(() => setVisible(false), 500);
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);
//   return (
//     <div className={`window-size ${visible ? '' : 'hidden'}`}>
//       {windowWidth} x {windowHeight};
//     </div>
//   );
// };