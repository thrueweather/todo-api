import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Form, Input, Modal, Button } from "antd";

function ModalTodo(props) {
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      title: props.todo.title,
      description: props.todo.description
    }
  });

  const handleChangeTodo = key => e => {
    props.setTodo({ ...props.todo, [key]: e.target.value });
  };

  return (
    <Modal
      title={props.modalTitle}
      visible={true}
      footer={null}
      onCancel={props.onCancel}
    >
      <Form onSubmit={handleSubmit(props.onSave)}>
        <div className={errors.title ? "has-error" : ""}>
          <label>Title</label>
          <input
            type="text"
            className="ant-input"
            ref={register({
              required: true,
              value: props.todo.title
            })}
            name="title"
            onChange={handleChangeTodo("title")}
          />
          {errors.title && errors.title.type === "required" && (
            <span role="alert" className="ant-form-explain">
              This is required
            </span>
          )}
        </div>
        <div className={errors.description ? "has-error" : ""}>
          <label>Description</label>
          <input
            type="text"
            className="ant-input"
            ref={register({
              required: true,
              value: props.todo.description
            })}
            name="description"
            onChange={handleChangeTodo("description")}
          />
          {errors.description && errors.description.type === "required" && (
            <span role="alert" className="ant-form-explain">
              This is required
            </span>
          )}
        </div>
        <div className="ant-modal-footer">
          <Button onClick={props.onCancel}>Cancel</Button>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </div>
      </Form>
    </Modal>
  );
}

export default ModalTodo;
