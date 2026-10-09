"use client";

import { useState } from "react";
import { HERO_GLOBE } from "./img/batch1";
import { CITY_NEW_YORK, CITY_DALLAS } from "./img/batch2";
import { CITY_LOS_ANGELES, CITY_CHICAGO, CITY_LONDON } from "./img/batch3";
import { CITY_TORONTO, BLOG_TRENDS, BLOG_MDR } from "./img/batch4";
import { BLOG_CLOUD } from "./img/batch5";

/* ---------------- Icons (inline SVG) ---------------- */
const I = {
  shield: (c = "w-6 h-6") => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l8 3v6c0 5-3.4 8.7-8 11-4.6-2.3-8-6-8-11V5l8-3z" /><path d="M9 12l2 2 4-4" /></svg>
  ),
  search: (c = "w-5 h-5") => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
  ),
  pin: (c = "w-5 h-5") => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>
  ),
  building: (c = "w-6 h-6") => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="4" y="3" width="16" height="18" rx="1" /><path d="M9 21v-4h6v4M8 7h2M8 11h2M14 7h2M14 11h2M8 15h8" /></svg>
  ),
  globe: (c = "w-6 h-6") => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.6 3.9 5.7 3.9 9S14.5 18.4 12 21c-2.5-2.6-3.9-5.7-3.9-9S9.5 5.6 12 3z" /></svg>
  ),
  arrow: (c = "w-4 h-4") => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
  ),
  check: (c = "w-4 h-4") => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
  ),
  chevron: (c = "w-4 h-4") => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
  ),
  doc: (c = "w-6 h-6") => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" /><path d="M14 2v6h6M9 13h6M9 17h6" /></svg>
  ),
  users: (c = "w-6 h-6") => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" /></svg>
  ),
  chart: (c = "w-6 h-6") => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M3 3v18h18" /><path d="M7 15l4-6 4 3 5-8" /></svg>
  ),
  bell: (c = "w-6 h-6") => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.7 21a2 2 0 0 1-3.4 0" /></svg>
  ),
  cloud: (c = "w-6 h-6") => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19a4.5 4.5 0 1 0-1.4-8.78 6 6 0 1 0-11.6 1.6A3.5 3.5 0 0 0 6 19h11.5z" /></svg>
  ),
  target: (c = "w-6 h-6") => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.2" fill="currentColor" /></svg>
  ),
  list: (c = "w-6 h-6") => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01" /></svg>
  ),
  monitor: (c = "w-6 h-6") => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="2" y="4" width="20" height="13" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
  ),
  mail: (c = "w-6 h-6") => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 6L2 7" /></svg>
  ),
  star: (c = "w-4 h-4") => (
    <svg className={c} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1L12 2z" /></svg>
  ),
};

/* ---------------- Data ---------------- */
const NAV_LINKS = ["Companies", "By Location", "Services", "Vendors", "Industries", "Resources", "Pricing"];

const STATS = [
  { icon: I.building(), value: "15,000+", label: "Cybersecurity Companies", sub: "Across 100+ countries" },
  { icon: I.pin(), value: "1,000+", label: "Cities Worldwide", sub: "Find local partners easily" },
  { icon: I.globe(), value: "50+", label: "Countries Covered", sub: "Global network" },
  { icon: I.shield(), value: "100+", label: "Cybersecurity Services", sub: "From consulting to managed security" },
];

const TRUSTED = ["Microsoft", "Google", "IBM", "aws", "CISCO", "Palo Alto Networks", "FORTINET"];

const TABS = ["Popular Cities", "United States", "Canada", "United Kingdom", "Europe", "Asia", "Middle East", "Australia"];

const CITIES = [
  { name: "New York", count: "520+ Companies", img: CITY_NEW_YORK },
  { name: "Dallas", count: "330+ Companies", img: CITY_DALLAS },
  { name: "Los Angeles", count: "420+ Companies", img: CITY_LOS_ANGELES },
  { name: "Chicago", count: "300+ Companies", img: CITY_CHICAGO },
  { name: "London", count: "480+ Companies", img: CITY_LONDON },
  { name: "Toronto", count: "280+ Companies", img: CITY_TORONTO },
];

const SERVICES = [
  { icon: I.shield(), tint: "bg-blue-50 text-blue-600", name: "Managed Security Services", count: "1,200+ Companies" },
  { icon: I.target("w-6 h-6"), tint: "bg-rose-50 text-rose-600", name: "Penetration Testing", count: "850+ Companies" },
  { icon: I.list(), tint: "bg-emerald-50 text-emerald-600", name: "Vulnerability Assessment", count: "900+ Companies" },
  { icon: I.bell(), tint: "bg-amber-50 text-amber-600", name: "Incident Response", count: "650+ Companies" },
  { icon: I.cloud(), tint: "bg-sky-50 text-sky-600", name: "Cloud Security", count: "1,100+ Companies" },
  { icon: I.globe(), tint: "bg-violet-50 text-violet-600", name: "Network Security", count: "950+ Companies" },
  { icon: I.users(), tint: "bg-indigo-50 text-indigo-600", name: "Security Consulting", count: "1,300+ Companies" },
  { icon: I.monitor(), tint: "bg-cyan-50 text-cyan-600", name: "MDR Providers", count: "700+ Companies" },
];

const FEATURED = [
  {
    badge: <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-orange-400 to-red-500 text-lg font-black text-white">P</span>,
    name: "Palo Alto Networks", loc: "Santa Clara, CA, USA",
    desc: "Global cybersecurity leader delivering innovative security solutions.",
    tags: ["Network Security", "Cloud Security"],
  },
  {
    badge: <span className="flex h-11 w-11 items-center justify-center rounded-full bg-red-600 text-lg font-black text-white">C</span>,
    name: "CrowdStrike", loc: "Austin, TX, USA",
    desc: "Endpoint security and threat intelligence solutions for modern enterprises.",
    tags: ["EDR", "MDR"],
  },
  {
    badge: <span className="grid h-11 w-11 grid-cols-2 gap-0.5 rounded-lg p-1.5"><span className="bg-red-500" /><span className="bg-green-500" /><span className="bg-blue-500" /><span className="bg-yellow-500" /></span>,
    name: "Microsoft Security", loc: "Redmond, WA, USA",
    desc: "Comprehensive security solutions for a safer digital world.",
    tags: ["Identity Security", "Cloud Security"],
  },
  {
    badge: <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-red-600 text-lg font-black text-white">F</span>,
    name: "Fortinet", loc: "Sunnyvale, CA, USA",
    desc: "Broad, integrated and automated cybersecurity solutions.",
    tags: ["Network Security", "SASE"],
  },
];

const STEPS = [
  { icon: I.search(), title: "1. Search or Browse", desc: "Find companies by location, service or industry." },
  { icon: I.doc(), title: "2. Compare Profiles", desc: "View detailed company profiles and services." },
  { icon: I.users(), title: "3. Connect Directly", desc: "Get in touch with the right information and services." },
  { icon: I.chart(), title: "4. Grow Your Business", desc: "Find trusted partners and secure your organization." },
];

const ARTICLES = [
  {
    img: BLOG_TRENDS, date: "October 8, 2026",
    title: "Top Cybersecurity Trends for 2026",
    desc: "Explore the key cybersecurity trends shaping businesses in 2026 and beyond.",
  },
  {
    img: BLOG_MDR, date: "October 5, 2026",
    title: "How to Choose the Right MDR Provider",
    desc: "A complete guide to selecting the best managed detection and response provider for your business.",
  },
  {
    img: BLOG_CLOUD, date: "October 2, 2026",
    title: "Cloud Security Best Practices for Enterprises",
    desc: "Learn the essential cloud security practices to protect your data and infrastructure.",
  },
];

const FAQS_LEFT = [
  { q: "What is CyberTech?", a: "CyberTech is a global directory of cybersecurity companies, service providers, technology vendors and security experts. It helps businesses find and connect with trusted cybersecurity partners by location, service and industry." },
  { q: "How do I find cybersecurity companies in my city?", a: "Use the search bar or browse by location. Enter your city, state or country to see top-rated cybersecurity companies near you." },
  { q: "Is the information on CyberTech verified?", a: "Yes. Listings go through a review process and company profiles are verified against public business records." },
  { q: "Can I list my cybersecurity company on CyberTech?", a: "Absolutely. Click 'List Your Company' and choose a plan. Our team reviews every submission before publishing." },
];

const FAQS_RIGHT = [
  { q: "What types of companies are listed?", a: "Security vendors, managed security providers, consultancies, MSSPs, and independent security experts." },
  { q: "How much does a listing cost?", a: "Plans start with a free basic listing. Paid plans unlock featured placement, analytics and lead tools." },
  { q: "Do you offer paid sponsorships?", a: "Yes. Featured company cards and category sponsorships are available on paid plans." },
  { q: "Can I search by specific cybersecurity services?", a: "Yes. Filter by 100+ services such as penetration testing, MDR, cloud security and incident response." },
  { q: "Is CyberTech available for international companies?", a: "Yes. The directory covers 50+ countries and 1,000+ cities worldwide." },
  { q: "How often is the directory updated?", a: "Listings are reviewed continuously and company data is refreshed every month." },
];

/* ---------------- Sections ---------------- */
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-white">{I.shield("w-5 h-5")}</span>
          <span className="text-xl font-extrabold tracking-tight text-slate-900">Cyber<span className="text-brand-600">Tech</span></span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
          {NAV_LINKS.map((l) => (
            <a key={l} href="#" className="transition hover:text-brand-600">{l}</a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <button className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-brand-600">{I.search("w-5 h-5")}</button>
          <a href="#" className="text-sm font-semibold text-slate-700 transition hover:text-brand-600">Log in</a>
          <a href="#list-company" className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700">
            List Your Company {I.arrow("w-4 h-4")}
          </a>
        </div>
        <button className="rounded-lg p-2 text-slate-600 lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-100 bg-white px-4 py-3 lg:hidden">
          {NAV_LINKS.map((l) => (
            <a key={l} href="#" className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">{l}</a>
          ))}
          <a href="#list-company" className="mt-2 block rounded-lg bg-brand-600 px-3 py-2.5 text-center text-sm font-semibold text-white">List Your Company</a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 to-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-14 pt-12 sm:px-6 lg:grid-cols-2 lg:pt-16">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-600">The Global Cybersecurity Directory</p>
          <h1 className="mt-3 text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl">
            Connect with Trusted <span className="text-brand-600">Cybersecurity Companies</span> Around the World
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
            Find and compare cybersecurity companies, service providers, technology vendors and security experts by city, country, services and industry.
          </p>
          <form className="mt-6 flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-lg shadow-brand-600/5 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
            <label className="flex flex-1 items-center gap-2 rounded-xl px-3 py-2.5">
              <span className="text-slate-400">{I.search("w-5 h-5")}</span>
              <input className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400" placeholder="Search by company name, service, or keyword..." />
            </label>
            <div className="hidden w-px bg-slate-200 sm:block" />
            <label className="flex flex-1 items-center gap-2 rounded-xl px-3 py-2.5">
              <span className="text-slate-400">{I.pin("w-5 h-5")}</span>
              <input className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400" placeholder="Enter city, state or country..." />
            </label>
            <button className="rounded-xl bg-brand-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">Search</button>
          </form>
          <p className="mt-4 text-xs text-slate-500">
            <span className="font-semibold text-slate-600">Popular Searches:</span>{" "}
            {["Cybersecurity Companies in Dallas", "Penetration Testing Providers", "MDR Companies", "Cloud Security"].map((s, i) => (
              <span key={s}><a href="#" className="text-brand-600 hover:underline">{s}</a>{i < 3 && <span className="mx-1.5 text-slate-300">|</span>}</span>
            ))}
          </p>
        </div>
        <div className="relative mx-auto hidden w-full max-w-md lg:block">
          <div className="relative flex h-80 w-80 items-center justify-center rounded-full bg-gradient-to-br from-brand-100 via-brand-50 to-white shadow-inner">
            <img src={HERO_GLOBE} alt="Global cybersecurity network" className="h-56 w-56 rounded-full object-cover" />
            <div className="absolute -left-6 top-8 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl">
              <p className="text-xl font-extrabold text-slate-900">15,000+</p>
              <p className="text-xs text-slate-500">Cybersecurity Companies<br />Worldwide</p>
            </div>
            <div className="absolute -right-4 top-1/3 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl">
              <p className="text-xl font-extrabold text-slate-900">100+</p>
              <p className="text-xs text-slate-500">Countries Covered</p>
            </div>
            <div className="absolute bottom-6 left-10 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl">
              <p className="text-xl font-extrabold text-slate-900">50+</p>
              <p className="text-xs text-slate-500">Security Services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsStrip() {
  return (
    <section className="border-y border-slate-100 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 sm:px-6 lg:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">{s.icon}</span>
            <div>
              <p className="text-xl font-extrabold text-slate-900">{s.value}</p>
              <p className="text-sm font-medium text-slate-700">{s.label}</p>
              <p className="text-xs text-slate-500">{s.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TrustedBy() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 text-center sm:px-6">
        <h2 className="text-xl font-bold text-slate-900">Trusted by Leading Organizations</h2>
        <p className="mx-auto mt-1 max-w-2xl text-sm text-slate-500">Join IT leaders, enterprises and security teams who rely on CyberTech to find the right partners.</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-slate-400">
          {TRUSTED.map((t) => (
            <span key={t} className="text-lg font-bold tracking-tight transition hover:text-slate-600">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrowseByLocation() {
  const [tab, setTab] = useState(0);
  return (
    <section className="bg-slate-50/60">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">Browse Cybersecurity Companies by Location</h2>
            <p className="mt-1 text-sm text-slate-500">Explore top cybersecurity companies in major cities around the world.</p>
          </div>
          <a href="#" className="hidden items-center gap-1 text-sm font-semibold text-brand-600 hover:underline sm:inline-flex">View All Cities {I.arrow()}</a>
        </div>
        <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
          {TABS.map((t, i) => (
            <button
              key={t}
              onClick={() => setTab(i)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${i === tab ? "bg-brand-600 text-white shadow-sm" : "bg-white text-slate-600 ring-1 ring-slate-200 hover:ring-brand-500"}`}
            >{t}</button>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {CITIES.map((c) => (
            <a key={c.name} href="#" className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/60 transition hover:shadow-md">
              <img src={c.img} alt={c.name} className="h-28 w-full object-cover" />
              <div className="flex items-center justify-between p-3">
                <div>
                  <p className="text-sm font-bold text-slate-900">{c.name}</p>
                  <p className="text-xs text-slate-500">{c.count}</p>
                </div>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">{I.arrow("w-3.5 h-3.5")}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">Explore Cybersecurity Services</h2>
            <p className="mt-1 text-sm text-slate-500">Find specialized cybersecurity companies for your specific needs.</p>
          </div>
          <a href="#" className="hidden items-center gap-1 text-sm font-semibold text-brand-600 hover:underline sm:inline-flex">View All Services {I.arrow()}</a>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <a key={s.name} href="#" className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${s.tint}`}>{s.icon}</span>
              <div>
                <p className="text-sm font-bold text-slate-900">{s.name}</p>
                <p className="text-xs text-slate-500">{s.count}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedCompanies() {
  return (
    <section className="bg-slate-50/60">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">Featured Cybersecurity Companies</h2>
            <p className="mt-1 text-sm text-slate-500">Top-rated and trusted cybersecurity companies from around the world.</p>
          </div>
          <a href="#" className="hidden items-center gap-1 text-sm font-semibold text-brand-600 hover:underline sm:inline-flex">View All Companies {I.arrow()}</a>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED.map((f) => (
            <div key={f.name} className="relative flex flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:shadow-md">
              <span className="absolute right-4 top-4 rounded-md bg-brand-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">Featured</span>
              <div className="flex items-center gap-3">
                {f.badge}
                <div>
                  <p className="text-sm font-extrabold text-slate-900">{f.name}</p>
                  <p className="flex items-center gap-1 text-xs text-slate-500"><span className="text-slate-400">{I.pin("w-3.5 h-3.5")}</span>{f.loc}</p>
                </div>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{f.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {f.tags.map((t) => (
                  <span key={t} className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600">{t}</span>
                ))}
              </div>
              <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:underline">View Profile {I.arrow()}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ListCTA() {
  return (
    <section id="list-company" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid items-center gap-8 rounded-3xl bg-gradient-to-br from-brand-50 via-white to-brand-50/50 p-8 ring-1 ring-brand-100 lg:grid-cols-2 lg:p-12">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">List Your Cybersecurity Company</h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-600">Get discovered by businesses looking for trusted cybersecurity partners in your city and beyond.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="#" className="rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700">Get Started</a>
              <a href="#" className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-brand-700 ring-1 ring-brand-200 transition hover:ring-brand-500">View Plans</a>
            </div>
          </div>
          <div className="mx-auto w-full max-w-sm rounded-2xl border border-slate-100 bg-white p-5 shadow-xl">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-600">{I.shield()}</span>
                <div>
                  <p className="text-sm font-extrabold text-slate-900">Your Company</p>
                  <p className="text-xs text-slate-500">Your City, Your Country</p>
                </div>
              </div>
              <span className="rounded-md bg-brand-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">Featured</span>
            </div>
            <div className="mt-3 flex items-center gap-1 text-amber-400">
              {I.star()}{I.star()}{I.star()}{I.star()}<span className="text-slate-300">{I.star()}</span>
              <span className="ml-1 text-xs font-medium text-slate-500">4.0</span>
            </div>
            <div className="mt-3 space-y-2">
              <div className="h-2 rounded bg-slate-100" /><div className="h-2 w-4/5 rounded bg-slate-100" /><div className="h-2 w-3/5 rounded bg-slate-100" />
            </div>
            <div className="mt-4 flex items-center justify-between rounded-xl bg-brand-50 px-4 py-3">
              <span className="text-xs font-semibold text-brand-700">Get listed in front of 50k+ monthly buyers</span>
              <span className="text-brand-600">{I.arrow()}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6">
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">How CyberTech Works</h2>
        <p className="mt-1 text-sm text-slate-500">Find, compare and connect with the right cybersecurity companies in just a few steps.</p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-600">{s.icon}</span>
              <p className="mt-4 text-sm font-extrabold text-slate-900">{s.title}</p>
              <p className="mt-1 text-sm text-slate-500">{s.desc}</p>
              {i < 3 && <span className="absolute right-4 top-8 hidden text-slate-300 lg:block">{I.arrow("w-5 h-5")}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Insights() {
  return (
    <section className="bg-slate-50/60">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">Latest Cybersecurity Insights</h2>
            <p className="mt-1 text-sm text-slate-500">Expert insights, trends and guides to help you stay informed.</p>
          </div>
          <a href="#" className="hidden items-center gap-1 text-sm font-semibold text-brand-600 hover:underline sm:inline-flex">View All Articles {I.arrow()}</a>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
          {ARTICLES.map((a) => (
            <article key={a.title} className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:shadow-md">
              <img src={a.img} alt={a.title} className="h-44 w-full object-cover" />
              <div className="p-5">
                <p className="text-xs text-slate-400">{a.date}</p>
                <h3 className="mt-1 text-base font-extrabold leading-snug text-slate-900">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{a.desc}</p>
                <a href="#" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:underline">Read More {I.arrow()}</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-slate-200 bg-white">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left">
        <span className="text-sm font-semibold text-slate-800">{q}</span>
        <span className={`shrink-0 text-slate-400 transition-transform ${open ? "rotate-180" : ""}`}>{I.chevron()}</span>
      </button>
      {open && <p className="border-t border-slate-100 px-4 py-3 text-sm leading-relaxed text-slate-600">{a}</p>}
    </div>
  );
}

function FAQ() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">Frequently Asked Questions</h2>
            <p className="mt-1 text-sm text-slate-500">Find answers to common questions about CyberTech and our directory.</p>
          </div>
          <a href="#" className="hidden items-center gap-1 rounded-xl px-4 py-2 text-sm font-semibold text-brand-700 ring-1 ring-brand-200 transition hover:ring-brand-500 sm:inline-flex">View All FAQs {I.arrow()}</a>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="space-y-3">{FAQS_LEFT.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}</div>
          <div className="space-y-3">{FAQS_RIGHT.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}</div>
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="bg-navy-900">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:justify-between">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white">{I.mail()}</span>
          <div>
            <h2 className="text-xl font-extrabold text-white">Stay Updated with Cybersecurity Insights</h2>
            <p className="mt-1 max-w-xl text-sm text-slate-300">Get the latest cybersecurity news, company updates and industry trends delivered to your inbox.</p>
          </div>
        </div>
        <form className="w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
          <div className="flex overflow-hidden rounded-xl bg-white p-1.5">
            <input className="w-full bg-transparent px-3 text-sm outline-none placeholder:text-slate-400" placeholder="Enter your email address..." />
            <button className="shrink-0 rounded-lg bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700">Subscribe</button>
          </div>
          <p className="mt-2 text-center text-xs text-slate-400 lg:text-right">No spam. Unsubscribe anytime.</p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    { h: "Quick Links", links: ["Home", "Companies", "By Location", "Services", "Vendors", "Industries", "Resources", "Pricing"] },
    { h: "Popular Services", links: ["Managed Security Services", "Penetration Testing", "Vulnerability Assessment", "Cloud Security", "Network Security", "Incident Response", "Security Consulting", "MDR Providers"] },
    { h: "Popular Cities", links: ["New York", "Dallas", "Los Angeles", "Chicago", "London", "Toronto", "Sydney", "View All Cities"] },
    { h: "Resources", links: ["Blog", "Guides", "Case Studies", "FAQs", "About Us", "Contact Us", "Privacy Policy", "Terms of Service"] },
  ];
  return (
    <footer className="bg-navy-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-white">{I.shield("w-5 h-5")}</span>
              <span className="text-xl font-extrabold tracking-tight text-white">Cyber<span className="text-brand-500">Tech</span></span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-400">A global cybersecurity directory connecting businesses with trusted cybersecurity companies, service providers and technology vendors worldwide.</p>
            <div className="mt-4 flex gap-2">
              {["in", "x", "f", "yt"].map((s) => (
                <a key={s} href="#" aria-label={s} className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-slate-300 transition hover:bg-brand-600 hover:text-white">{s}</a>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <p className="text-sm font-bold text-white">{c.h}</p>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm text-slate-400 transition hover:text-white">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© 2026 CyberTech. All rights reserved.</p>
          <p>A global cybersecurity directory for a safer digital world.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsStrip />
      <TrustedBy />
      <BrowseByLocation />
      <Services />
      <FeaturedCompanies />
      <ListCTA />
      <HowItWorks />
      <Insights />
      <FAQ />
      <Newsletter />
      <Footer />
    </main>
  );
}
