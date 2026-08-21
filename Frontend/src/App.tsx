import CTA from "./components/cta";
import { HERO_SIZE, HERO_VARIANT, SPACING_TYPE, TONE } from "./components/global/constants";
import Hero from "./components/heroSection";
import { Images } from "./assets/images";
import Service from "./components/serviceSection";
import { logos, services } from "./components/helpers/raw";
import LogoSection from "./components/logoSection";

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

      <LogoSection logos={logos}/>

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
