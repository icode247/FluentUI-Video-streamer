import React from "react";
import { List } from "@fluentui/react-northstar";

function VideoList(props) {
  const { video, changeActive } = props;
  return (
    <List
      navigable
      styles={({ theme: { siteVariables } }) => ({
        backgroundColor: siteVariables.colorScheme.default.background4,
        color: "black",
      })}
    >
      <List.Item
        header={video.createdBy}
        headerMedia={video.createdAt}
        content={video.name}
        navigable
        index={0}
        onClick={() => changeActive(video)}
      />
    </List>
  );
}

export default VideoList;
