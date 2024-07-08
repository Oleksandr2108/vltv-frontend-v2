

export const StarIcon = ({
  fill = "#D6A07A",
  stroke = "none",
  strokeWidth = 1,
}) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[14px] h-[14px] "
    >
      <path
        d="M7 0L8.45028 5.54972L14 7L8.45028 8.45028L7 14L5.54972 8.45028L0 7L5.54972 5.54972L7 0Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
};

