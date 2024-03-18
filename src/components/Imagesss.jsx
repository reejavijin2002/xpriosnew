import React, { useState, useEffect } from 'react';

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('transparent');
  const solidColorRef = React.createRef();
  const imageRef = React.createRef();

  const handleScroll = () => {
    const solidColorDiv = solidColorRef.current;
    const imageDiv = imageRef.current;

    if (solidColorDiv && imageDiv) {
      const solidColorRect = solidColorDiv.getBoundingClientRect();
      const imageRect = imageDiv.getBoundingClientRect();

      if (
        imageRect.top >= solidColorRect.top &&
        imageRect.bottom <= solidColorRect.bottom
      ) {
        const visiblePercentage =
          ((imageRect.bottom - solidColorRect.top) /
            (solidColorRect.bottom - solidColorRect.top)) *
          100;
        const opacity = visiblePercentage / 100;
        setBackgroundColor(`rgba(255, 0, 0, ${opacity})`);
      } else {
        setBackgroundColor('transparent');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div
        ref={solidColorRef}
        style={{
          flex: 1,
          height: '100vh',
          backgroundColor: backgroundColor,
        }}
      >
  
      </div>
      <div ref={imageRef} style={{ flex: 1 }}>
  
        <img
          src="your-image-url.jpg"
          alt="Your Image"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </div>
  );
};

export default App;
