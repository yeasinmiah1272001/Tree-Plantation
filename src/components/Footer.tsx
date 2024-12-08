import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-800">
      {/* Newsletter Section */}
      <div className="py-8 text-center mb-4">
        <div className="text-green-700 flex justify-center mb-4 text-4xl">
          <FaEnvelope />
        </div>
        <h2 className="text-2xl font-bold mb-2">Subscribe Our Newsletter</h2>
        <p className="text-sm text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          commodo ligula eget.
        </p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Your Email Address..."
            className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="bg-green-600 text-white px-6 py-2 rounded-r-md hover:bg-green-700">
            SUBSCRIBE
          </button>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-8 px-6 md:px-12 bg-gray-200">
        {/* Our Address */}
        <div className="">
          <h3 className="font-bold mb-4">OUR ADDRESS</h3>
          <p className="flex items-center text-sm mb-2">
            <FaEnvelope className="text-green-600 mr-2" /> demo@demo.com
          </p>
          <p className="flex items-center text-sm mb-2">
            <FaMapMarkerAlt className="text-green-600 mr-2" /> 1093 Marigold
            Lane, Coral Way, Miami, Florida, 33169
          </p>
          <p className="flex items-center text-sm">
            <FaPhoneAlt className="text-green-600 mr-2" /> Call us :
            0123-456-789
          </p>
        </div>

        {/* Account */}
        <div className="border-l border-gray-300 pl-6">
          <h3 className="font-bold mb-4">ACCOUNT</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Orders</li>
            <li>Checkout</li>
            <li>Downloads</li>
            <li>My Account</li>
            <li>Account Details</li>
          </ul>
        </div>

        {/* Information */}
        <div className="border-l border-gray-300 pl-6">
          <h3 className="font-bold mb-4">INFORMATION</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>FAQ's</li>
            <li>Delivery Information</li>
            <li>Contact Us</li>
            <li>Wishlist</li>
            <li>Compare</li>
          </ul>
        </div>

        {/* Category */}
        <div className="border-l border-gray-300 pl-6">
          <h3 className="font-bold mb-4">CATEGORY</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Fiddle-Leaf Fig</li>
            <li>Eucalyptus</li>
            <li>Cactus</li>
            <li className="text-green-600">Aeonium</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
