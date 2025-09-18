import React from "react";

export default function Footer() {
  return (
    <footer className="px-6 py-8 text-center text-gray-400 border-t border-white/10">
      <p>© {new Date().getFullYear()} NEXORA. All rights reserved.</p>
    </footer>
  );
}
