const getViewBox = (name: string, width: string, height: string) => {
  switch (name) {
    default:
      return `0 0 ${width} ${height}`;
  }
};

const getPath = (name: string, props: any) => {
  const { fill, stroke } = props;
  switch (name) {
    case "pause-icon":
      return (
        <>
          <path
            fill={fill}
            d="M17 3h-4q-.3 0-.4.5v14.1q0 .5.4.5h4q.5 0 .5-.5V3.5q0-.5-.5-.5M9.3 3H5.5Q5 3 5 3.5v11.3c0 1.8 1.5 3.3 3.3 3.3h1q.3 0 .4-.5V3.5q0-.5-.4-.5"
          />
        </>
      );

    case "instagram-icon":
      return (
        <>
          <path
            fill={fill}
            d="M17.4 7q0-2-1.2-3.2t-3.1-1.2H6.9q-1.8 0-3.1 1.2T2.6 6.9v6.2q0 1.8 1.2 3.1 1.4 1.3 3.1 1.2h6.2q1.8 0 3.1-1.2t1.2-3.1zM10 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8m4.6-7.8a1 1 0 0 1-.8-.8q0-.7.8-.8.8.1.8.8t-.8.8M12.7 10a2.7 2.7 0 0 1-5.4 0 2.7 2.7 0 0 1 5.4 0"
          />
        </>
      );
    case "facebook-icon":
      return (
        <>
          <path
            fill={fill}
            d="M18.3 10c0 4.2-3 7.6-7 8.2v-5.7h2l.4-2.5h-2.4V8.4q-.1-1.1 1.4-1.3h1v-2L11.8 5q-3 0-3.1 3.2V10h-2v2.5h2v5.7a8.3 8.3 0 1 1 9.6-8.2"
          />
        </>
      );
    case "linkedIn-icon":
      return (
        <>
          <path
            fill={fill}
            d="M5.9 17.5H2.7V8H6zm.3-13.2a1.8 1.8 0 1 0-2 1.9Q6 6 6.3 4.3m11.3 7.5c0-3-2-3.9-3.6-3.9q-1.8 0-2.8 1.5V8H8v9.5h3v-5c0-1 .8-2 1.8-2q1.3-.1 1.4 2v5h3.2z"
          />
        </>
      );
    case "dropdown-icon":
      return (
        <>
          <path
            fill={fill}
            d="M11 13.5q-.3 0-.5-.2L6.8 9.7a.7.7 0 0 1 1-1l3.2 3.2 3.2-3.2a.7.7 0 1 1 1 1l-3.7 3.6q-.2.3-.5.2"
          />
        </>
      );
    case "pause-cta-icon":
      return (
        <>
          <path
            fill={fill}
            d="M0 50q0 5 1 9.6A50 50 0 1 0 0 50m3.8 9a47 47 0 0 1 12.9-42.3 47 47 0 0 1 66.6 0 47 47 0 0 1-3.2 69.6A47.2 47.2 0 0 1 3.8 59"
          />
          <path
            fill={fill}
            d="M28.7 25.6c.1 12.3-.4 24.6.3 36.8.6 10.3 5.4 14.1 13.7 13.9h.4q2.3.2 2.4-2V26c0-2-.1-2.1-2.2-2.2H30.7q-2-.1-2 2m40.6-2.1H57.2c-2.7 0-2.7 0-2.7 2.8v47.7q.2 2.2 2.5 2l12-.1q2.3.2 2.4-2V25.8q.1-2.1-2-2"
          />
        </>
      );
    case "forward-icon":
      return (
        <>
          <path
            fill="none"
            stroke="#1B3452"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19.992 11.98H5.002M13.985 5.988 19.996 12l-6.01 6.012"
          />
        </>
      );
    case "backward-icon":
      return (
        <>
          <path
            fill="none"
            stroke="#1B3452"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4.008 11.979h14.99M10.015 5.987l-6.011 6.012 6.01 6.012"
          />
        </>
      );
    case "cross-arrow-icon":
      return (
        <>
          <path
            fill={fill}
            d="M16.5 4.2v8.3a.6.6 0 0 1-1.3 0V5.7l-9.8 9.7a.6.6 0 1 1-.8-.8l9.7-9.8H7.5a.6.6 0 0 1 0-1.3h8.3a.6.6 0 0 1 .7.7"
          />
        </>
      );
    default:
      return <></>;
  }
};

const SVGIcon = ({
  name = "",
  style = {},
  fill = "",
  viewBox = "",
  height = "24",
  width = "24",
  className = "",
  strokeWidth = 1.5,
  stroke = "",
  stopColor = "",
}) => (
  <svg
    stroke={stroke}
    width={width}
    style={style}
    height={height}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox || getViewBox(name, width, height)}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    {getPath(name, {
      fill,
      strokeWidth,
      stroke,
      stopColor,
    })}
  </svg>
);

export default SVGIcon;
