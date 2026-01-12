import { useNavigate } from "react-router-dom";
import { useFormStore } from "../store/useFormStore";

const Step1 = () => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useFormStore();

  const handleNext = () => {
    if (!formData.firstName || !formData.email) {
      alert("Please fill required fields");
      return;
    }
    navigate("/apply/step-2");
  };

  return (
    <div className="space-y-4">
      <input
        className="w-full p-2 border rounded"
        placeholder="First Name"
        value={formData.firstName}
        onChange={(e) => updateFormData({ firstName: e.target.value })}
      />
      <input
        className="w-full p-2 border rounded"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={(e) => updateFormData({ lastName: e.target.value })}
      />
      <input
        className="w-full p-2 border rounded"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => updateFormData({ email: e.target.value })}
      />

      <button
        onClick={handleNext}
        className="bg-blue-600 text-white px-6 py-2 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default Step1;
