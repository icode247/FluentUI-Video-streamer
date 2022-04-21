import React from "react";
import { List } from "@fluentui/react-northstar";

class VideoList extends React.Component {
  render() {
    return (
      <List
        navigable
        styles={({ theme: { siteVariables } }) => ({
          backgroundColor: siteVariables.colorScheme.default.background4,color:"black"
        })}
      >
        <List.Item
          header={this.props.video.createdBy}
          headerMedia={this.props.video.createdAt}
          content={this.props.video.name}
          navigable
          index={0}
        />
      </List>
    );
  }
}

export default VideoList;
