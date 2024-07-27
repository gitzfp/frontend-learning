function Notification(props) {
  const { message } = props;

  if (!message) {
    return null;
  }

  return (
    <div className="notification">
      {message}
    </div>
  );
}

export default Notification