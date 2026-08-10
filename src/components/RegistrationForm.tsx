import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

interface RegistrationData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

function RegistrationForm() {
  const [form, setForm] = useState<RegistrationData>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function validate(): boolean {
    const newErrors: FormErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!form.email.includes("@")) newErrors.email = "Valid email is required";
    if (form.password.length < 6) newErrors.password = "At least 6 characters";
    if (form.password !== form.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    console.log("Registered:", form);
    alert("Registration successful!");
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}
    >
      <h2 style={{ marginBottom: "16px" }}>Register</h2>
      <Input label="Full Name" name="fullName" value={form.fullName} error={errors.fullName} onChange={handleChange} />
      <Input label="Email" name="email" type="email" value={form.email} error={errors.email} onChange={handleChange} />
      <Input label="Password" name="password" type="password" value={form.password} error={errors.password} onChange={handleChange} />
      <Input label="Confirm Password" name="confirmPassword" type="password" value={form.confirmPassword} error={errors.confirmPassword} onChange={handleChange} />
      <Button label="Register" onClick={() => {}} />
    </form>
  );
}

export default RegistrationForm;
