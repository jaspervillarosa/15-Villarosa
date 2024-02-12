import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import Calculator from "./pages/Calculator";
import JSON from "./pages/JSON";
import MyHobby from "./pages/MyHobby";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimatePresence mode="wait">

        <Routes>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Home />
              </motion.div>
            }
          />
          <Route
            path="/calculator"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Calculator />
              </motion.div>
            }
          />
          <Route
            path="/JSON"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <JSON />
              </motion.div>
            }
          />
          <Route
            path="/myHobby"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <MyHobby />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  </React.StrictMode>
);