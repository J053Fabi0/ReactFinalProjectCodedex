import Home from "./views/Home";
import Quiz from "./views/Quiz";
import Results from "./views/Results";
import Header from "./components/Header";
import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "./components/context";

function App() {
  const { setArtwork } = useContext(UserContext);

  useEffect(
    function () {
      fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/1")
        .then((response) => response.json())
        .then((data) => setArtwork(data))
        .catch((error) => console.error("Error fetching data from the Met Museum API:", error));
    },
    [setArtwork]
  );

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </>
  );
}

export default App;
