/*
 * Copyright (C) 2025 Adheesh Trivedi <adheeshtrivedi@gmail.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 */

import NavBar from "./components/NavBar"

import ParticleBackground from "./components/ParticleBackground"

import { lazy } from "react";

const Home = lazy(() => import("./Home/Home"));
const Projects = lazy(() => import("./Projects/Projects"));
const Experience = lazy(() => import("./Experience/Experience"));

import { Route, Routes } from "react-router-dom";


const pages = ["Projects", "Experience"];

/**
 * A NavBar component at the top of the page
 * and adds the pages
 * @returns Main application component
 */
function App() {

  return (
    <>
      <ParticleBackground />
      <NavBar pages={pages} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </>
  )
}

export default App
