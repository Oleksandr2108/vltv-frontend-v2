import PropTypes from 'prop-types';

export const TikTokIcon = ({ stroke = '#CCDBDE', hovered }) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.56967 8.66254V7.80445C8.27185 7.76228 7.97155 7.74037 7.67074 7.73895C3.99249 7.73895 1 10.732 1 14.4102C1 16.6666 2.12766 18.6639 3.84789 19.8717C2.69605 18.6399 2.05569 17.0162 2.05662 15.3298C2.05662 11.7039 4.96395 8.7472 8.56967 8.66254Z"
        fill="#D6A07E"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.72703 18.3762C10.3681 18.3762 11.7069 17.0707 11.7679 15.4437L11.7734 0.919566H14.4268C14.3702 0.616314 14.3415 0.308498 14.3412 0H10.7173L10.7113 14.5246C10.6508 16.1511 9.31154 17.4561 7.67094 17.4561C7.17836 17.4563 6.69322 17.3363 6.25757 17.1065C6.53885 17.4989 6.90955 17.8188 7.33896 18.0395C7.76838 18.2604 8.24417 18.3757 8.72703 18.3762ZM19.3828 5.84939V5.04217C18.4076 5.04309 17.4534 4.75943 16.6372 4.22591C17.3528 5.04992 18.3164 5.61954 19.3833 5.84939"
        fill="#D6A07E"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.6371 4.22566C15.8371 3.31036 15.3965 2.13586 15.397 0.920258H14.4261C14.5518 1.59215 14.8126 2.23153 15.1926 2.79969C15.5727 3.36785 16.0641 3.85297 16.6371 4.22566ZM7.67019 11.364C6.86252 11.365 6.0882 11.6862 5.51707 12.2573C4.94599 12.8284 4.62474 13.6027 4.62378 14.4104C4.62433 14.966 4.77668 15.5109 5.06442 15.9862C5.35216 16.4615 5.7643 16.8491 6.25632 17.1072C5.88168 16.5905 5.67997 15.9687 5.67992 15.3305C5.6807 14.5227 6.0019 13.7483 6.57303 13.1771C7.14416 12.6059 7.91856 12.2845 8.72633 12.2836C9.04025 12.2836 9.34105 12.3355 9.62522 12.4247V8.72472C9.32744 8.68255 9.02709 8.66065 8.72633 8.65922C8.6734 8.65922 8.62151 8.66225 8.56912 8.66326V11.5051C8.2784 11.4126 7.97526 11.365 7.67019 11.364Z"
        fill={hoverStroke}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.3833 5.84959V8.66625C17.5039 8.66625 15.763 8.06514 14.341 7.04479V14.4099C14.341 18.0881 11.3491 21.0807 7.67079 21.0807C6.24936 21.0807 4.93123 20.6322 3.8479 19.8714C4.47075 20.543 5.22558 21.0788 6.06515 21.4452C6.90473 21.8115 7.8109 22.0004 8.72689 22.0002C12.4052 22.0002 15.3977 19.0077 15.3977 15.33V7.96486C16.8666 9.02113 18.6306 9.58841 20.4399 9.58631V5.96147C20.0771 5.96147 19.7244 5.92215 19.3833 5.84909"
        fill={hoverStroke}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.3408 14.4099V7.04484C15.8097 8.10121 17.5737 8.66849 19.3831 8.66629V5.84964C18.3163 5.61955 17.3529 5.04975 16.6375 4.22566C16.0645 3.85297 15.573 3.36785 15.193 2.79969C14.813 2.23153 14.5522 1.59215 14.4265 0.920258H11.7731L11.7675 15.4444C11.7066 17.0709 10.3678 18.3764 8.72665 18.3764C8.24379 18.3759 7.768 18.2605 7.33858 18.0397C6.90922 17.8189 6.53852 17.4991 6.25719 17.1067C5.76508 16.8487 5.3528 16.4611 5.06497 15.9858C4.77714 15.5105 4.62469 14.9656 4.62414 14.4099C4.62506 13.6022 4.94631 12.8279 5.51744 12.2568C6.08852 11.6857 6.86288 11.3645 7.67056 11.3635C7.98396 11.3635 8.28477 11.4149 8.56944 11.5046V8.66276C4.96372 8.74741 2.0564 11.7041 2.0564 15.33C2.0564 17.0835 2.73763 18.6798 3.84766 19.8719C4.9667 20.6597 6.30206 21.0819 7.67056 21.0807C11.3488 21.0807 14.3408 18.0882 14.3408 14.4099Z"
        fill="#F6F1DC"
      />
    </svg>
  );
};
TikTokIcon.propTypes = {
  stroke: PropTypes.string,
  hovered: PropTypes.bool,
};
