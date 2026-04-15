"use client";

import { useState, useMemo } from "react";
import { Search, Users, Mail, ChevronLeft, ChevronRight, Download } from "lucide-react";
import type { CommunitySignup } from "./types";

const PAGE_SIZE = 12;

// ── Helpers ──────────────────────────────────────────────────────────
function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function formatTime(iso: string) {
  const d = new Date(iso);
  return d.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function exportCSV(data: CommunitySignup[]) {
  const headers = [
    "Name",
    "Email",
    "Phone",
    "Child Age",
    "Interests",
    "Child Interests",
    "Newsletter",
    "Source",
    "Signed Up",
  ];
  const rows = data.map((r) => [
    r.parent_guardian_name,
    r.email,
    r.phone_number || "",
    r.child_age,
    (r.interests || []).join("; "),
    (r.child_interests || []).join("; "),
    r.newsletter_preference,
    r.source,
    new Date(r.created_at).toISOString(),
  ]);

  const csv = [headers, ...rows]
    .map((row) => row.map((cell) => `"${cell.replace(/"/g, '""')}"`).join(","))
    .join("\n");

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `community_signups_${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

// ── Badge ────────────────────────────────────────────────────────────
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block whitespace-nowrap rounded-full border border-[#D3CBBD] bg-[#F0EEE6] px-2 py-0.5 font-jubilat text-[10px] text-[#183A39]/80">
      {children}
    </span>
  );
}

// ── Stat Card ────────────────────────────────────────────────────────
function StatCard({
  icon,
  label,
  value,
  accent,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  accent: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-[16px] border border-[#D3CBBD] bg-[#F4F1EA] p-5 shadow-sm">
      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: accent }}
      >
        {icon}
      </div>
      <div>
        <p className="font-haptik text-[10px] uppercase tracking-[0.14em] text-[#183A39]/55">
          {label}
        </p>
        <p className="font-jubilat text-[24px] leading-tight text-[#183A39]">
          {value}
        </p>
      </div>
    </div>
  );
}

// ── Dashboard ────────────────────────────────────────────────────────
export function AdminDashboard({ signups }: { signups: CommunitySignup[] }) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  // Derived data
  const filtered = useMemo(() => {
    if (!search.trim()) return signups;
    const q = search.toLowerCase();
    return signups.filter(
      (s) =>
        s.email.toLowerCase().includes(q) ||
        s.parent_guardian_name.toLowerCase().includes(q),
    );
  }, [signups, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageData = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  const newsletterCount = signups.filter(
    (s) => s.newsletter_opt_in || s.newsletter_preference === "newsletter",
  ).length;

  return (
    <div className="mx-auto max-w-[1280px] px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
      {/* ── Header ──────────────────────────────────────────────── */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-haptik text-[10px] uppercase tracking-[0.16em] text-[#183A39]/50">
            Hlty Beings
          </p>
          <h1 className="font-jubilat text-[28px] leading-tight text-[#183A39] sm:text-[32px]">
            Community Signups
          </h1>
        </div>
        <button
          type="button"
          onClick={() => exportCSV(filtered)}
          className="group flex items-center gap-2 self-start rounded-full border border-[#D3CBBD] bg-[#F4F1EA] px-4 py-2.5 font-haptik text-[11px] uppercase tracking-[0.08em] text-[#183A39]/80 transition-all hover:border-[#183A39]/40 hover:shadow-sm"
        >
          <Download size={14} className="transition-transform group-hover:-translate-y-0.5" />
          Export CSV
        </button>
      </div>

      {/* ── Stats ───────────────────────────────────────────────── */}
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard
          icon={<Users size={18} className="text-[#183A39]" />}
          label="Total Signups"
          value={signups.length}
          accent="#E4DCCD"
        />
        <StatCard
          icon={<Mail size={18} className="text-[#183A39]" />}
          label="Newsletter Opt-ins"
          value={newsletterCount}
          accent="#D6EDE2"
        />
        <StatCard
          icon={
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#183A39" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>
          }
          label="This Month"
          value={
            signups.filter((s) => {
              const d = new Date(s.created_at);
              const now = new Date();
              return (
                d.getMonth() === now.getMonth() &&
                d.getFullYear() === now.getFullYear()
              );
            }).length
          }
          accent="#F5E6C8"
        />
      </div>

      {/* ── Search & Count ──────────────────────────────────────── */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-xs w-full">
          <Search
            size={15}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#183A39]/35"
          />
          <input
            type="text"
            placeholder="Search by name or email…"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="w-full rounded-[12px] border border-[#D3CBBD] bg-white py-2.5 pl-10 pr-4 font-jubilat text-[13px] text-[#183A39] outline-none transition-colors placeholder:text-[#183A39]/35 focus:border-[#183A39]/50"
          />
        </div>
        <p className="font-jubilat text-[12px] text-[#183A39]/50">
          Showing {pageData.length} of {filtered.length} result
          {filtered.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* ── Table ───────────────────────────────────────────────── */}
      <div className="mt-4 overflow-hidden rounded-[16px] border border-[#D3CBBD] bg-[#F4F1EA] shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[820px] text-left">
            <thead>
              <tr className="border-b border-[#D3CBBD] bg-[#E8E2D6]">
                {[
                  "Name",
                  "Email",
                  "Phone",
                  "Age",
                  "Interests",
                  "Child Interests",
                  "Signed Up",
                ].map((h) => (
                  <th
                    key={h}
                    className="px-4 py-3 font-haptik text-[10px] uppercase tracking-[0.14em] text-[#183A39]/60"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pageData.length === 0 ? (
                <tr>
                  <td
                    colSpan={7}
                    className="px-4 py-16 text-center font-jubilat text-[14px] text-[#183A39]/40"
                  >
                    {search
                      ? "No signups match your search."
                      : "No signups yet. They'll appear here once someone submits the form."}
                  </td>
                </tr>
              ) : (
                pageData.map((row, idx) => (
                  <tr
                    key={row.id || idx}
                    className="border-b border-[#D3CBBD]/50 transition-colors last:border-0 hover:bg-[#EDEADF]"
                  >
                    <td className="px-4 py-3 font-jubilat text-[13px] text-[#183A39]">
                      {row.parent_guardian_name}
                    </td>
                    <td className="px-4 py-3 font-jubilat text-[13px] text-[#183A39]/80">
                      {row.email}
                    </td>
                    <td className="px-4 py-3 font-jubilat text-[13px] text-[#183A39]/60">
                      {row.phone_number || "—"}
                    </td>
                    <td className="px-4 py-3">
                      <Badge>{row.child_age}</Badge>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap gap-1">
                        {(row.interests || []).map((tag) => (
                          <Badge key={tag}>{tag}</Badge>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap gap-1">
                        {(row.child_interests || []).map((tag) => (
                          <Badge key={tag}>{tag}</Badge>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <p className="font-jubilat text-[12px] text-[#183A39]/80">
                        {formatDate(row.created_at)}
                      </p>
                      <p className="font-jubilat text-[10px] text-[#183A39]/40">
                        {formatTime(row.created_at)}
                      </p>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Pagination ──────────────────────────────────────────── */}
      {totalPages > 1 && (
        <div className="mt-4 flex items-center justify-center gap-2">
          <button
            type="button"
            disabled={currentPage <= 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D3CBBD] bg-white text-[#183A39]/60 transition-all hover:border-[#183A39]/40 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={16} />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPage(p)}
              className={`flex h-9 w-9 items-center justify-center rounded-full font-haptik text-[12px] transition-all ${
                p === currentPage
                  ? "bg-[#183A39] text-[#F0EEE6] shadow-sm"
                  : "border border-[#D3CBBD] bg-white text-[#183A39]/60 hover:border-[#183A39]/40"
              }`}
            >
              {p}
            </button>
          ))}

          <button
            type="button"
            disabled={currentPage >= totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D3CBBD] bg-white text-[#183A39]/60 transition-all hover:border-[#183A39]/40 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}

      {/* ── Footer ──────────────────────────────────────────────── */}
      <p className="mt-8 text-center font-jubilat text-[11px] text-[#183A39]/30">
        Hlty Beings Admin · Data is read-only
      </p>
    </div>
  );
}
