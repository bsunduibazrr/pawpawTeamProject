"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { PawPrint, Plus, Search } from "lucide-react";
import Link from "next/link";
export default function Navbar() {
  const [active, setActive] = useState("Home");
  const navItems = ["Home", "Matches", "My Posts"];
  return (
    <nav className="fixed top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/20 bg-white/70 px-6 py-3 backdrop-blur-xl shadow-lg">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-green-500 text-white shadow-md">
              <img src={"logo.png"} className="w-15 rounded-full h-15" />
            </div>
            <span className="text-lg font-bold tracking-tight">
              PAW<span className="text-green-500">PAW</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className="relative text-sm font-medium text-gray-700"
              >
                {item}
                {active === item && (
                  <motion.span
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-green-500"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200">
              <Search size={18} />
            </button>
            <Link
              href="/create"
              className="flex items-center gap-2 rounded-xl bg-green-500 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-green-600"
            >
              <Plus size={16} />
              Create Post
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
