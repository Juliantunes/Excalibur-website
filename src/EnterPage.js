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
      <div className="content">
        <button onClick={handleEnter} className="enter-button">ENTER</button>
      </div>
    </div>
  );
}

export default EnterPage;
