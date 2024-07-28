import { useState } from 'react';
import './ToggleSection.css';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

const ToggleSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="toggle-section">
      <div onClick={toggle} className="toggle-header">
        Why park a domain name in Parkname? 
        {isOpen ? <FaArrowUp className="arrow-icon" /> : <FaArrowDown className="arrow-icon" />}
      </div>
      {isOpen && (
        <div className="toggle-content">
          Parkname is the leading industry standard for domain name parking and monetization services. We offer a wide variety of services to help you achieve success.
        </div>
      )}
    </div>
  );
};

export default ToggleSection;
