import {
  FormInput,
  CardBody,
  Dialog,
  Form,
  Card,
  FormButton,
} from "@fluentui/react-northstar";
import React from "react";
import "../App.css";

class Modal extends React.Component {
  constructor() {
    super();
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }
  // eslint-disable-next-line react/require-render-return
  render() {
    console.log(this.props)
    return (
      <Dialog
        content={
          <Card>
            <CardBody>
              <Form onSubmit={this.props.handleSubmit}>
                <FormInput
                  label="Video Name"
                  name="VideoName"
                  required
                  showSuccessIndicator={false}
                  onClick={this.props.handleChange}
                />
                <FormInput
                  label="Cover URL"
                  name="coverURL"
                  required
                  showSuccessIndicator={false}
                  onChange={this.props.handleChange}
                />
                <FormInput
                  label="Created By"
                  name="createdBy"
                  required
                  showSuccessIndicator={false}
                  onChange={this.props.handleChange}
                />
                <FormInput
                  label="Video URL"
                  name="videoURL"
                  required
                  showSuccessIndicator={false}
                  onChange={this.props.handleChange}
                />
                <FormInput
                  label="Description"
                  name="description"
                  required
                  showSuccessIndicator={false}
                  onChange={this.props.handleChange}
                />

                <FormButton content="Submit" />
              </Form>
            </CardBody>
          </Card>
        }
        header="Add new video URL"
        trigger={
          <span className="open" onClick={this.handleOpenModal}>
            +
          </span>
        }
      />
    );
  }
}
export default Modal;
