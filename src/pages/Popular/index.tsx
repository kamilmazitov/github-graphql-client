import React from "react";
import RepoList from "../../components/RepoList";
import ButtonGroup from "../../components/ButtonGroup";

const Popular = () => {
  return (
    <div>
      <ButtonGroup>
        {/* <Button>js</Button>
        <Button>TS</Button>
        <Button>CSS</Button> */}
      </ButtonGroup>
      <RepoList />
    </div>
  );
};

export default Popular;
