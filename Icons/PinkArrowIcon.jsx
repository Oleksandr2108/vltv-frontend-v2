
export const PinkArrowIcon = ({ stroke = '#E8D3D7', hovered }) => {
  const hoverStroke = hovered ? '#D6A07E' : stroke;
  const hoverRotate = hovered ? 'rotate-45 mt-[2px] duration-custom' : '';

  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={hoverRotate}
    >
      <path
        d="M3 15L15 3M15 3H4.5M15 3L15 13.5"
        stroke={hoverStroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};


