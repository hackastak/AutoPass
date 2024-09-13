/// <reference types="chrome"/>
import React, { useState, useEffect } from 'react'
import './App.css'

const App: React.FC = () => {
  const [domain, setDomain] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [credentials, setCredentials] useState<Record<string, { username: string; password: string }>>({});

  useEffect(() => {
    chrome.storage.sync.get('credentials', (data) => {
      setCredentials(data.credentials);
    });
  }, []);

  const saveCredentials = () => {
    const newCredentials = { ...credentials, [domain]: { username, password } };
    chrome.storage.sync.set({ credentials: newCredentials }, () => {
      setCredentials(newCredentials);
      setDomain('');
      setUsername('');
      setPassword('');
    });
  };

  return (
    <div>
      <h1>Login Autofill Extension</h1>
      <div>
        <label>Domain:</label>
        <input type="text" value={domain} onChange={(e) => setDomain(e.target.value)} />
      </div>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={saveCredentials}>Save Credentials</button>
      <h2>Saved Credentials:</h2>
      <ul>
        {Object.entries(credentials).map(([domain, { username }]) => (
          <li key={domain}>
            {domain}: {username}
          </li>
        ))}
      </ul>
    </div> 
  )
}

export default App
