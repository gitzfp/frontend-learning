import PropTypes from 'prop-types'
export function ChildComponent1(props) {
    return (
      <div>
         <h2>我是子组件1</h2>
         <p>姓名: {props.name}</p>
         <p>年龄: {props.age}</p>
      </div>
    );
  }

export function ChildComponent2({name = '无名', age}) {
    return (
      <div>
         <h2>我是子组件2</h2>
         <p>姓名: {name}</p>
         <p>年龄: {age}</p>
      </div>
    );
}

export function ChildComponent3({person}) {
      return (
        <div>
           <h2>我是子组件3</h2>
           <p>姓名: {person.name}</p>
           <p>年龄: {person.age}</p>
        </div>
      );
    }

ChildComponent4.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
  }).isRequired,
  greet: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};
    
export function ChildComponent4(props) {
    return (
      <div>
          {props.person.name}
          <h2 onClick={() => props.greet('你好，我是子组件4')}>我是子组件4</h2>
          <h2 style={{color: 'red'}}>{props.name}</h2>
          {props.children}
      </div>
    );
}

export function ChildComponent5({ person, countdown, children }) {

  return (
    <div>
      <h2>我是子组件5</h2>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <p>Countdown: {countdown}</p>
      {children}
    </div>
  );
}

export function ChildComponent6({ name, age }) {
  
  return (
    <div>
      <h2>我是子组件6</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

  
  
  
  
  
  
  

