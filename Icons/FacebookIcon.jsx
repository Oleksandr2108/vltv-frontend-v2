import PropTypes from 'prop-types';

export const FacebookIcon = ({ stroke = '#CCDBDE', hovered }) => {
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
        d="M11.5978 17C11.7635 17 11.8978 16.8657 11.8978 16.7V11.5351H13.4096C13.561 11.5351 13.6887 11.4222 13.7073 11.2719L13.8974 9.73223C13.9195 9.55332 13.7799 9.39547 13.5996 9.39547H11.8978V8.03259C11.8978 7.41516 12.0636 6.99243 12.9177 6.99243H13.7C13.8657 6.99243 14 6.85811 14 6.69243V5.35329C14 5.20043 13.8851 5.07165 13.7329 5.05771C13.2946 5.01756 12.8546 4.99834 12.4145 5.00011C10.8438 5.00011 9.76542 5.99494 9.76542 7.82122V9.39147H8.3C8.13431 9.39147 8 9.52578 8 9.69147V11.2311C8 11.3968 8.13431 11.5311 8.3 11.5311H9.76928V16.7C9.76928 16.8657 9.90359 17 10.0693 17H11.5978Z"
        fill="#D6A07E"
      />
      <path
        d="M16 1H6C3.23858 1 1 3.23858 1 6V16C1 18.7614 3.23858 21 6 21H16C18.7614 21 21 18.7614 21 16V6C21 3.23858 18.7614 1 16 1Z"
        stroke={hoverStroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
FacebookIcon.propTypes = {
  stroke: PropTypes.string,
  hovered: PropTypes.bool,
};
