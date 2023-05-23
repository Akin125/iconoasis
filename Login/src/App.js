import "./styles.css";

export default function App() {
  return (
    <div>


  <div class="top-section">
    <p class="Name">ICONOASIS</p>
    <p class="text">Your one-stop icon destination</p>
  </div>
  
  <div class="user-info">
  <p class="info-text">Username:</p>
  <input type="text"/>
  <p class="info-text">Email:</p>
  <input type="email"/>
  <p class="info-text">Password:</p>
  <input type="password"/>
  <p class="info-text">Confirm Password:</p>
  <input type="password"/>
  </div>

  <input class="submit" value="SIGN UP" type="submit"/>

  </div>
  );
}

