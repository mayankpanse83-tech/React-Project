
function UserCard(props) {
  return (
    <div className="user-card">
      <div className="avatar">
        {props.name.charAt(0)}
      </div>

      <h2>{props.name}</h2>

      <p>
        <strong>Age:</strong> {props.age}
      </p>

      <p>
        <strong>City:</strong> {props.city}
      </p>

      <p>
        <strong>Profession:</strong> {props.profession}
      </p>

      <button>View Profile</button>
    </div>
  );
}

export default UserCard;
