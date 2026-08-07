import Button from "./components/buttons";


function App() {

  return (
    <>
      <hr />
      <Button title="Button" size="small" />
      <hr />
      <Button title="Button" isShowIcon />
      <hr />
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
      <Button title="Button" variant="disable" size="small" />
    </>
  );
}

export default App
