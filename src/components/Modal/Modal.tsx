import { useState } from 'react';
import ReactModal from 'react-modal';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { IPhoto } from 'models/photo-model';
import './Modal.css';

export default function Modal(props: {
  isOpen: boolean;
  onRequestClose: (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => void;
  photo: IPhoto;
}) {
  const { isOpen, onRequestClose, photo } = props;
  const [liked, setLiked] = useState(false);

  const modalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '40vw',
      maxHeight: '85vh',
      display: 'grid',
      placeItems: 'center',
    },
  };

  function toggleLike() {
    setLiked(!liked);
  }

  const { user, urls, likes, description, alt_description, width, height } = photo;
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={modalStyles}
      contentLabel={user.username}
    >
      <button className="close-button" onClick={onRequestClose}>
        x Close dialog
      </button>
      <img className="modal-image" src={urls.regular}></img>
      <div className="author-info">
        <img
          className="user-profile-image"
          src={user.profile_image.small}
          alt={user.username}
        ></img>
        <a
          className="credit"
          target="_blank"
          rel="noreferrer"
          href={`https://unsplash.com/@${user.username}`}
        >
          <strong>{user.name}</strong>
        </a>
      </div>
      <p>{description || alt_description}</p>
      <div className="photo-info">
        <div>
          <p>{likes} people like this photo</p>
          <a className="heart-icon" onClick={toggleLike}>
            {liked ? (
              <>
                <FaHeart />
                <span> It is your favorite!</span>
              </>
            ) : (
              <>
                <FaRegHeart />
                <span> Add to favorites</span>
              </>
            )}
          </a>
        </div>
        <div>
          <p>Width: {width}px</p>
          <p>Height: {height}px</p>
        </div>
      </div>
    </ReactModal>
  );
}
