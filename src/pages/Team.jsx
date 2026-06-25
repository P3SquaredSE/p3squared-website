import React from "react";
import Layout from "../components/Layout"; 

export default function Team() {
  
  return (
    
    <Layout>

      {/*Header */}
      <section className="relative">
        <div className="container mx-auto px-6 py-16 md:py-24 text-center">

          <h1 className="mt-1 text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Meet The Team
          </h1>
     
         </div>
      </section>
      
      <section> 
        <div className="mx-auto w-full max-w-4xl rounded-3xl border border-white/10 bg-white/5 shadow-xl p-8">
    
    <div className=" flex items-center gap-8">

        {/* Photo Placeholder */}
        <div className="w-48 h-64 rounded-2xl bg-gray-500/40 border border-white/20 flex items-center justify-center flex-shrink-0">
            <span className="text-white/50 text-sm">
                Photos will go here
              
            </span>
        </div>

        {/* Information */}
        <div className="flex-1">
            <h2 className="text-4xl font-bold text-white">
                Jeanette Shown
            </h2>

            <p className="mt-4 text-white/80">
                CEO
            </p>

            <p className="mt-6 text-white/80 leading-relaxed">
                Biography goes here...
            </p>
        </div>

    </div>
</div>
      </section>
    </Layout>
  );
}