import { useState } from 'react';
import { FaArrowDown, FaArrowRight, FaArrowUp, FaUserCircle } from 'react-icons/fa';
import './NestedToggle.css';

const NestedToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const questions = [
    'How does Parkname separate itself from other domain name parking companies?',
    'Is Parkname Parking actually free?',
    'What do you do?',
    'When was Parkname first founded?'
  ];

  const answers = [
    'Your domains are a valuable online property. As in any investment, you want the most efficient, easy way to make sure your property is going to be profitable. Do you own more than 1,000 domains? As a professional domainer, you will find everything you need through Parkname to generate maximum profits from your domain portfolio.',
    'Yes, Parkname Parking is actually free.',
    'We provide a range of services to help you manage and monetize your domain names.',
    'Parkname was first founded in 2005.'
  ];

  return (
    <div className="nested-toggle-section">
      <div onClick={toggle} className="nested-toggle-header">
        <FaUserCircle  className="user" size={40} /> <h3>About Us</h3>
        {isOpen ? <FaArrowUp className="arrow-icon" /> : <FaArrowDown className="arrow-icon" />}
      </div>
      {isOpen && (
        <div className="nested-toggle-content">
          {questions.map((question, index) => (
            <div key={index}>
              <div onClick={() => toggleQuestion(index)} className="question-header">
                {question}
                {activeQuestion === index ? <FaArrowUp className="arrow-icon" /> : <FaArrowRight className="arrow-icon" />}
              </div>
              {activeQuestion === index && (
                <div className="answer-content">
                  {answers[index]}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NestedToggle;
