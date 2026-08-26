import CTA from "./components/cta";
import {
  HERO_SIZE,
  SPACING_TYPE,
} from "./components/global/constants";
import Hero from "./components/heroSection";
import Service from "./components/serviceSection";
import { ctaContent, heroContent, logos, ourVisionContent ,serviceContent} from "./helpers/raw";
import LogoSection from "./components/logoSection";
import OurVisionSection from "./components/visionSection";

function App() {
  return (
    <>
      <Hero
        title={heroContent.title}
        description={heroContent.description}
        primaryButtonText={heroContent.primaryButtonText}
        primaryButtonLink={heroContent.primaryButtonLink}
        maxTitleWidth={heroContent.maxTitleWidth}
        heroImage={heroContent.heroImage}
        size={HERO_SIZE.LARGE}
      />

      <Service
        tag={serviceContent.tag}
        title={serviceContent.title}
        services={serviceContent.services}
      />

      <LogoSection logos={logos} />

      <OurVisionSection
        leftImage={ourVisionContent.leftImage}
        rightImage={ourVisionContent.rightImage}
        tag={ourVisionContent.tag}
        title={ourVisionContent.title}
        description={ourVisionContent.description}
        primaryButtonLink={ourVisionContent.primaryButtonLink}
        primaryButtonText={ourVisionContent.primaryButtonText}
      />

      <CTA
        tag={ctaContent.tag}
        title={ctaContent.title}
        Content= {ctaContent.Content}
        variant={SPACING_TYPE.TOP}
        isBgImage={true}
      />
    </>
  );
}

export default App;
