import CTA from "./components/cta";
import {
  HERO_SIZE,
  SPACING_TYPE,
} from "./components/global/constants";
import Hero from "./components/heroSection";
import HomeHero from "./assets/images/HomeHero.avif";
import VisionLeft from "./assets/images/our-vision-left.avif";
import VisionRight from "./assets/images/our-vision-right.avif";
import Service from "./components/serviceSection";
import { logos, services } from "./helpers/raw";
import LogoSection from "./components/logoSection";
import OurVisionSection from "./components/visionSection";

function App() {
  return (
    <>
      <Hero
        title="Elevate your Mental, Physical and Emotional well-being"
        description="Explore science-backed therapies designed to enhance recovery, reduce stress, and rejuvenate your entire being."
        primaryButtonText="Pause Now"
        primaryButtonLink="/"
        maxTitleWidth={863}
        size={HERO_SIZE.LARGE}
        heroImage={HomeHero}
      />

      <Service
        tag="Our Services"
        title="Science-Backed Recovery"
        services={services}
      />

      <LogoSection logos={logos} />

      <OurVisionSection
        leftImage={VisionLeft}
        rightImage={VisionRight}
        tag="OUR VISION"
        title="The Solution to Modern Living"
        description="Stress, anxiety, lack of quality sleep, inefficient recovery and compromised immunity are universal problems.  Combining the most advanced recovery modalities with inspired design and experiential service, Pause is redefining one-stop-wellness for today’s demanding lifestyle."
        primaryButtonLink="/"
        primaryButtonText="Find Your Location"
      />

      <CTA
        tag="FIND YOUR LOCATION"
        title="Find a Pause Near You"
        Content="Pause is redefining one-stop-wellness for today’s demanding lifestyle."
        variant={SPACING_TYPE.TOP}
        isBgImage={true}
      />
    </>
  );
}

export default App;
