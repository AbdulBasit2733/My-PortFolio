import React from "react";
import { AppSiderbar } from "./components/AppSidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

const App = () => {
  return (
    <main className="w-full">
      <Routes>
        <Route path="/" element={<AppSiderbar />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="skills" element={<Skills />} />
          <Route path="experience" element={<Experience />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
