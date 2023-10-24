import React from "react";
import Image from "next/image";

const Footer = () => {
  const date = new Date()
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 pt-8 flex justify-center gap-12">
      <Image alt="logo" src="/images/logo.jpg" width={50} height={50}  className="rounded-full"/>
      <div className="pt-4">
        <p className="text-slate-600"> Copyright © {date.getFullYear()}  All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
