import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { TrustValue } from './components/sections/TrustValue'
import { OwnerServices } from './components/sections/OwnerServices'
import { GuestExperience } from './components/sections/GuestExperience'
import { RhodeIsland } from './components/sections/RhodeIsland'
import { ComplianceCare } from './components/sections/ComplianceCare'
import { Process } from './components/sections/Process'
import { FinalCTA } from './components/sections/FinalCTA'
import { BackToTop } from './components/ui/BackToTop'

export default function App() {
  return (
    <div id="top" className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustValue />
        <OwnerServices />
        <GuestExperience />
        <RhodeIsland />
        <ComplianceCare />
        <Process />
        <FinalCTA />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
