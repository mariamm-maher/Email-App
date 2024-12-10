import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" text-gray-200 py-12 px-6 md:px-16 lg:px-32">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-semibold text-neonMintGreen mb-4">
            About Us
          </h3>
          <p className="text-sm leading-relaxed">
            We connect homeowners with service providers for all their needs,
            offering top-notch quality and reliable support.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold text-neonMintGreen mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/services"
                className="hover:text-neonMintGreen transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-neonMintGreen transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-neonMintGreen transition-colors"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/faq"
                className="hover:text-neonMintGreen transition-colors"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-neonMintGreen mb-4">
            Contact Us
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Email: support@homeservices.com</li>
            <li>Phone: +123 456 7890</li>
            <li>Address: 123 Service Lane, City, Country</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-neonMintGreen mb-4">
            Stay Updated
          </h3>
          <p className="text-sm mb-4">
            Subscribe to our newsletter for the latest updates and offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 p-3 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neonMintGreen"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-neonMintGreen text-darkNavyBlue rounded-lg hover:bg-opacity-90 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-12 border-t border-gray-700"></div>

      {/* Social Media & Copyright */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-sm">
        {/* Social Links */}
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-neonMintGreen transition-colors"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-neonMintGreen transition-colors"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-neonMintGreen transition-colors"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-neonMintGreen transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-4 md:mt-0">
          © {new Date().getFullYear()} Home Services. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
