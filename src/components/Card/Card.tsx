import { IPhoto } from 'models/photo-model';
import './Card.css';
import { useState } from 'react';
import Modal from '../Modal/Modal';

export const Card: React.FC<{ photo: IPhoto }> = ({ photo }) => {
  const { urls } = photo;

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="card" onClick={openModal}>
        <img className="gallery-image" src={urls.regular}></img>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} photo={photo} />
    </>
  );
};
