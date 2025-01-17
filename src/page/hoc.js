import React, { useEffect, useState } from "react";
import withLoading from "../component/loading";
import UserList from "./userList";

const UserListWithLoading = withLoading(UserList);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Giả lập gọi API
    setTimeout(() => {
      setUsers([
        { id: 1, name: "John Doe", email: "john@example.com" },
        { id: 2, name: "Jane Doe", email: "jane@example.com" },
      ]);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <UserListWithLoading isLoading={isLoading} users={users} />
    </div>
  );
}

export default App;
