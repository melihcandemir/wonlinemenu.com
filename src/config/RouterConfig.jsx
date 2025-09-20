import { Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Admin from "../page/Admin";
import NotFoundPage from "../page/NotFoundPage";
import TestEt from "../page/TestEt";

export default function RouterConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test-et" element={<TestEt />} />
      <Route path="/admin54" element={<Admin />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
