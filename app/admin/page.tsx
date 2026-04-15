"use client";

import { useState } from "react";
import { Loader2, Lock } from "lucide-react";
import { AdminDashboard } from "./AdminDashboard";
import type { CommunitySignup } from "./types";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [signups, setSignups] = useState<CommunitySignup[] | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = (await res.json()) as {
        signups?: CommunitySignup[];
        error?: string;
      };

      if (!res.ok) {
        throw new Error(data.error || "Invalid password.");
      }

      setSignups(data.signups || []);
    } catch (err) {
      const msg =
        err instanceof Error ? err.message : "Something went wrong.";
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  };

  // ── Authenticated: show dashboard ──────────────────────────────
  if (signups !== null) {
    return <AdminDashboard signups={signups} />;
  }

  // ── Login form ─────────────────────────────────────────────────
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm rounded-[24px] border border-[#D3CBBD] bg-[#F4F1EA] p-8 shadow-sm"
      >
        {/* Icon */}
        <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#183A39]/10">
          <Lock size={20} className="text-[#183A39]" />
        </div>

        {/* Heading */}
        <h1 className="text-center font-jubilat text-[22px] leading-tight text-[#183A39]">
          Admin Access
        </h1>
        <p className="mt-1.5 text-center font-jubilat text-[13px] text-[#183A39]/50">
          Enter the admin password to continue.
        </p>

        {/* Password input */}
        <div className="mt-6">
          <label className="block">
            <span className="mb-1.5 block font-haptik text-[10px] uppercase tracking-[0.14em] text-[#183A39]">
              Password
            </span>
            <input
              autoFocus
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-[12px] border border-[#D3CBBD] bg-white px-3.5 py-2.5 font-jubilat text-[14px] text-[#183A39] outline-none transition-colors placeholder:text-[#183A39]/25 focus:border-[#183A39]/50"
            />
          </label>
        </div>

        {/* Error */}
        {error && (
          <p className="mt-3 rounded-[10px] border border-[#C85E4D]/25 bg-[#FFF4F1] px-3 py-2 font-jubilat text-[12px] text-[#8B3B2E]">
            {error}
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className="mt-5 flex w-full items-center justify-center rounded-full bg-[#183A39] py-2.5 font-haptik text-[12px] uppercase tracking-[0.08em] text-[#F0EEE6] transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? (
            <>
              <Loader2 size={14} className="mr-2 animate-spin" />
              Verifying
            </>
          ) : (
            "Unlock Dashboard"
          )}
        </button>
      </form>
    </div>
  );
}
