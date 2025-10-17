"use client";
import "./Register.css";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Register = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "",
  });

  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const { fullName, phone, email, password, agency } = formData;

    if (!fullName || !phone || !email || !password || !agency) {
      setError("⚠️ Please fill in all required fields before continuing.");
      return;
    }
    setError("");
    router.push("/profile");
  };

  return (
    <div className="register-block">
      <div className="register-card">
        <h2>Create your PopX Account</h2>

        <ul className="registerForm">
          <li>
            <TextField
              fullWidth
              required
              name="fullName"
              label="Full Name"
              placeholder="Enter Your Full Name"
              variant="outlined"
              type="text"
              size="small"
              value={formData.fullName}
              onChange={handleChange}
            />
          </li>

          <li>
            <TextField
              fullWidth
              required
              name="phone"
              label="Phone Number"
              placeholder="Enter Your Phone Number"
              type="number"
              size="small"
              value={formData.phone}
              onChange={handleChange}
            />
          </li>

          <li>
            <TextField
              fullWidth
              required
              name="email"
              label="Email Address"
              placeholder="Enter Your Email Address"
              type="email"
              size="small"
              value={formData.email}
              onChange={handleChange}
            />
          </li>

          <li>
            <TextField
              fullWidth
              required
              name="password"
              label="Password"
              placeholder="Enter Your Password"
              type="password"
              size="small"
              value={formData.password}
              onChange={handleChange}
            />
          </li>

          <li>
            <TextField
              fullWidth
              name="company"
              label="Company Name"
              placeholder="Enter Your Company Name"
              type="text"
              size="small"
              value={formData.company}
              onChange={handleChange}
            />
          </li>

          <li className="radioGroupBlock">
            <FormLabel required>Are you an Agency?</FormLabel>
            <RadioGroup
              row
              name="agency"
              value={formData.agency}
              onChange={handleChange}
            >
              <FormControlLabel
                value="yes"
                control={<Radio size="small" />}
                label="Yes"
              />
              <FormControlLabel
                value="no"
                control={<Radio size="small" />}
                label="No"
              />
            </RadioGroup>
          </li>

          {error && <p className="error-text-register">{error}</p>}

          <button className="signInBtn" onClick={handleSubmit}>
            Create Account
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Register;
