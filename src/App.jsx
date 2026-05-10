import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { WhoWeAre } from './components/sections/WhoWeAre'
import { TrustValue } from './components/sections/TrustValue'
import { OwnerServices } from './components/sections/OwnerServices'
import { Process } from './components/sections/Process'
import { RhodeIsland } from './components/sections/RhodeIsland'
import { GuestExperience } from './components/sections/GuestExperience'
import { ComplianceCare } from './components/sections/ComplianceCare'
import { FinalCTA } from './components/sections/FinalCTA'

export default function App() {
  return (
    <div id="top" className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <WhoWeAre />
        <TrustValue />
        <OwnerServices />
        <Process />
        <RhodeIsland />
        <GuestExperience />
        <ComplianceCare />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
