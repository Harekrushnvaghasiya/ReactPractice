import CTA from "./components/cta";
import {
  HERO_SIZE,
  HERO_VARIANT,
  SPACING_TYPE,
  TONE,
} from "./components/global/constants";
import Hero from "./components/heroSection";
import { Images } from "./assets/images";
import Service from "./components/serviceSection";
import { logos, services } from "./helpers/raw";
import LogoSection from "./components/logoSection";
import OurVision from "./components/visionSection";
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
        heroImage={Images.HomeHero}
      />

      <Service
        tag="Our Services"
        title="Science-Backed Recovery"
        services={services}
      />

      <LogoSection logos={logos} />

      <OurVisionSection
        leftImage={Images.VisionLeft}
        rightImage={Images.VisionRight}
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
