"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CoreSpecialties from "@/components/CoreSpecialties";
import WhoWeServeLocations from "@/components/WhoWeServeLocations";
import PakistanPortfolio from "@/components/PakistanPortfolio";
import SocialMediaFeed from "@/components/SocialMediaFeed";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import Footer from "@/components/Footer";
import BrochureModal from "@/components/BrochureModal";
import CRMPipelineDashboard from "@/components/CRMPipelineDashboard";

export default function HomePage() {
  const [activeModule, setActiveModule] = useState<"public" | "crm">("public");

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar activeModule={activeModule} setActiveModule={setActiveModule} />

      {activeModule === "public" ? (
        <main className="flex-1 w-full overflow-x-hidden">
          {/* 1. Who We Are: Hero, Bio, Founders, Direct Call/WhatsApp Desk */}
          <HeroSection />

          {/* 2. What We Do: The 3 Core Pillars (MGH, DHA Files, Investment Advisory) */}
          <CoreSpecialties />

          {/* 3. Who We Serve & Areas We Cover: Punjab, Islamabad, Karachi, Mirpur */}
          <WhoWeServeLocations />

          {/* 4. Past Experience & Portfolio: MGH Mangla & DHA Lahore Phases 6, 8, 9, 10 */}
          <PakistanPortfolio />

          {/* 5. Official Social Media Channels: Live updates from TikTok, Instagram, Facebook, LinkedIn */}
          <SocialMediaFeed />

          {/* 6. Contact Information & Quick Inquiry Form */}
          <LeadCaptureForm
            onSwitchToCRM={() => {
              setActiveModule("crm");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        </main>
      ) : (
        <main className="flex-1 w-full overflow-x-hidden">
          <CRMPipelineDashboard
            onSwitchToPublic={() => {
              setActiveModule("public");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        </main>
      )}

      <Footer
        onSwitchToCRM={() => {
          setActiveModule("crm");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />

      <BrochureModal />
    </div>
  );
}
