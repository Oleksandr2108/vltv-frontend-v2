import PropTypes from 'prop-types';

export const YouTubeIcon = ({ stroke = '#CCDBDE', hovered }) => {
  const hoverStroke = hovered ? '#D6A07E' : stroke;

  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 1H6C3.23858 1 1 3.23858 1 6V16C1 18.7614 3.23858 21 6 21H16C18.7614 21 21 18.7614 21 16V6C21 3.23858 18.7614 1 16 1Z"
        stroke={hoverStroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M13.4635 10.8954C13.9265 11.1655 13.9265 11.8345 13.4635 12.1046L9.55271 14.3859C9.08605 14.6581 8.5 14.3215 8.5 13.7813L8.5 9.21873C8.5 8.67847 9.08605 8.34186 9.55271 8.61408L13.4635 10.8954Z"
        fill="#D6A07E"
      />
    </svg>
  );
};
YouTubeIcon.propTypes = {
  stroke: PropTypes.string,
  hovered: PropTypes.bool,
};
