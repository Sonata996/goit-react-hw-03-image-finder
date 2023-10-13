import Modal from 'react-modal';
import { ImgModal } from './Modal.styled';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'none',
  },
};

Modal.setAppElement('#root')

export const ModalImg = ({src,closeModal,isState}) =>{
   return (
   <Modal
   style={customStyles}
    isOpen={isState}
    onRequestClose={closeModal}
    >
      <ImgModal src={src} alt="" />
    
  </Modal>)

}


