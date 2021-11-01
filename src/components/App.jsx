import React from 'react';
import user from '../data/user';
import statistics from '../data/statistics';
import friends from '../data/friends';
import transactions from '../data/transactions';
import Profile from './profile/Profile'
import Statistics from './statistics/Statistics'
import Friends from './friends/Friends'
import Transactions from './transactions/Transactions'
const App = () => {
  return (
    <>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    
    <Statistics title="Upload stats" stats={statistics} />
    <Statistics stats={statistics} />

    <Friends friends={friends} />
    <Transactions items={transactions} />
    </>
    
  );
}

export default App;