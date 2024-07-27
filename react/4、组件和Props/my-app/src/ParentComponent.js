import { ChildComponent1, ChildComponent2, ChildComponent3, ChildComponent4, ChildComponent5, ChildComponent6} from "./ChildComponent";
import {useEffect, useState} from 'react'
export function ParentComponent() {
    const personObj = {
      name: '王五',
      age: 22
    }
    const onGreet = (greet) => {
      alert('父组件接收到：' + greet)
    }
    const [age, setAge] = useState(30);
    const child5 = { name: 'John Doe', age: age };
    const child6 = { name: 'jondan', age: 31 };
    const [countdown, setCountdown] = useState(10);
    useEffect(() => {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown > 0 ? prevCountdown - 1 : 0);
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
    const increaseAge = () => {
      setAge(age + 1);
      alert('increaseAge')
    };
  

    return (
      <div>
        <h1>我是父组件的头部</h1>
        <ChildComponent1 name={"张三"} age={20} />
        <ChildComponent2 age={21} />
        <ChildComponent3 person={personObj} />
        <ChildComponent4 greet={onGreet} name={'component4'} person={{
          name: '赵六',
          age: 20
        }}>
           <p style={{color: 'red'}}>我是父元素传递过来的...</p>
        </ChildComponent4>
        <ChildComponent5 person={child5} countdown={countdown}>
            <button onClick={increaseAge}>Increase Age</button>
        </ChildComponent5>
        <ChildComponent6 {...child6}/>
        <h1>我是父组件的尾部</h1>
      </div>
    );
  }
  