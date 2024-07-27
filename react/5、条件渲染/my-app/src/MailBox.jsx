export default function MainBox(props) {
	 const unreadMessages = props.unreadMessages;
	 return <div>
      	<h1>Hello!</h1>
      	{unreadMessages > 0 && <h2>
          You have <span style={{color: 'red'}}>{unreadMessages}</span> unread messages.
        </h2>}
      </div> 
}