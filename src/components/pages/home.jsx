import React, { useState, useEffect } from "react";
import Hero from "@/components/utils/hero";
import DockBar from "@/components/utils/dockBar";
const Home = () => {
  return (
    <div className="min-h-screen w-screen overflow-x-hidden flex flex-col items-center justify-center">
      {/* Cover Page */}
        <Hero/>
      {/* Main */}
      <main>
        
      </main>
        <DockBar/>
      {/* Footer */}
      <footer>
        
      </footer>
    </div>
  )
}

export default Home