import { useEffect, useState } from "react";
import axios from "axios";
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response.data);
    });

    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
}
export default MyComponent;
