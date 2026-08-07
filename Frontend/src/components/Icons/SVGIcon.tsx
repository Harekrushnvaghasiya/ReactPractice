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
            d="M16.928 3h-3.78a.472.472 0 0 0-.472.472v14.174c0 .261.211.473.472.473h3.78c.26 0 .472-.212.472-.473V3.473A.473.473 0 0 0 16.928 3ZM9.252 3h-3.78A.472.472 0 0 0 5 3.472v11.34a3.307 3.307 0 0 0 3.307 3.307h.945c.261 0 .473-.212.473-.473V3.473A.472.472 0 0 0 9.252 3Z"
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
