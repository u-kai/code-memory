import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    // Fetch data from tauri backend
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/data');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Hello, Tauri!</h1>
      {data ? <p>Data from backend: {data}</p> : <p>Loading...</p>}
    </div>
  );
};

export default App;
