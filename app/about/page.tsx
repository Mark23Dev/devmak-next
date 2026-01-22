import AboutIntro from "./components/AboutIntro";
import CTA from "../home/CallToAction";
import CoreValues from "./components/CoreValues";
import JourneyTimeline from "./components/JourneyTimeline";
import Vision from "./components/Vision";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <AboutIntro />
      <JourneyTimeline />
      <CoreValues />
      <Vision />
      <CTA />
    </div>
  );
}
