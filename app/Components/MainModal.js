const MainModal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === 'wrapper') onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-[#140e0b] bg-opacity-25 backdrop-blur-sm"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="flex w-[550px] flex-col">
        <button
          className="place-self-end text-xl text-[#D0B8A6]"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="bg-[#D0B8A6] p-2  ">{children}</div>
      </div>
    </div>
  );
};

export default MainModal;
