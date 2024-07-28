function App() {
  const fruits = [
    { id: 1, name: 'Apple', description: 'A sweet, edible fruit produced by an apple tree.', imageUrl: require('./images/apple.jpeg') },
    { id: 2, name: 'Banana', description: 'An elongated, edible fruit produced by several kinds of large herbaceous flowering plants.', imageUrl: require('./images/bananer.jpeg') },
    { id: 3, name: 'Kiwi', description: 'An edible berry of several species of woody vines in the genus Actinidia.', imageUrl: require('./images/kiwi.jpeg') },
    { id: 4, name: 'Pear', description: 'A sweet fruit with a green skin and a white inside.', imageUrl: require('./images/pear.jpeg') },
    { id: 5, name: 'Strawberry', description: 'A widely grown hybrid species of the genus Fragaria, collectively known as the strawberries.', imageUrl: require('./images/strawberry.jpeg') },
  ];
  const listItems = fruits.map(fruit => {
    const nameId = `${fruit.name}-${fruit.id}`
    return <li>{nameId}</li>
  })
  const filtedFruits = fruits;//fruits.filter((fruit) => fruit.name.startsWith('A'))
  const listItems2 = filtedFruits.map((fruit, index) => {
    // const nameId = `${fruit.name}-${fruit.id}`
    return  <li key={index}>
        <img src={fruit.imageUrl} alt={fruit.name} style={{ width: '100px', height: '100px' }} />
        <p><strong>{fruit.name}:</strong> {fruit.description}</p>
  </li>
  })
  console.log('fruits:',fruits, "listItems:", listItems)
  return <>
    <h1>6、渲染列表</h1>
    <ul>
      {/* <li>
        {fruits[0].name}
      </li>
      <li>
        {fruits[1].name}
      </li>
      <li>
        {fruits[2].name}
      </li>
      <li>
        {fruits[3].name}
      </li>
      <li>
        {fruits[4].name}
      </li> */}
      {listItems2}
    </ul>
  </>
}
export default App;
