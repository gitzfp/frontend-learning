export default function UserAction({isAdmin}) {
	return (
	    <div>
	      {isAdmin ? <button>Delete User</button> : <button>View Profile</button>}
	    </div>
  );
}
