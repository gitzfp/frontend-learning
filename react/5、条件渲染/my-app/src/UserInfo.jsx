function UserInfo(props) {
  const user = props.user;
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      {user.isAdmin && <p>Admin Access</p>}
      {user.isOnline ? <p>Online</p> : <p>Offline</p>}
    </div>
  );
}

export default UserInfo