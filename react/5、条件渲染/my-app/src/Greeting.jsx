export function Greeting1(props) {
	const isLoggedIn = props.isLoggedIn
	if(isLoggedIn){
		return <h1>Welcome back</h1>
	}else{
		return <h1>Please sign up</h1>
	}
}

export function Greeting2(props) {
  const isLoggedIn = props.isLoggedIn;
  let greetingMessage;
  if (isLoggedIn) {
    greetingMessage = <h1>Welcome back!</h1>;
  } else {
    greetingMessage = <h1>Please sign up.</h1>;
  }

  return (
    <div>
      {greetingMessage}
    </div>
  );
}