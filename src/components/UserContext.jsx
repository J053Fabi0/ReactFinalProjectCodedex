import { useState } from "react";
import PropTypes from "prop-types";
import { UserContext } from "./context";

export function UserProvider({ children }) {
  const [name, setName] = useState("");
  const [answers, setAnswers] = useState([]);
  const [element, setElement] = useState("");
  const [artwork, setArtwork] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  return (
    <UserContext.Provider
      value={{
        name,
        setName,
        answers,
        element,
        artwork,
        setAnswers,
        setElement,
        setArtwork,
        currentQuestionIndex,
        setCurrentQuestionIndex,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
