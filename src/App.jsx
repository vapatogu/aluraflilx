import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./pages/Home/Home";
import { NewVideo } from "./pages/NewVideo/NewVideo";

export const App = () => (
  <Routes>
    <Route path="/" Component={MainLayout}>
      <Route index Component={Home} />
      <Route path="/new-video" Component={NewVideo} />
    </Route>
  </Routes>
);
