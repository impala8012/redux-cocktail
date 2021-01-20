import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

const MoadlWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 100;
`;

const ModalItem = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 50%;
  padding: 2rem;
  max-width: 40rem;
  height: auto;
  min-height: 20rem;
  pointer-events: all;
  max-height: 80vh;
  overflow: auto;
`;
const Modal = ({ hideModal, toggleModal, children }) => {
  if (hideModal) return null;

  return [
    <ModalOverlay onClick={() => toggleModal()} />,
    <MoadlWrap >
      <ModalItem>{children}</ModalItem>
    </MoadlWrap>,
  ];
};

export default Modal;
