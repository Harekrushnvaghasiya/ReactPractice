import Button from "./components/buttons";
import Footer from "./components/footer";
import NavbarWrapper from "./components/navbarWrapper";
import CTA from "./components/cta";
import { HERO_SIZE, HERO_VARIANT, SPACING_TYPE, TONE } from "./components/global/constants";
import Hero from "./components/heroSection";
import { Images } from "./assets/images";

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
