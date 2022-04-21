import React from "react";
import Video from "./components/Video";
import Videolist from "./components/VideoList";
import "./App.css";
import Modal from "./components/Modal";
import { Flex, Segment } from "@fluentui/react-northstar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      videos: [
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

      ],
      activeVideo: {},
      VideoName: "",
      coverURL: "",
      videoURL: "",
      description: "",
      createdBy: ""
    };
    this.changeActive = this.changeActive.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  changeActive(videoObj) {
    this.setState({ activeVideo: videoObj });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const newVideo = {
      name: this.state.VideoName,
      coverURL: this.state.coverURL,
      videoUrl: this.state.videoURL,
      description: this.state.description,
      createdAt: Date.now(),
      createdBy: this.state.createdBy
    }
    this.setState({ videos: [...this.state.videos, newVideo] });
  }
  componentDidMount() {
    //Play the firt video by default
    this.setState({
      activeVideo: this.state.videos[0],
    });
  }
  render() {
    return (
      <Flex gap="gap.small">
        <Segment
          color="white"
          content={
            <>
              {this.state.videos.map((video) => (
                <Videolist
                  video={video}
                  key={video.id}
                  changeActive={this.changeActive}
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
                <Video activeVideo={this.state.activeVideo} />
              </div>
              <Modal
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
              />
            </>
          }
          inverted
        />
      </Flex>
    );
  }
}

export default App;
