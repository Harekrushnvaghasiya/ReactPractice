import Button from "./components/buttons";
import Footer from "./components/footer";
import NavbarWrapper from "./components/navbarWrapper";
import CTA from "./components/cta";
import { SPACING_TYPE, TONE } from "./components/global/constants";

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
