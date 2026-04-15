"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

const ageOptions = ["0-5", "6-10", "11-13", "14-16", "16+"] as const;

const interestOptions = [
  "Playshops & Events",
  "Books & Comics",
  "Games & Learning Kits",
  "Early access to new projects",
] as const;

const childInterestOptions = [
  "Dance",
  "Sports",
  "Art & Design",
  "Music / Theatre",
  "Science & Curiosity",
  "Reading & Stories",
] as const;

type NewsletterPreference = "newsletter" | "skip";

interface JoinCommunityFormProps {
  source?: string;
}

interface FormState {
  parentGuardianName: string;
  email: string;
  phoneNumber: string;
  childAge: string;
  interests: string[];
  childInterests: string[];
  newsletterPreference: NewsletterPreference;
}

const initialState: FormState = {
  parentGuardianName: "",
  email: "",
  phoneNumber: "",
  childAge: "",
  interests: [],
  childInterests: [],
  newsletterPreference: "newsletter",
};

function ToggleChip({
  checked,
  label,
  name,
  type,
  value,
  onChange,
}: {
  checked: boolean;
  label: string;
  name: string;
  type: "checkbox" | "radio";
  value: string;
  onChange: () => void;
}) {
  return (
    <label
      className={`flex cursor-pointer items-center gap-2.5 rounded-full border px-3 py-2 transition-all text-[13px] ${
        checked
          ? "border-[#183A39] bg-[#E4DBCD] text-[#183A39] shadow-sm"
          : "border-[#D3CBBD] bg-white text-[#183A39]/80 hover:border-[#183A39]/40"
      }`}
    >
      <input
        checked={checked}
        className="sr-only"
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
      <span
        className={`flex h-[16px] w-[16px] shrink-0 items-center justify-center rounded-full border-[1.5px] transition-colors ${
          checked
            ? "border-[#183A39] bg-[#183A39]"
            : "border-[#BEB4A5]"
        }`}
      >
        {checked && (
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
            {type === "checkbox" ? (
              <path d="M1.5 4L3.2 5.8L6.5 2.2" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <circle cx="4" cy="4" r="2.5" fill="white" />
            )}
          </svg>
        )}
      </span>
      <span className="font-jubilat leading-tight">
        {label}
      </span>
    </label>
  );
}

export function JoinCommunityForm({
  source = "workshop_join_community",
}: JoinCommunityFormProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [alreadyJoined, setAlreadyJoined] = useState(false);

  const toggleMultiSelect = (
    field: "interests" | "childInterests",
    value: string,
  ) => {
    setForm((current) => {
      const values = current[field];
      const nextValues = values.includes(value)
        ? values.filter((item) => item !== value)
        : [...values, value];

      return {
        ...current,
        [field]: nextValues,
      };
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/join-community", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          source,
        }),
      });

      const result = (await response.json()) as {
        error?: string;
        already_joined?: boolean;
      };

      if (result.already_joined) {
        setAlreadyJoined(true);
        return;
      }

      if (!response.ok) {
        throw new Error(result.error || "Unable to submit the form right now.");
      }

      setIsSubmitted(true);
      setForm(initialState);
    } catch (submissionError) {
      const message =
        submissionError instanceof Error
          ? submissionError.message
          : "Unable to submit the form right now.";
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (alreadyJoined) {
    return (
      <div className="w-full rounded-[20px] border border-[#D3CBBD] bg-white px-6 py-8 text-left">
        <p className="font-haptik text-[11px] uppercase tracking-[0.16em] text-[#183A39]/65">
          Welcome back
        </p>
        <h3 className="mt-2 font-jubilat text-[22px] leading-tight text-[#183A39] md:text-[24px]">
          You&apos;re already part of the playground!
        </h3>
        <p className="mt-3 font-jubilat text-[14px] leading-relaxed text-[#183A39]/80">
          This email is already registered. We&apos;ll keep you updated on
          workshops, events, and new products.
        </p>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="w-full rounded-[20px] border border-[#D3CBBD] bg-white px-6 py-8 text-left">
        <p className="font-haptik text-[11px] uppercase tracking-[0.16em] text-[#183A39]/65">
          You&apos;re in
        </p>
        <h3 className="mt-2 font-jubilat text-[22px] leading-tight text-[#183A39] md:text-[24px]">
          Thanks for joining the Hlty Beings Playground.
        </h3>
        <p className="mt-3 font-jubilat text-[14px] leading-relaxed text-[#183A39]/80">
          We&apos;ll share updates about upcoming workshops, events, and
          products with you soon.
        </p>
        <button
          className="mt-5 rounded-full bg-[#183A39] px-6 py-2.5 font-haptik text-[12px] uppercase tracking-[0.08em] text-[#F0EEE6] transition-opacity hover:opacity-90"
          type="button"
          onClick={() => setIsSubmitted(false)}
        >
          Submit another response
        </button>
      </div>
    );
  }

  return (
    <form className="w-full text-left" onSubmit={handleSubmit}>
      <div className="space-y-5">
        {/* Text inputs — always single column inside the 480px card */}
        <div className="space-y-3">
          <label className="block">
            <span className="mb-1.5 block font-haptik text-[10px] uppercase tracking-[0.14em] text-[#183A39]">
              Parent/Guardian Name *
            </span>
            <input
              required
              className="w-full rounded-[12px] border border-[#D3CBBD] bg-white px-3.5 py-2.5 font-jubilat text-[13px] text-[#183A39] outline-none transition-colors placeholder:text-[#183A39]/40 focus:border-[#183A39]"
              name="parentGuardianName"
              placeholder="Enter full name"
              type="text"
              value={form.parentGuardianName}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  parentGuardianName: event.target.value,
                }))
              }
            />
          </label>

          <div className="grid grid-cols-2 gap-2.5">
            <label className="block">
              <span className="mb-1.5 block font-haptik text-[10px] uppercase tracking-[0.14em] text-[#183A39]">
                Email Address *
              </span>
              <input
                required
                className="w-full rounded-[12px] border border-[#D3CBBD] bg-white px-3.5 py-2.5 font-jubilat text-[13px] text-[#183A39] outline-none transition-colors placeholder:text-[#183A39]/40 focus:border-[#183A39]"
                name="email"
                placeholder="name@email.com"
                type="email"
                value={form.email}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    email: event.target.value,
                  }))
                }
              />
            </label>

            <label className="block">
              <span className="mb-1.5 block font-haptik text-[10px] uppercase tracking-[0.14em] text-[#183A39]">
                Phone Number
              </span>
              <input
                className="w-full rounded-[12px] border border-[#D3CBBD] bg-white px-3.5 py-2.5 font-jubilat text-[13px] text-[#183A39] outline-none transition-colors placeholder:text-[#183A39]/40 focus:border-[#183A39]"
                name="phoneNumber"
                placeholder="Optional"
                type="tel"
                value={form.phoneNumber}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    phoneNumber: event.target.value,
                  }))
                }
              />
            </label>
          </div>
        </div>

        {/* Child's Age — compact chip row */}
        <fieldset className="min-w-0">
          <legend className="mb-2 block font-haptik text-[10px] uppercase tracking-[0.14em] text-[#183A39]">
            Child&apos;s Age *
          </legend>
          <div className="flex flex-wrap gap-1.5">
            {ageOptions.map((option) => (
              <ToggleChip
                key={option}
                checked={form.childAge === option}
                label={option}
                name="childAge"
                type="radio"
                value={option}
                onChange={() =>
                  setForm((current) => ({
                    ...current,
                    childAge: option,
                  }))
                }
              />
            ))}
          </div>
        </fieldset>

        {/* Interests — wrap naturally */}
        <fieldset className="min-w-0">
          <legend className="mb-2 block font-haptik text-[10px] uppercase tracking-[0.14em] text-[#183A39]">
            What Are You Interested In? *
          </legend>
          <div className="flex flex-wrap gap-1.5">
            {interestOptions.map((option) => (
              <ToggleChip
                key={option}
                checked={form.interests.includes(option)}
                label={option}
                name="interests"
                type="checkbox"
                value={option}
                onChange={() => toggleMultiSelect("interests", option)}
              />
            ))}
          </div>
        </fieldset>

        {/* Child's Interests — wrap naturally */}
        <fieldset className="min-w-0">
          <legend className="mb-2 block font-haptik text-[10px] uppercase tracking-[0.14em] text-[#183A39]">
            Child&apos;s Interests *
          </legend>
          <div className="flex flex-wrap gap-1.5">
            {childInterestOptions.map((option) => (
              <ToggleChip
                key={option}
                checked={form.childInterests.includes(option)}
                label={option}
                name="childInterests"
                type="checkbox"
                value={option}
                onChange={() => toggleMultiSelect("childInterests", option)}
              />
            ))}
          </div>
        </fieldset>

        {/* Newsletter */}
        <fieldset className="min-w-0 rounded-[16px] border border-[#D3CBBD] bg-[#EAE4D8]/60 px-4 py-3.5">
          <legend className="font-haptik text-[10px] uppercase tracking-[0.14em] text-[#183A39]">
            Newsletter
          </legend>
          <p className="mb-3 font-jubilat text-[12px] leading-relaxed text-[#183A39]/75">
            Short, science-backed notes on childhood health and nutrition.
          </p>
          <div className="flex flex-wrap gap-1.5">
            <ToggleChip
              checked={form.newsletterPreference === "newsletter"}
              label="Yes, send me updates"
              name="newsletterPreference"
              type="radio"
              value="newsletter"
              onChange={() =>
                setForm((current) => ({
                  ...current,
                  newsletterPreference: "newsletter",
                }))
              }
            />
            <ToggleChip
              checked={form.newsletterPreference === "skip"}
              label="Skip for now"
              name="newsletterPreference"
              type="radio"
              value="skip"
              onChange={() =>
                setForm((current) => ({
                  ...current,
                  newsletterPreference: "skip",
                }))
              }
            />
          </div>
        </fieldset>
      </div>

      {error ? (
        <p className="mt-3 rounded-[12px] border border-[#C85E4D]/30 bg-[#FFF4F1] px-3.5 py-2.5 font-jubilat text-[12px] text-[#8B3B2E]">
          {error}
        </p>
      ) : null}

      <div className="mt-4 flex flex-col gap-3 border-t border-[#D3CBBD] pt-4">
        <p className="font-jubilat text-[11px] leading-relaxed text-[#183A39]/60">
          We&apos;ll only use these details to share relevant Hlty Beings
          updates with your family.
        </p>

        <button
          className="w-full rounded-full bg-[#183A39] px-5 py-2.5 font-haptik text-[12px] uppercase tracking-[0.08em] text-[#F0EEE6] transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 inline h-3.5 w-3.5 animate-spin" />
              Sending
            </>
          ) : (
            "Join the playground"
          )}
        </button>
      </div>
    </form>
  );
}
