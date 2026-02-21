import Image from "next/image";
import Link from "next/link";
import React from "react";

const menuItems = [
  {
    title: "Shop",
    links: [
      { text: "All Products", url: "/shop" },
      { text: "Categories", url: "/categories" },
      { text: "Best Sellers", url: "/best-sellers" },
      { text: "New Arrivals", url: "/new" },
      { text: "Deals", url: "/deals" },
    ],
  },
  {
    title: "Customer Service",
    links: [
      { text: "Help Center", url: "/help" },
      { text: "Contact Us", url: "/contact" },
      { text: "Shipping Info", url: "/shipping" },
      { text: "Returns", url: "/returns" },
      { text: "Order Tracking", url: "/orders" },
    ],
  },
  {
    title: "About",
    links: [
      { text: "About Us", url: "/about" },
      { text: "Careers", url: "/careers" },
      { text: "Blog", url: "/blog" },
      { text: "Press", url: "/press" },
    ],
  },
  {
    title: "Legal",
    links: [
      { text: "Privacy Policy", url: "/privacy" },
      { text: "Terms of Service", url: "/terms" },
      { text: "Cookies", url: "/cookies" },
    ],
  },
  {
    title: "Social",
    links: [
      { text: "Instagram", url: "#" },
      { text: "Facebook", url: "#" },
      { text: "Twitter", url: "#" },
      { text: "YouTube", url: "#" },
    ],
  },
];

const bottomLinks = [
  { text: "Terms", url: "/terms" },
  { text: "Privacy", url: "/privacy" },
  { text: "Cookies", url: "/cookies" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-800 border-2 border-gray-700 rounded-2xl py-16 mt-16">
      <div className="container px-6 mx-4">
        {/* --- Branding & About --- */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10">
          {/* Logo + About */}
          <div className="max-w-sm flex flex-col items-center justify-center text-center lg:items-start lg:justify-start lg:text-left">
            <Image
              src="/logo.png"
              alt="Zyrah logo"
              title="Zyrah"
              width={48}
              height={48}
              className="h-auto w-12 mx-auto lg:mx-0 mb-4"
            />
            <div className="lg:col-span-2">
              <h3 className="mb-3 text-sm font-semibold text-gray-100">About Zyrah</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Zyrah is your trusted destination for quality products and seamless shopping experiences. Discover the latest trends, top brands, and unbeatable deals—all in one place.
              </p>
            </div>
          </div>

          {/* --- Menu Links (multi-column) --- */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 flex-1">
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-3 text-sm font-semibold text-gray-100">
                  {section.title}
                </h3>
                <ul className="space-y-2 text-sm text-gray-200">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="text-gray-200 hover:text-primary hover:underline underline-offset-4 transition-colors hover:drop-shadow-[0_1px_6px_rgba(255,255,255,0.35)]"
                    >
                      <Link href={link.url}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="border-t-2 border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-200 gap-4">
          <p> 2025 Zyrah. All rights reserved.</p>
          <ul className="flex flex-wrap gap-4">
            {bottomLinks.map((link, linkIdx) => (
              <li
                key={linkIdx}
                className="text-gray-200 hover:text-primary hover:underline underline-offset-4 transition-colors hover:drop-shadow-[0_1px_6px_rgba(255,255,255,0.35)]"
              >
                <Link href={link.url}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;