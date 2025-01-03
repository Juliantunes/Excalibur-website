import React from 'react';
import './EnterPage.css';
import { useNavigate } from 'react-router-dom';

function EnterPage() {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate('/home');
  };

  return (
    <div className="enter-page">
      {/* Reference image in public folder */}
      <img 
        src="/header.png" 
        alt="Centered Graphic" 
        className="enter-image" 
      />
      <div className="content">
        <button onClick={handleEnter} className="enter-button">ENTER</button>
      </div>
    </div>
  );
}

export default EnterPage;
