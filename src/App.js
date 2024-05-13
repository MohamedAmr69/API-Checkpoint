import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserList from "./UsersList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="primary-heading">User List</h1>
      </header>
      <UserList />
    </div>
  );
}

export default App;
