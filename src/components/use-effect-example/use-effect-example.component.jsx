import React, { useState, useEffect } from 'react';

import Card from '../card/card.component';

const UseEffectExample = () => {
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('Bret');

  useEffect(() => {
    const fetchFunc = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?username=${searchQuery}`
      );
      const resJson = await response.json();
      setUser(resJson[0]);
    };

    fetchFunc();
  }, [searchQuery]);
  /** this parameter [searchquery] is to let  react know to only fire useEffect when searchQuery state changes else dont fire it.
   if this array is blank then the use effect is called on the first render after that it would never get called.
   If we dont pass any array then the useEffect will get called infinitely**/
  return (
    <Card>
      <input
        type='search'
        value={searchQuery}
        onChange={event => setSearchQuery(event.target.value)}
      />
      {user ? (
        <div>
          <h3>{user.name}</h3>
          <h3> {user.username} </h3>
          <h3> {user.email} </h3>
        </div>
      ) : (
        <p>No user found</p>
      )}
    </Card>
  );
};

export default UseEffectExample;
