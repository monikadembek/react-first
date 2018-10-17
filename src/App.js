import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const allUsers = ["John", 'Jack', 'James', "Jasper", "Jim", "Andy"];

  class App extends Component {
    constructor() {
      super();

      this.state = {
        filteredUsers: allUsers
      };
    }

    //asynchronous option

    filterUsers(e) {
      const text = e.currentTarget.value;
      const filteredUsers = this.getFilteredUsersForText(text)
      .then( filteredUsers => this.setState({filteredUsers}))
      .catch(err => console.log(err));
    }

    getFilteredUsersForText(text) {
      return new Promise(resolve => {
        const time = (Math.random() + 1) * 250;
        setTimeout(() => {
          const filteredUsers = allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()));
          resolve(filteredUsers);
        }, time) ;
      });
    }

    render() {
      return (
        <div>
          <input onInput={this.filterUsers.bind(this)}/>
          <UsersList users={this.state.filteredUsers}/>
        </div>
      );
    }
  }

  const UsersList = ({users}) => {
    
    if (users.length > 0) {
      return (
        <ul>
          {users.map(user => <li key={user}>{user}</li>)}
        </ul>
      );
    }

    return (
      <p>No results!</p>
    );
    
  };  

export default App;
