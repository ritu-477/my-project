import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { id } = useParams(); 

  const userProfiles = {
    'Vimal-profile': {
      name: 'Anu',
      age: 26,
      bio: 'A coding enthusiast who loves solving problems.',
    },
    'Sonam-profile': {
      name: 'Seema',
      age: 26,
      bio: 'A creative designer who enjoys crafting unique visuals.',
    },
    'Komal-profile': {
      name: 'Deepika',
      age: 25,
      bio: 'A digital marketer passionate about connecting people through technology.',
    },
  };

  const user = userProfiles[id];

  return (
    <div className="pt-10 text-center">
      {user ? (
        <>
          <h1 className="text-3xl font-bold mb-4 text-center">User Profile</h1>
          <p className="text-lg text-center">
            <strong>Name:</strong> {user.name}
          </p>
          <p className="text-lg text-center">
            <strong>Age:</strong> {user.age}
          </p>
          <p className="text-lg text-center">
            <strong>Bio:</strong> {user.bio}
          </p>
        </>
      ) : (
        <p className="text-lg text-red-500 text-center">User not found!</p>
      )}
    </div>
  );
};

export default UserProfile;