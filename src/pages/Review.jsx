import { useNavigate } from "react-router-dom";
import { useFormStore } from "../store/useFormStore";

const Review = () => {
  const navigate = useNavigate();
  const { formData, resetForm } = useFormStore();

  const handleSubmit = () => {
    alert("Application submitted!");
    resetForm();
    navigate("/apply/step-1");
  };

  return (
    <div className="space-y-3">
      {Object.entries(formData).map(([key, value]) => (
        <div key={key} className="flex justify-between border-b py-1">
          <span className="font-medium">{key}</span>
          <span>{value}</span>
        </div>
      ))}

      <div className="flex justify-between mt-4">
        <button
          onClick={() => navigate("/apply/step-2")}
          className="px-4 py-2 border rounded"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-green-600 text-white rounded"
        >
          Confirm & Submit
        </button>
      </div>
    </div>
  );
};

export default Review;
