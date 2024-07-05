import PropTypes from 'prop-types';

export const InstagramIcon = ({ stroke = '#CCDBDE', hovered }) => {
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
        d="M15 10.3698C15.1234 11.202 14.9812 12.052 14.5937 12.7988C14.2062 13.5456 13.5931 14.1512 12.8416 14.5294C12.0901 14.9077 11.2384 15.0393 10.4077 14.9057C9.57708 14.772 8.80971 14.3798 8.21479 13.7849C7.61987 13.19 7.22768 12.4226 7.09402 11.592C6.96035 10.7613 7.09202 9.90965 7.47028 9.15813C7.84854 8.40661 8.45414 7.79349 9.20094 7.40599C9.94773 7.01849 10.7977 6.87634 11.63 6.99975C12.4789 7.12564 13.2648 7.52122 13.8716 8.12806C14.4785 8.7349 14.8741 9.52083 15 10.3698Z"
        fill="#D6A07E"
      />
      <path
        d="M16.5 5.50006H16.5111"
        stroke="#D6A07E"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
InstagramIcon.propTypes = {
  stroke: PropTypes.string,
  hovered: PropTypes.bool,
};
