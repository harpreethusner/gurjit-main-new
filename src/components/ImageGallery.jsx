import React from "react";
import { Button, Modal } from "antd";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ImageGalleryDialogue = ({ isModalOpen, setIsModalOpen, images }) => {
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        title="Image Gallery"
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
        width={"80%"}
        height={"80%"}
        style={{ top: 0 }}
      >
        <ImageGallery
          items={images}
          renderItem={(item) => (
            <div className="flex justify-center items-center h-[85svh] w-full">
              <img
                src={item.original}
                alt={item.originalAlt}
                className="h-[100svh] w-full object-center object-cover"
              />
            </div>
          )}
          renderThumbInner={(item) => (
            <img
              src={item.thumbnail}
              alt={item.thumbnailAlt}
              className="h-[60px] w-full object-cover object-center"
            />
          )}
          showFullscreenButton={true}
          showPlayButton={false}
        />
      </Modal>
    </>
  );
};

export default ImageGalleryDialogue;
