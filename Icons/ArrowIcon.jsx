import PropTypes from 'prop-types';

export const ArrowIcon = ({ stroke = '#ffffff', hovered }) => {
  const hoverStroke = hovered ? '#D6A07E' : stroke;

  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 15L15 3M15 3H4.5M15 3L15 13.5"
        stroke={hoverStroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowIcon.propTypes = {
  stroke: PropTypes.string,
  hovered: PropTypes.bool,
};
