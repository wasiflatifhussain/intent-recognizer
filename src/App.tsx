// this is a quick app ui to test the functions
// there are 6 example inquiries to allow for quick inquiry checking
// the users should be able to enter new enquiries on the interface and use it to get a follow-up on the inquiry

import React, { useState } from 'react';
import { followUpOrder } from './utils/followUpOrder';
import './App.css';

const App: React.FC = () => {
  const [inquiries, setInquiries] = useState<string[]>([]);
  const [results, setResults] = useState<{ inquiry: string, followUp: string }[]>([]);
  const [input, setInput] = useState<string>('');

  const exampleInquiries = [
    "I want to place a new order.",
    "Can you tell me the status of my order?",
    "I need to change the shipping address for my order.",
    "Please cancel my order.",
    "How can I update my payment method for an order?",
    "Can you tell me more about the freshness of your products?"
  ];

  // this function is used to add new inquiries to the inquiry state object to use for fetching follow-ups when the button is clicked
  const handleAddInquiry = () => {
    if (input.trim() !== "") {
      setInquiries([...inquiries, input]);
      setInput('');
    }
  };

  // this function takes each inquiry and passes into the followUpOrder function and receives the followup, to add it to results
  const handleProcessInquiries = () => {
    const newResults = followUpOrder(inquiries);
    setResults(newResults);
  };

  // this function mainly uses the exampleInquiry object to set the inquiries in the inquiry object to allow for quick testing
  const handleUseExampleInquiries = () => {
    setInquiries(exampleInquiries);
  };

  // this function clears out past inquiries and resets the state variables
  const handleClearInquiries = () => {
    setInquiries([]);
    setResults([]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Order Inquiry Intent Identification</h1>
        <div className="input-container">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)} 
            placeholder="Enter customer inquiry"
            className="input"
          />
          <button onClick={handleAddInquiry} className="button">Add Inquiry</button>
          <button onClick={handleUseExampleInquiries} className="button">Use Example Inquiries</button>
          <button onClick={handleClearInquiries} className="button clear-button">Clear Past Inquiries</button>
        </div>
        <div className="button-container">
          <button onClick={handleProcessInquiries} className="button process-button">Process Inquiries</button>
        </div>
        <div className="list-container">
          <h2>Inquiries</h2>
          <ul className="list">
            {inquiries.map((inquiry, index) => (  // iterate through all enquiries and list them out
              <li key={index} className="list-item">{inquiry}</li>
            ))}
          </ul>
        </div>
        <div className="list-container">
          <h2>Results</h2>
          <ul className="list">
            {results.map((result, index) => (  // iterate through results and output the results (intent and follow-ups)
              <li key={index} className="list-item">
                <strong>Inquiry:</strong> {result.inquiry}<br />
                <strong>Follow-up:</strong> {result.followUp}
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
