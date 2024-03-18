import React from "react";

const Footer = () => {
  return (
    <footer className="bg-stone-100 font-[poppins] text-black p-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; 2023 Your Survey App. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="hover:underline">
            Terms of Service
          </a>
          <a href="/contact-us" className="hover:underline">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
