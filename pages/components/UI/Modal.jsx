const Modal = ({ show, onClose, children }) => {

  const handleCloseClick = (e) => {
      e.preventDefault();
      onClose();
  };
  
  const modalContent = show ? (
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black/75">
      <div className="bg-white w-3/6 h-3/6 rounded-2xl">
        <div className="flex justify-end text-2xl mb-12">
          <a href="#" onClick={handleCloseClick}>
            x
          </a>
        </div>
        {children}
      </div>
    </div>
  ) : null;
  return (
    modalContent
    )
};


export default Modal;