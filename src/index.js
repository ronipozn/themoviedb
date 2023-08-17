import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { MoviesProvider } from "./contexts/movies.context";
import { FavoritesProvider } from "./contexts/favorites.context";

import "./index.scss";

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <BrowserRouter>
      <MoviesProvider>
        <FavoritesProvider>
          <App />
        </FavoritesProvider>
      </MoviesProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
