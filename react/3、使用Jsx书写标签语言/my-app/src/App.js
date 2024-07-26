import Avatar from './Avatar';
import './App.css';

function App() {
  const url = "AlbertEinstein.jpg"
  const userName = "海蒂·拉玛";
  function getGreeting(user) {
	  return user ? <h1>欢迎, {user}!</h1> : <h1>欢迎, 游客!</h1>;
	}
  const style= {
    color: 'blue',
	  backgroundColor: 'lightgray'
  }
  const obj = {
    style: style,
    userName: '李四'
  }
  const message = '王五'
  return (
      <div class='App'>
        {getGreeting(obj.userName)}
        <h1 style={obj.style}>你好:{userName}</h1>
        <h2 style={{
    color: 'blue',
	  backgroundColor: 'lightgray'
  }}>世界</h2>
        <img src={url} alt="Hedy Lamarr" className="photo" width={100}/>
        <Avatar message={message}/>
      </div>
  );
}

export default App;
