import Header from "./Header";
function Login() {
  return (
    <div>
      <Header></Header>
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_medium.jpg"
          alt=""
        />
      </div>
      <form>
        <input type="text" placeholder="Email" className="p-2 mb-2"></input>
        <input
          type="password"
          placeholder="Password"
          className="p-2 mb-2"
        ></input>
        <button className="p-4 m-4"></button>
      </form>
    </div>
  );
}

export default Login;
