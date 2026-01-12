import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import FormLayout from "./layouts/FormLayout";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Review from "./pages/Review";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/apply/step-1" />} />

        <Route path="/apply" element={<FormLayout />}>
          <Route path="step-1" element={<Step1 />} />
          <Route path="step-2" element={<Step2 />} />
          <Route path="review" element={<Review />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
