
import PropTypes from 'prop-types';

export const BasketIcon = ({ stroke = '#616161', hovered }) => {
  const hoverStroke = hovered ? '#D6A07E' : stroke;

  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition duration-300"
    >
      <path
        d="M1.68299 14.9253C2.74832 16.2089 4.73109 16.2089 8.69662 16.2089H9.33707C13.3026 16.2089 15.2854 16.2089 16.3507 14.9252M1.68299 14.9253C0.617655 13.6416 0.983055 11.6928 1.71386 7.79518C2.23357 5.0234 2.49342 3.63751 3.47996 2.81875M1.68299 14.9253C1.68299 14.9253 1.68299 14.9253 1.68299 14.9253ZM16.3507 14.9252C17.416 13.6416 17.0506 11.6928 16.3198 7.79518C15.8001 5.0234 15.5403 3.63751 14.5537 2.81875M16.3507 14.9252C16.3507 14.9252 16.3507 14.9252 16.3507 14.9252ZM14.5537 2.81875C13.5672 2 12.1571 2 9.33707 2H8.69662C5.87654 2 4.4665 2 3.47996 2.81875M14.5537 2.81875C14.5537 2.81876 14.5537 2.81875 14.5537 2.81875ZM3.47996 2.81875C3.47996 2.81876 3.47996 2.81875 3.47996 2.81875Z"
        stroke={hoverStroke}
        strokeWidth="1.5"
      />
      <path
        d="M6.50439 5.55223C6.87013 6.58698 7.85697 7.32834 9.01697 7.32834C10.177 7.32834 11.1638 6.58698 11.5295 5.55223"
        stroke={hoverStroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

BasketIcon.propTypes = {
  stroke: PropTypes.string,
  hovered: PropTypes.bool,
};
