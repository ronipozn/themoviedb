import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Movies from "./routes/movies/movies.component";
import Favorites from "./routes/favorites/favorites.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Movies />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
};

export default App;
