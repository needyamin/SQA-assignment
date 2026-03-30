import { Route, Routes } from "react-router";
import SafeSuspense from "@/routes/fallback/SafeSuspense";
import HomePage from "@/page/HomePage";

const RouterIndex = () => {
  return (
    <SafeSuspense>
      <Routes>
       <Route path="/" element={<HomePage />} />
        <Route path="*" element={<div>Path not found</div>} />
      </Routes>
    </SafeSuspense>
  );
};

export default RouterIndex;
