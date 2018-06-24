import React from 'react';

export const Home = () => {
  return (
    <div className="center-align" style={{ marginTop: '200px' }}>
      <h3>Welcome</h3>
      <p>Check out these awesome features using Server Side Rendering</p>
    </div>
  );
};

//export default Home
export default {
  component: Home
};
