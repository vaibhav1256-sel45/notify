import  { useState } from "react";
import "./Login.css"; // Import the CSS file

const LoginCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login,setLogin]=useState(true)
  const handleSubmit = async(e:any) => {
    e.preventDefault();
 

  };

  return (
    <div className="login-container">
     {login? <div className="login-card">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="email" className="login-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="login-input"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password" className="login-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="login-input"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-button">
            Login
          </button>
          <p>New user ? &nbsp;<span style={{color:'blue',cursor:'pointer'}} onClick={()=>setLogin(false)}>SignUp</span></p>
        </form>
      </div>:( <div className="login-card">
        <h2 className="login-title">Signup</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="email" className="login-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="login-input"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password" className="login-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="login-input"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-button">
           Signup
          </button>
          <p>Already user ? &nbsp;<span style={{color:'blue',cursor:'pointer'}} onClick={()=>setLogin(true)}>Login</span></p>
        </form>
      </div>)}
    </div>
  );
};

export default LoginCard;
