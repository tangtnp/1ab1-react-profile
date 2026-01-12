import { useNavigate } from "react-router-dom";
import { useFormStore } from "../store/useFormStore";

const Step2 = () => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useFormStore();

  // Guard: ถ้าไม่ได้กรอก Step 1
  if (!formData.email) {
    navigate("/apply/step-1");
  }

  return (
    <div className="space-y-4">
      <textarea
        className="w-full p-2 border rounded"
        placeholder="Experience"
        value={formData.experience}
        onChange={(e) => updateFormData({ experience: e.target.value })}
      />
      <textarea
        className="w-full p-2 border rounded"
        placeholder="Skills"
        value={formData.skills}
        onChange={(e) => updateFormData({ skills: e.target.value })}
      />

      <div className="flex justify-between">
        <button
          onClick={() => navigate("/apply/step-1")}
          className="px-4 py-2 border rounded"
        >
          Back
        </button>
        <button
          onClick={() => navigate("/apply/review")}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Review
        </button>
      </div>
    </div>
  );
};

export default Step2;
