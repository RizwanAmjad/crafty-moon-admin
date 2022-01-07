import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeComponent from "./HomeComponent";
import CategoriesComponent from "./CategoriesComponent";
import PaintingsComponent from "./PaintingsComponent";

import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

import "./styles/app.css";

function AppComponent(props) {
  return (
    <BrowserRouter>
      <div className="container">
        <header>
          <Header />
        </header>

        <aside>
          <Nav />
        </aside>

        <main>
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/categories" element={<CategoriesComponent />} />
            <Route path="/paintings" element={<PaintingsComponent />} />
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default AppComponent;
