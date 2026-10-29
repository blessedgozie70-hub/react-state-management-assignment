
function UserProfile({ username }) {
  return (
    <section>
      <h3>User Profile</h3>
      <p>Welcome, {username}!</p>
    </section>
  );
}

function ProfileSection({ username }) {
  return (
    <div>
      <h2>Profile Section</h2>
      <UserProfile username={username} />
    </div>
  );
}

function Dashboard({ username }) {
  return (
    <div>
      <h2>Dashboard</h2>
      <ProfileSection username={username} />
    </div>
  );
}

export default function PropDrilling() {
  const username = 'Blessed';

  return (
    <main>
      <h1>Prop Drilling Example</h1>
      <Dashboard username={username} />
    </main>
  );
}
