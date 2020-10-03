import React, { useState } from "react";
import RepoList from "../../components/RepoList";
import ButtonGroup from "../../components/ButtonGroup";
import Button from "../../components/Button";
import Heading from "../../components/Heading";

const Popular = () => {
  const [language, setLanguage] = useState("javascript");

  return (
    <div>
      <Heading size={"1.2rem"} marginBottom={15}>
        popular repositories
      </Heading>
      <ButtonGroup>
        <Button onClick={() => setLanguage("javascript")}>JS</Button>
        <Button onClick={() => setLanguage("typescript")}>TS</Button>
        <Button onClick={() => setLanguage("css")}>CSS</Button>
      </ButtonGroup>
      <RepoList language={language} />
    </div>
  );
};

export default Popular;
