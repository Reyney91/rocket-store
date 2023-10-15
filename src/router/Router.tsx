import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RocketInfoPage from "../pages/RocketInfoPage";
import Catalog from "../pages/Catalog";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/rockets" element={<Catalog />} />
        <Route path="/rockets/:rocket_id" element={<RocketInfoPage />} />
        <Route path="*" element={<Navigate replace to="/rockets" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
