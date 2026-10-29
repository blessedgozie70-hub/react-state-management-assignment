
import { createContext, useContext } from 'react';

const UserContext = createContext();

function UserProfile() {
  const username = useContext(UserContext);

  return (
    <section>
      <h3>User Profile</h3>
      <p>Welcome, {username}!</p>
    </section>
  );
}

function ProfileSection() {
  return (
    <div>
      <h2>Profile Section</h2>
      <UserProfile />
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <ProfileSection />
    </div>
  );
}

export default function ContextExample() {
  const username = 'Blessed';

  return (
    <UserContext.Provider value={username}>
      <main>
        <h1>Context API Example</h1>
        <Dashboard />
      </main>
    </UserContext.Provider>
  );
}
