// src/components/FetchData.js

import React, { useState, useEffect } from 'react';

const FetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFromOffset(0);
        setData(data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const fetchFromOffset = async (offset) => {
    try {
      const response = await fetch(`https://api.cricapi.com/v1/countries?apikey=2ba80acf-84db-4e18-a697-8efc19383f52&offset=${offset}`);
      const result = await response.json();
      if (result.status !== 'success') {
        throw new Error('Failed to fetch data');
      }
      const dataArray = result.data || [];
      if (offset >= result.info.totalRows) {
        return dataArray;
      }
      const nextData = await fetchFromOffset(offset + 25);
      return dataArray.concat(nextData);
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  return (
    <div>
      <h3>Fetched Data</h3>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && data.length > 0 && (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{JSON.stringify(item)}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchData;
