import React, { useEffect, useState } from "react";
import Video from "./components/Video";
import Videolist from "./components/VideoList";
import "./App.css";
import Modal from "./components/Modal";
import { Flex, Segment } from "@fluentui/react-northstar";

function App() {
  const [videos, setVideos] = useState([
    {
      id: "1",
      name: "How to build a Todo app",
      createdBy: "John Doe",
      coverURL: "public/images/2020_MSFT_Icon_Celebration_placeholder.jpg",
      description:
        "This is a handone on how to build a component UI with FluentIU",
      videoURL:
        "http://fabricweb.azureedge.net/fabric-website/assets/videos/2020_MSFT_Icon_Celebration.mp4",
      createdAt: "12-03-2022 03:40 PM",
    },
  ]);
  const [activeVideo, setActiveVideo] = useState({});
  const [VideoName, setVideoName] = useState("");
  const [coverURL, setCoverURL] = useState("");
  const [videoURL, setVideoURL] = useState("");
  const [description, setDescription] = useState("");
  const [createdBy, setCreatedBy] = useState("");

  function changeActive(videoObj) {
    setActiveVideo(videoObj);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newVideo = {
      name: VideoName,
      coverURL: coverURL,
      videoUrl: videoURL,
      description: description,
      createdAt: Date.now(),
      createdBy: createdBy,
    };
    setVideos([...videos, newVideo]);
  }

  useEffect(() => {
    //Play the firt video by default
    setActiveVideo(videos[0]);
  }, [videos]);

  return (
    <Flex gap="gap.small">
      <Segment
        color="white"
        content={
          <>
            {videos.map((video) => (
              <Videolist
                video={video}
                key={video.id}
                changeActive ={changeActive}
              />
            ))}
          </>
        }
        inverted
      />
      <Segment
        color="white"
        content={
          <>
            <div className="video">
              <Video activeVideo={activeVideo} />
            </div>
            <Modal
              handleSubmit={handleSubmit}
              setActiveVideo={setActiveVideo}
              setVideoName={setVideoName}
              setCoverURL={setVideoURL}
              setVideoURL={setVideoURL}
              setCreatedBy={setCreatedBy}
              setDescription={setDescription}
            />
          </>
        }
        inverted
      />
    </Flex>
  );
}

export default App;
