import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useAuth, useQGql } from '@quorini/qui-react';
import { query, mutate, signup } from '@quorini/qui-core'
import { AdminFilterInput, listAdmins, listAdminsResponse, listAdminsVars } from './graphql/quorini-queries';
import { createAdmin, createAdminResponse, createAdminVars, createCustomerInput } from './graphql/quorini-mutations';

function App() {
  const { user, logout } = useAuth();
  // const { query, mutate } = useQGql();

  console.log("user", user)

  // useEffect(() => {
  //   // console.log("createCustomerInput", createCustomerInput)
  // }, [])


  const fetchAdmins = async () => {
    try {
      const response: listAdminsResponse = await query(listAdmins);
      console.log('Fetched Admins:', response);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const fetchErnstAdmin = async () => {
    try {
      const filter = {
        fullName: { eq: "ernst" }
      } as AdminFilterInput;

      const response: listAdminsResponse = await query(listAdmins, { filter });
      console.log('Fetched Ernst Admin:', response);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const createNewAdmin = async () => {
    try {
      const input = {
        fullName: "test sdk mutation12",
        email: "sdk@test12"
      }
      const response: createAdminResponse = await mutate(createAdmin, { input });
      console.log("mutation response", response);
    } catch (error) {
      console.error('Error creation new admin:', error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>{user.username}</p>
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => signup("aaa", "fff")}>test</button>
        <button onClick={fetchAdmins}>Fetch Admins</button>
        <button onClick={fetchErnstAdmin}>Fetch Ernst Info</button>
        <button onClick={createNewAdmin}>Add new User</button>
        <button onClick={logout}>Log out</button>
      </header>
    </div>
  );
}

export default App;
