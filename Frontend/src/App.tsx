import Button from "./components/buttons";
import Footer from "./components/footer";
import NavbarWrapper from "./components/navbarWrapper";
import CTA from "./components/cta";
import { HERO_SIZE, HERO_VARIANT, SPACING_TYPE, TONE } from "./components/global/constants";
import Hero from "./components/heroSection";
import { Images } from "./assets/images";
import Service from "./components/serviceSection";

function App() {
  return (
    <>
      <NavbarWrapper />
      {/* <Button title="Button" size="small" />
      <hr />
      <Button title="Button" isShowIcon />
      <hr />
      <Button title="Button" />
      <hr />
      <Button title="Button" variant="secondary" size="small" />
      <hr />
      <Button title="Button" variant="secondary" isShowIcon />
      <hr />
      <Button title="Button" variant="secondary" />
      <hr />
      <Button title="Button" variant="tertiary" />
      <hr />
      <Button title="Button" variant="tertiary" size="small" isShowIcon />
      <hr />
      <Button title="Button" variant="tertiary" size="small" />
      <hr />
      <Button title="Button" variant="disable" />
      <hr />
      <Button title="Button" variant="disable" size="small" isShowIcon />
      <hr />
      <Button title="Button" variant="disable" size="small" /> */}
      <Hero
        title="Elevate your Mental, Physical and Emotional well-being"
        description="Explore science-backed therapies designed to enhance recovery, reduce stress, and rejuvenate your entire being."
        primaryButtonText="Pause Now"
        primaryButtonLink="/"
        maxTitleWidth={863}
        size={HERO_SIZE.LARGE}
        heroImage={Images.HomeHero}
      />
      <Hero
        tag="All Blogs"
        title="Elevate your Mental, Physical and Emotional well-being"
        description="Explore science-backed therapies designed to enhance recovery, reduce stress, and rejuvenate your entire being."
        variant={HERO_VARIANT.CENTER}
        size={HERO_SIZE.SMALL}
        heroImage={Images.Hero3}
      />
      <Hero
        tag="Contrast Therapy"
        title="Elevate your Mental, Physical and Emotional well-being"
        description="Explore science-backed therapies designed to enhance recovery, reduce stress, and rejuvenate your entire being."
        primaryButtonText="Pause Now"
        primaryButtonLink="/"
        variant={HERO_VARIANT.RIGHT}
        size={HERO_SIZE.MEDIUM}
        heroImage={Images.Hero4}
      />
      <Hero
        tag="FAQ"
        title="Answers to Your Most Common Questions"
        description="Check out our most frequently asked questions below."
        maxTitleWidth={724}
        size={HERO_SIZE.SMALL}
        heroImage={Images.Hero2}
      />
      <Service
        tag="Our Services"
        title="Science-Backed Recovery"
        services={[
          {
            number: "01",
            title: "Contrast Therapy",
            description:
              "Maximize recovery with alternating hot and cold therapies to reduce inflammation and stimulate circulation.",
            cardImage: Images.ContrasTherapy,
          },
          {
            number: "02",
            title: "Infrared Sauna",
            description:
              "Detoxify, reduce muscle tension, and promote relaxation with deep-penetrating infrared heat.",
            cardImage: Images.infrared,
          },
          {
            number: "03",
            title: "Float",
            description:
              "Experience total weightlessness in a sensory deprivation tank filled with warm Epsom salt water. Float therapy relaxes the body and quiets the mind to restore true balance.",
            cardImage: Images.float,
          },
          {
            number: "04",
            title: "LED Light Therapy",
            description:
              "Our full-body LED Light Therapy supports cellular repair, boosts ATP production, reduces inflammation, and promotes collagen for radiant, youthful skin.",
            cardImage: Images.LEDTherapy,
          },
          {
            number: "05",
            title: "NAD+",
            description:
              "Supercharge your cells, repair DNA, slow aging, and reduce inflammation. This advanced treatment boosts cognition, energy, and focus. Our NAD+ IV drips and vitamin shots deliver maximum bioavailability for fast, effective results.",
            cardImage: Images.NDA,
          },
          {
            number: "06",
            title: "IV Drips ",
            description:
              "The ultimate fast-track to feeling your best. Our IV drips and vitamin shots deliver essential vitamins, minerals, and nutrients directly into your bloodstream for immediate absorption with tailored formulas designed to support your unique wellness goals.",
            cardImage: Images.IVDrips,
          },
          {
            number: "07",
            title: "Cryotherapy",
            description:
              "Accelerate recovery and optimize peak performance with whole-body cryotherapy. Exposure to ultra-cold temperatures decreases inflammation and promotes physical resilience.",
            cardImage: Images.Cryotherapy,
          },
          {
            number: "08",
            title: "Compression Therapy",
            description:
              "Trusted by elite athletes and proven to enhance performance, Normatec Compression Therapy promotes lymphatic drainage, boosts circulation, and speeds recovery.",
            cardImage: Images.compression,
          },
        ]}
      />
      <CTA
        tag="FIND YOUR LOCATION"
        title="Find a Pause Near You"
        Content="Pause is redefining one-stop-wellness for today’s demanding lifestyle."
        variant={SPACING_TYPE.CENTER}
      />

      <CTA
        tag="FIND YOUR LOCATION"
        title="Find a Pause Near You"
        Content="Pause is redefining one-stop-wellness for today’s demanding lifestyle."
        variant={SPACING_TYPE.TOP}
        isBgImage={true}
        tone={TONE.WHITE}
      />
      <CTA
        tag="FIND YOUR LOCATION"
        title="Find a Pause Near You"
        Content="Pause is redefining one-stop-wellness for today’s demanding lifestyle."
        isBgImage={true}
      />
      <CTA
        tag="FIND YOUR LOCATION"
        title="Find a Pause Near You"
        Content="Pause is redefining one-stop-wellness for today’s demanding lifestyle."
        variant={SPACING_TYPE.BOTTOM}
        tone={TONE.WHITE}
      />
      <Footer />
    </>
  );
}

export default App;
