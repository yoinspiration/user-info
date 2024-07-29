import React from 'react';
import UserList from './components/UserList';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>User Information List</h1>
      <UserList />
    </div>
  );
};

export default App;
