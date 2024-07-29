import React from 'react';
import { User } from '../types';

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const { name, email, address } = user;
  
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>Address: {address.street}, {address.city}, {address.zipcode}</p>
    </div>
  );
};

export default UserCard;
