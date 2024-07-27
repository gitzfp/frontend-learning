import {Greeting1, Greeting2 } from './Greeting'
import UserAction from './UserAction'
import MailBox from './MailBox'
import ShoppingCart from './ShoppingCart'
import UserInfo from './UserInfo'
import Notifacation from './Notifacation'
import UserRole from './UserRole'
function App() {
  const user = {
    name: '张三',
    email: '139XXX@163.com',
    isAdmin: true,
    isOnline: false

  }
  return <>
    hello world
    <Greeting1 isLoggedIn={true}/>
    <Greeting2 isLoggedIn={false}/>
    <UserAction isAdmin={true}/>
    <MailBox unreadMessages={10}/>
    <ShoppingCart items={[]}/>
    <UserInfo user={user}/>
    <Notifacation message="这是一条通知！"/>
    <UserRole role={'admin'}/>
  </>
}

export default App;
