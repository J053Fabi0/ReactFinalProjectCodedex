import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <h1>Which Element are you?</h1>
      <p>Based completely on random things</p>
      <Link to="/">Home</Link>
      {" | "}
      <Link to="/quiz">Quiz</Link>
      <br />
      <br />
    </>
  );
}
