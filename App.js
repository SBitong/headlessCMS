import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch('https://www.addu.edu.ph/wp-json/wp/v2/posts')
      .then(response => response.json())
      .then(data => setRecords(data))
      .catch(err => console.log("Error: " + err));
  }, []);

  const appContainerCss = {
    marginLeft: '300px',
    marginRight: '300px',
  };

  const headerCss = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#071B70',  
    color: '#fff',              
    padding: '10px',
    fontSize: '20px',
    fontWeight: 'bold',
  };

  const footerCss = {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
  };
  
  const buttonCss = {
    backgroundColor: '#071B70',  
    color: '#fff',               
    padding: '8px 16px',
    //borderRadius: '4px',
    marginLeft: '10px',
    cursor: 'pointer',
    boxShadow: 'none',
    border: 'none',
  };

  const cardCss = {
    border: '2px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  };
  
  return (
    <div>
      <div style={headerCss}>
          <div>
            <a href="https://www.addu.edu.ph/" style={{ color: '#fff', textDecoration: 'none' }}>
              Ateneo de Davao University
            </a>
          </div>
          <div>
            <button style={buttonCss}>Home</button>
            <button style={buttonCss}>About</button>
            <button style={buttonCss}>Contacts</button>
            <button style={buttonCss}>News</button>
          </div>
        </div>
      <div className="App" style={appContainerCss}>
        
        <h1>NEWS HEADLINE</h1>
        {records.map((post, index) => (
          <div key={index} style={cardCss}>
            <h4>{post.title.rendered}</h4>
            {/* <p>ID: {post.id}</p> */}
            <p dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </div>
        ))}
      </div>
      <div style={footerCss}>
        <p>&copy; 2023 Alfonso-Bitong Duo. All rights reserved.</p>
      </div>
    </div>
  );  
}





export default App;
