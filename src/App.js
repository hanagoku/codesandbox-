import React from "react";
const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue"
  };
  return (
    <>
      <h1 style={{ color: "red" }}> こんにちは！ </h1>
      <p style={contentStyle}>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
//ほかのファイルでも関数が使用できるように明示的に示す必要がある
export default App;
