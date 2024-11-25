import { useEffect, useState } from "react";

export default function GitHubUser() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    try {
      const response = await fetch("https://api.github.com/users");
      console.log(response);
      const result = await response.json();
      console.log(result);
      setUsers(result);
    } catch (error) {}
  }
  useEffect(()=>{fetchUsers()}, []);
//   fetchUsers();
  return (
    <>
      <h2>GitHub Users</h2>
      <div className="users">
        <ul>
            {users.map((user)=>{
                const {id, avatar_url, login, html_url} = user;
                return (
                <li key={id}>
                    <img src={avatar_url} alt={login} />
                    <p>{login}</p>
                    <a href={html_url} target="_blank">Profile</a>
                </li>
                );
            })}
        </ul>
      </div>
    </>
  );
}
