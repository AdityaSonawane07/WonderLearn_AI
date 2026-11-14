import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import { registerUser } from "../Services/authService";
export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "STUDENT"
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    if (form.password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    setLoading(true);

    try {
      const data = {
        fullName: form.fullName,
        email: form.email,
        password: form.password,
        role: form.role
      };
      await registerUser(data);
      navigate("/login");
    } catch (err) {
      setError(
        err.response?.data?.message ||
        "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Create Account 🎉"
      subtitle="Join WonderLearn and start exploring!"
    >
      <form onSubmit={handleRegister} className="space-y-4">

        {[
          { name: "fullName", label: "Full Name", type: "text" },
          { name: "email", label: "Email Address", type: "email" },
          { name: "password", label: "Password", type: "password" },
          { name: "confirmPassword", label: "Confirm Password", type: "password" }
        ].map((field) => (
          <div key={field.name}>
            <label className="block text-sm font-semibold mb-2">
              {field.label}
            </label>

            <input
              type={field.type}
              name={field.name}
              required
              minLength={field.type === "password" ? 8 : undefined}
              value={form[field.name]}
              onChange={handleChange}
              placeholder={`Enter ${field.label.toLowerCase()}`}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>
        ))}

        <div>
          <label className="block text-sm font-semibold mb-2">
            Account Type
          </label>

          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3"
          >
            <option value="STUDENT">Student</option>
            <option value="PARENT">Parent</option>
          </select>
        </div>

        {error && (
          <p role="alert" className="text-red-600 text-sm">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-violet-600 hover:bg-violet-700 disabled:opacity-60 text-white font-bold py-3 rounded-xl transition"
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>

      </form>

      <p className="text-center mt-6 text-gray-600">
        Already have an account?{" "}
        <Link to="/login" className="text-violet-600 font-bold">
          Login
        </Link>
      </p>

    </AuthLayout>
  );
}