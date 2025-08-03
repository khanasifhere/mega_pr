import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Blogify</h4>
            <p className="text-sm text-gray-500 mb-2">Simple blogging experience with power.</p>
            <p className="text-sm text-gray-400">&copy; 2025 Khan. All rights reserved.</p>
          </div>

          {/* Company Links */}
          <div>
            <h5 className="text-sm font-semibold uppercase text-gray-500 mb-3">Company</h5>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-600">Features</Link></li>
              <li><Link to="/" className="hover:text-blue-600">Pricing</Link></li>
              <li><Link to="/" className="hover:text-blue-600">Affiliate</Link></li>
              <li><Link to="/" className="hover:text-blue-600">Press Kit</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h5 className="text-sm font-semibold uppercase text-gray-500 mb-3">Support</h5>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-600">Account</Link></li>
              <li><Link to="/" className="hover:text-blue-600">Help</Link></li>
              <li><Link to="/" className="hover:text-blue-600">Contact Us</Link></li>
              <li><Link to="/" className="hover:text-blue-600">Customer Support</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h5 className="text-sm font-semibold uppercase text-gray-500 mb-3">Legal</h5>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-600">Terms & Conditions</Link></li>
              <li><Link to="/" className="hover:text-blue-600">Privacy Policy</Link></li>
              <li><Link to="/" className="hover:text-blue-600">Licensing</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
