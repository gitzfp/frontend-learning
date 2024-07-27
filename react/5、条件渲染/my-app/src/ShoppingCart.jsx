function ShoppingCart(props) {
  const items = props.items;

  function renderCart() {
    if (items.length === 0) {
      return <h1>Your cart is empty</h1>;
    }
    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      {renderCart()}
    </div>
  );
}
export default ShoppingCart