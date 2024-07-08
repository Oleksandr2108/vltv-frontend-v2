import PropTypes from "prop-types";

const ResponsiveImage = ({
  imgName,
  className = "",
  formats = ["jpg", "png"],
}) => {
  return (
    <picture className={className}>
      <source
        srcSet={`/images/${imgName}.avif`}
        type="image/avif"
      />
      <source
        srcSet={`/images/${imgName}.webp`}
        type="image/webp"
      />
      {formats.map((format, index) => (
        <img
          key={index}
          src={`/images/${imgName}.${format}`}
          alt={imgName}
          onError={(e) => {
            if (index < formats.length - 1) {
              e.target.src = `./icons/${imgName}.${formats[index + 1]}`;
            }
          }}
          className={className}
          style={{ display: index === 0 ? "block" : "none" }}
        />
      ))}
    </picture>
  );
};

ResponsiveImage.propTypes = {
  imgName: PropTypes.string.isRequired,
  className: PropTypes.string,
  formats: PropTypes.arrayOf(PropTypes.string),
};

export default ResponsiveImage;
