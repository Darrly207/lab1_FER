import { useEffect, useState } from "react";
import axios from "axios";

function MyComponent() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000");
        setData(response.data);
        console.log("Fetching data...");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      {data ? (
        <div>
          <div>
            <h1>List of Members</h1>
            <ul>
              {data.map((user) => (
                <li key={user.id}>
                  {user.name} - {user.email}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default MyComponent;
