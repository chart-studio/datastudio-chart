import styled from "styled-components"

type Icon = {
  width?: string
  height?: string
}

const SVG = styled.svg`
  fill: var(--text2);
  cursor: pointer;
  :hover {
    polyline,
    path {
      fill: var(--brand);
    }
  }
`

const Path = styled.path`
  fill: var(--text2);
`
const Polyline = styled.polyline`
  fill: var(--text2);
`

const Share = ({ width, height }: Icon) => {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 64 64"
      viewBox="0 0 64 64"
      width={width}
      height={height}
    >
      <g transform="translate(280 380)">
        <Path d="M-264.2-339.9c-4.4 0-7.9-3.5-7.9-7.9 0-4.4 3.5-7.9 7.9-7.9 4.4 0 7.9 3.5 7.9 7.9C-256.3-343.5-259.8-339.9-264.2-339.9L-264.2-339.9zM-264.2-352.8c-2.7 0-4.9 2.2-4.9 4.9 0 2.7 2.2 4.9 4.9 4.9 2.7 0 4.9-2.2 4.9-4.9C-259.3-350.5-261.5-352.8-264.2-352.8L-264.2-352.8zM-232.1-356c-4.4 0-7.9-3.5-7.9-7.9s3.5-7.9 7.9-7.9 7.9 3.5 7.9 7.9S-227.8-356-232.1-356L-232.1-356zM-232.1-368.8c-2.7 0-4.9 2.2-4.9 4.9s2.2 4.9 4.9 4.9 4.9-2.2 4.9-4.9S-229.4-368.8-232.1-368.8L-232.1-368.8zM-232.1-323.9c-4.4 0-7.9-3.5-7.9-7.9s3.5-7.9 7.9-7.9 7.9 3.5 7.9 7.9S-227.8-323.9-232.1-323.9L-232.1-323.9zM-232.1-336.7c-2.7 0-4.9 2.2-4.9 4.9s2.2 4.9 4.9 4.9 4.9-2.2 4.9-4.9S-229.4-336.7-232.1-336.7L-232.1-336.7z" />
        <Polyline points="-238.6 -333.2 -259.2 -343.5 -257.8 -346.4 -237.1 -336.1 -238.6 -333.2" />
        <Polyline points="-257.8 -349.3 -259.2 -352.1 -238.6 -362.4 -237.1 -359.6 -257.8 -349.3" />
      </g>
    </SVG>
  )
}

Share.defaultProps = {
  width: "1.6rem",
  height: "1.6rem",
}

export default Share
