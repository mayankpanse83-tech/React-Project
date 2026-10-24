
import UserCard from "./component/UserCard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Employee Details</h1>

      <div className="card-container">
        <UserCard
          name="Mayank Panse"
          age={22}
          city="Bhopal"
          profession="Frontend Developer"
        />

        <UserCard
          name="Aman verma"
          age={25}
          city="Indore"
          profession="UI Designer"
        />

        <UserCard
          name="Rohit sharma"
          age={28}
          city="Delhi"
          profession="Backend Developer"
        />
      </div>
    </div>
  );
}

export default App;
