"use client";
import AboutUs from "@/components/AboutUs/AboutUs";
import PageHeader from "@/components/PageHeader/PageHeader";
import ProduseServicii from "@/components/ProduseServicii/ProduseServicii";
import React from "react";

export default function Home() {
  return (
    <main className="w-auto h-max">
      <PageHeader />
      {/* Produse & Servicii */}
      <div className="p-4">
      <ProduseServicii />
      <AboutUs />
      </div>
    </main>
  );
}
