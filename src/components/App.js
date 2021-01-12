import React from 'react';
import ProfileUser from './profile/ProfileUser';
import user from '../sources/user.json';
import statistical from '../sources/statistical.json';
import transactions from '../sources/transactions.json'
import friends from '../sources/friends.json';
import Statistic from './statistic/Statistic';
import FriendList from './friends/FriendList';
import Transaction from './transaction/Transaction';



export default function App(){
  return (
    <>
      <ProfileUser user={user} />
      <Statistic statistical={statistical} />
      <FriendList friends={friends} />
      <Transaction transactions = {transactions} />
    </>
  );
};

