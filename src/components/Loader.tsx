import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <span className="loader-text">LawBot is thinking...</span>
    </div>
  );
};

export default Loader;