import { create } from "zustand";

export const useFormStore = create((set) => ({
  formData: {
    firstName: "",
    lastName: "",
    email: "",
    experience: "",
    skills: "",
  },

  // update แบบ partial
  updateFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),

  resetForm: () =>
    set({
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        experience: "",
        skills: "",
      },
    }),
}));
