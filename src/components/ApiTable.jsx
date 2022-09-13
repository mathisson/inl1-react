import React, { useState, useEffect } from "react";

const ApiTable = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((apiData) => {
        setData(apiData);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
        <h2>Table from Api</h2>
      <table>
        <thead>
          <tr>
            <th>ID:</th>
            <th>Name:</th>
            <th>Username:</th>
          </tr>
        </thead>
        {loading ? (
          <div>Loading data</div>
        ) : (
          data.map((item) => {
            return (
              <tbody key={item.id}>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                </tr>
              </tbody>
            );
          })
        )}
      </table>
    </div>
  );
};

export default ApiTable;
