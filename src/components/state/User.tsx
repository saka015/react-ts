import React, { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
    // option 1 : here we have to use optional chaining in variables
    // const [user, setUser] = useState<AuthUser | null>(null);
    
    // Option 2 : here we assure TS compiler that whatever comes will be of authuser type
    const [user, setUser] = useState<AuthUser >({} as AuthUser);

  const handleLogin = () => {
    setUser({
      name: "Kamal",
      email: "saka@gmail.com",
    });
  };

    // comenttted after using option2 : in usestate
//   const handleLogout = () => {
//     setUser(null);
//   };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleLogout}>Logout</button> */}
      {user ? (
        <div>
          <div>User name is {user?.name}</div>
          <div>User email is {user?.email}</div>
        </div>
      ) : (
        <h3>You are Logged Out.. <br/> Please login!</h3>
      )}
    </div>
  );
};

export default User;
