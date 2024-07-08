import PropTypes from 'prop-types';

export const Modal = ({ onClose }) => {
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 z-50"
      onClick={handleBackgroundClick}
    >
      
        <div className="relative w-[90%] laptop:w-full max-w-4xl">
          <div className="relative pt-[56.25%]">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/byGM38OSM2U"
              title="6AM aesthetic MORNING ROUTINE 🎀 Get Motivated #morningroutine #aesthetic #grwm"
              
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
