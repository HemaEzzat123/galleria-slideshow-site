import "./App.css";
import Innerpage from "./components/InnerPage";
import Header from "./components/Header";
import Card from "./components/Card";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Card />
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <Header />
                <Card />
              </>
            }
          />
          <Route
            path="/inner-page/:id"
            element={
              <>
                <Innerpage />{" "}
                <div className="flex">
                  <hr className="mt-[250px] w-28 border border-black" />
                  <hr className="mt-[250px] w-full " />
                </div>
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <div>Page Not Found 404</div>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
