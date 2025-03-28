import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Define types for form data and errors
interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}

interface Errors {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const [errors, setErrors] = useState<Errors>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  // Handle input change with correct typing
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form validation logic
  const validate = (): boolean => {
    let valid = true;
    const newErrors: Errors = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    };

    if (!formData.name) {
      newErrors.name = "Name is required.";
      valid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address.";
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
      valid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
      valid = false;
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
      valid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Handle form submission with correct typing
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 dark:from-gray-800 dark:via-gray-900 dark:to-black p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-green-400 to-blue-500 text-white text-center">
          <h2 className="text-2xl font-bold">Create Your Account</h2>
          <p className="text-sm opacity-90">Join us and make an impact!</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {[
            { name: "name", type: "text", label: "Name", placeholder: "John Doe" },
            { name: "email", type: "email", label: "Email", placeholder: "john@example.com" },
            { name: "phone", type: "text", label: "Phone Number", placeholder: "9876543210" },
            { name: "password", type: "password", label: "Password", placeholder: "********" },
            { name: "confirmPassword", type: "password", label: "Confirm Password", placeholder: "********" },
          ].map((field) => (
            <div key={field.name}>
              <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {field.label}
              </label>
              <Input
                type={field.type}
                name={field.name}
                id={field.name}
                placeholder={field.placeholder}
                value={formData[field.name as keyof FormData]}
                onChange={handleChange}
                className="mt-1"
              />
              {errors[field.name as keyof Errors] && (
                <p className="text-red-500 text-xs mt-1">{errors[field.name as keyof Errors]}</p>
              )}
            </div>
          ))}
          <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition">
            Sign Up
          </Button>
        </form>

        {/* Footer */}
        <div className="p-4 text-sm text-center text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
