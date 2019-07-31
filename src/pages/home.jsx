import { useState } from "react";
import { Link } from "react-router";
export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <div>
        <h1>App</h1>
        <ul>
          <li>
            <Link to="/RenderProps">About</Link>
          </li>
          <li>
            <Link to="/WarppedComponent">Inbox</Link>
          </li>
        </ul>
        {this.props.children}
      </div>
    </div>
  );
}
