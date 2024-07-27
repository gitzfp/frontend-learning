function UserRole(props) {
  const { role } = props;

  switch (role) {
    case 'admin':
      return <h1>Admin Panel</h1>;
    case 'editor':
      return <h1>Editor Dashboard</h1>;
    case 'viewer':
      return <h1>Viewer Page</h1>;
    default:
      return <h1>Welcome, Guest!</h1>;
  }
}

export default UserRole