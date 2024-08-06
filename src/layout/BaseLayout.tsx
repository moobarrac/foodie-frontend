import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import React from "react";

type PropTypes = {
  children: React.ReactNode;
};

const BaseLayout = ({ children }: PropTypes) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <div className="container mx-auto flex-1 py-10 ">{children}</div>
      <Footer />
    </div>
  );
};

export default BaseLayout;
