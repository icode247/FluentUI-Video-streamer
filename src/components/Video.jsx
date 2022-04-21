import React from "react";
import { Video, Text, Flex } from "@fluentui/react-northstar";

class VideoComp extends React.Component {
  render() {
    return (
      <Flex column>
        <Video
          poster={this.props.activeVideo?.coverURL}
          src={this.props.activeVideo?.videoURL}
          variables={{
            height: "300px",
            width: "720px",
          }}
        />
        <Text color="brand">{this.props.activeVideo?.name}</Text>
        <Text color="brand">{this.props.activeVideo?.description}</Text>
      </Flex>
    );
  }
}

export default VideoComp;
