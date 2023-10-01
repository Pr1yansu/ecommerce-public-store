import React from "react";

const Footer = () => {
  return (
    <div className="bg-white border-t">
      <div className="mx-auto py-10">
        <p className="text-zinc-500 text-center">
          &copy; 2021 Ecommerce Store. All rights reserved to{" "}
          <a
            href=""
            className="text-violet-600 font-bold text-2xl underline cursive"
          >
            Priyansu Chowdhury
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
