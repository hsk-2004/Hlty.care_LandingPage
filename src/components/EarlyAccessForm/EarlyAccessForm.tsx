"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CustomDropdown from "../CustomDropdown/CustomDropdown";

interface EarlyAccessFormProps {
  onSubmit: (data: FormData) => void;
  onClose: () => void;
}

interface FormData {
  fullName: string;
  email: string;
  role: string;
  country: string;
}

const roles = [
  "parent",
  "educator", 
  "doctor",
  "NGO",
  "CSR",
  "researcher",
  "other"
];

interface Country {
  name: {
    common: string;
  };
}

export default function EarlyAccessForm({ onSubmit, onClose }: EarlyAccessFormProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    role: "",
    country: ""
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countries, setCountries] = useState<string[]>([]);
  const [isLoadingCountries, setIsLoadingCountries] = useState(true);

  // Fetch countries from REST Countries API
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name');
        const data: Country[] = await response.json();
        
        // Sort countries alphabetically and add "Other" option
        const countryNames = data
          .map(country => country.name.common)
          .sort()
          .concat(['Other']);
        
        setCountries(countryNames);
      } catch (error) {
        console.error('Error fetching countries:', error);
        // Fallback to a basic list if API fails
        setCountries([
          "India",
          "United States", 
          "United Kingdom",
          "Canada",
          "Australia",
          "Germany",
          "France",
          "Japan",
          "Singapore",
          "United Arab Emirates",
          "Brazil",
          "Mexico",
          "South Africa",
          "Nigeria",
          "Kenya",
          "Other"
        ]);
      } finally {
        setIsLoadingCountries(false);
      }
    };

    fetchCountries();
  }, []);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.role) {
      newErrors.role = "Please select your role";
    }

    if (!formData.country) {
      newErrors.country = "Please select your country";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      await onSubmit(formData);
      // Form submission successful - modal will be closed by parent
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Heading */}
      <div className="text-center">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-primary mb-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Join the Movement to Reverse the Clock
        </motion.h2>
        <motion.p
          className="text-gray-600 text-sm md:text-base"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Get early access to phygital tools, school kits, and the app from The HLTY.Beings Collective.
        </motion.p>
      </div>

      {/* Form Fields */}
      <div className="space-y-4">
        {/* Full Name */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            value={formData.fullName}
            onChange={(e) => handleInputChange("fullName", e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-bright-teal focus:border-transparent transition-colors text-primary ${
              errors.fullName ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="e.g., John Smith"
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
          )}
        </motion.div>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-bright-teal focus:border-transparent transition-colors text-primary ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="e.g., john.smith@example.com"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </motion.div>

        {/* Role Dropdown */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="w-full"
        >
          <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
            Role *
          </label>
          <CustomDropdown
            options={roles}
            value={formData.role}
            onChange={(value) => handleInputChange("role", value)}
            placeholder="Select your role"
            error={errors.role}
            className="w-full"
          />
        </motion.div>

        {/* Country Dropdown */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="w-full"
        >
          <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
            Country *
          </label>
          <CustomDropdown
            options={countries}
            value={formData.country}
            onChange={(value) => handleInputChange("country", value)}
            placeholder={isLoadingCountries ? "Loading countries..." : "Select your country"}
            disabled={isLoadingCountries}
            error={errors.country}
            className="w-full"
          />
        </motion.div>
      </div>

      {/* Submit Button */}
      <motion.div
        className="flex gap-3 pt-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <button
          type="button"
          onClick={onClose}
          className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting || isLoadingCountries}
          className="flex-1 px-4 py-2 bg-bright-teal text-white rounded-lg hover:bg-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : isLoadingCountries ? "Loading..." : "Get Early Access"}
        </button>
      </motion.div>
    </motion.form>
  );
}
