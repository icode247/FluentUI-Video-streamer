import {
  FormInput,
  CardBody,
  Dialog,
  Form,
  Card,
  FormButton,
} from "@fluentui/react-northstar";
import React, { useState } from "react";
import "../App.css";

function Modal(props) {
  const [_, setShowModal] = useState(false);
  const {
    handleSubmit,
    setVideoName,
    setCoverURL,
    setVideoURL,
    setCreatedBy,
    setDescription,
  } = props;

  function handleOpenModal() {
    setShowModal(true);
  }

  return (
    <Dialog
      content={
        <Card>
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <FormInput
                label="Video Name"
                name="VideoName"
                required
                showSuccessIndicator={false}
                onClick={(e) => setVideoName(e.target.value)}
              />
              <FormInput
                label="Cover URL"
                name="coverURL"
                required
                showSuccessIndicator={false}
                onChange={(e) => setCoverURL(e.target.value)}
              />
              <FormInput
                label="Created By"
                name="createdBy"
                required
                showSuccessIndicator={false}
                onChange={(e) => setCreatedBy(e.target.value)}
              />
              <FormInput
                label="Video URL"
                name="videoURL"
                required
                showSuccessIndicator={false}
                onChange={(e) => setVideoURL(e.target.value)}
              />
              <FormInput
                label="Description"
                name="description"
                required
                showSuccessIndicator={false}
                onChange={(e) => setDescription(e.target.value)}
              />

              <FormButton content="Submit" />
            </Form>
          </CardBody>
        </Card>
      }
      header="Add new video URL"
      trigger={
        <span className="open" onClick={handleOpenModal}>
          +
        </span>
      }
    />
  );
}
export default Modal;
