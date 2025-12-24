import React, { useEffect, useState } from "react";
import { Input, Modal } from "antd";
const ModalPopup = ({ isModalOpen, handleCancel, handleOk }) => {
  return (
    <>
      <Modal
        mask={false}
        title="Book Free Consulatation"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="flex flex-col gap-1">
          <span>Your Name</span>
          <Input placeholder="Your Name" />
          <span>Your Email</span>
          <Input placeholder="Enter Your Email" />
          <span>Your Number</span>
          <Input placeholder="Enter Your Number" />
          <span>Enter Address</span>
          <Input placeholder="Enter Your Address" />
        </div>
      </Modal>
    </>
  );
};
export default ModalPopup;
