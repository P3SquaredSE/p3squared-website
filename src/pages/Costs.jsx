import React, { useState } from "react";

import Layout from "../components/Layout";
import LaborCalculator from "../components/LaborCalculator";
import SupplyOverview from "../components/SupplyOverview";

export default function Costs() {

  return (
    
    <Layout>

      {({ onContactClick}) => (

        <>

          {/* Hero section */}
          <section>
            <div className="container mx-auto px-6 py-16 md:py-24 text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
                Cost Analysis
              </p>

              <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                Healthcare Operations
                <br className="hidden md:block" />
                  Impact Simulator
              </h1>

              <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-white/75 leading-relaxed">
                Estimate operational inefficiencies, labor waste, and
                hidden supply chain costs affecting rural
                healthcare facilities.
              </p>
            </div>
          </section>

          {/* Supply Overview */}
          <section className="container mx-auto px-4 md:px-6 max-w=7xl">
            <SupplyOverview />
          </section>

          {/* Labor Calculator */}
          <section className="relative container mx-auto max-w-7xl px-4 md:px-6 pb-24"
            aria-label="Calculator section"
          >
            <LaborCalculator 
            onContactClick={openContact}
            />
          </section>

        </>
      )}

    </Layout>
  );
}