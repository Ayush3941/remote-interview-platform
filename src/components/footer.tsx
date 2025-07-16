"use client";

import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed: ${email}`);
    setEmail("");
  };

  return (
    <footer className="mx-auto max-w-7xl rounded-xl bg-card border mt-10 overflow-hidden">
      <div className="px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Remote Interview</h3>
          <p className="text-sm text-muted-foreground">
            Run seamless interviews, manage candidates, and stay efficient.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-sm font-medium mb-2">Links</h4>
          <ul className="space-y-1 text-sm">
            {["Home", "Schedule", "Interviews", "Support"].map(link => (
              <li key={link}>
                <a href="/" className="hover:underline text-muted-foreground">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-medium mb-2">Contact</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>Email: <a href="mailto:support@example.com" className="hover:underline">support@example.com</a></li>
            <li>Phone: <a href="tel:+1234567890" className="hover:underline">+1 (234) 567–890</a></li>
            <li>123 Tech Ave, Suite 400</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Newsletter</h4>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring ring-primary"
            />
            <button
              type="submit"
              className="rounded-md bg-primary px-4 py-2 text-xs text-primary-foreground hover:bg-primary/90"
            >
              Subscribe
            </button>
          </form>
          <div className="flex space-x-4 pt-2">
            <a href="#" className="text-muted-foreground hover:text-foreground text-xs">Twitter</a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-xs">LinkedIn</a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-xs">GitHub</a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t px-6 py-4 text-center text-xs text-muted-foreground bg-muted rounded-b-xl">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-2">
          <p>&copy; {new Date().getFullYear()} Remote Interview. All rights reserved.</p>
          <div className="flex gap-4">
            {["Privacy", "Terms", "Cookies"].map(term => (
              <a key={term} href="/" className="hover:underline">{term}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
