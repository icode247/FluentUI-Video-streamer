import React from "react";
import { Video, Text, Flex } from "@fluentui/react-northstar";

function VideoComp(props) {
  const {activeVideo} = props;
  return (
    <Flex column>
      <Video
        poster={activeVideo?.coverURL}
        src={activeVideo?.videoURL}
        variables={{
          height: "300px",
          width: "720px",
        }}
      />
      <Text color="brand">{activeVideo?.name}</Text>
      <Text color="brand">{activeVideo?.description}</Text>
    </Flex>
  );
}

export default VideoComp;
