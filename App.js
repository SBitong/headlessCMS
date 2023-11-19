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

  return (
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
  );
}

const cardCss = {
  border: '2px solid #ddd',
  borderRadius: '8px',
  padding: '16px',
  margin: '16px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
};



export default App;
