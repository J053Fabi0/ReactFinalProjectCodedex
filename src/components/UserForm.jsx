import { UserContext } from "./context";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function UserForm() {
  const [inputName, setInputName] = useState("");
  const { setName } = useContext(UserContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setName(inputName.trim()); // Set the name in context
    navigate("/quiz"); // Navigate to the quiz page
  }

  return (
    <form>
      <label>
        Name:
        <input type="text" value={inputName} onChange={(e) => setInputName(e.target.value)} />
      </label>
      <button disabled={inputName.trim() === ""} onClick={handleSubmit}>
        Take the quiz!
      </button>
    </form>
  );
}
