import AboutIntro from "../../layouts/about/AboutIntro"
import CTA from "../../layouts/home/CallToAction"
import CoreValues from "../../layouts/about/CoreValues"
import JourneyTimeline from "../../layouts/about/JourneyTimeline"
import Vision from "../../layouts/about/Vision"

const AboutPage = () => {
  return (
    <div>
      <AboutIntro />
      <JourneyTimeline />
      <CoreValues />
      <Vision />
      <CTA />
    </div>)

}

export default AboutPage