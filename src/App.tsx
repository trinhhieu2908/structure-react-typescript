import React from "react";
import "./App.scss";
import "antd/dist/antd.css";
import { Routes, Route } from "react-router-dom";
import LayoutApp from "./components/layout";
import Matches from "./scenes/Matches";
import NotFound from "./scenes/NotFound";
import ListMatches from "./scenes/Matches/components/ListMatches";

function App() {
  return (
    <LayoutApp>
      <Routes>
        <Route path="/matches" element={<Matches />}>
          <Route path="" element={<ListMatches />} />
          <Route path=":idMatch" element={<h1>abc</h1>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </LayoutApp>
  );
}

export default App;
