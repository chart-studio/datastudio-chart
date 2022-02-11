import styled from "styled-components"

type Icon = {
  width?: string
  height?: string
}

const SVG = styled.svg`
  enable-background: new 0 0 2500 2325.5;
  cursor: pointer;
  margin-right: 0.25rem;
  .st0 {
    fill: #669df3;
  }
  .st1 {
    fill: #1a73e8;
  }
`

const DataStudioIcon = ({ width, height }: Icon) => {
  return (
    <SVG
      width={width}
      height={height}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 2500 2325.5"
      xmlSpace="preserve"
    >
      <style type="text/css"></style>
      <g>
        <path
          className="st0"
          d="M2187.7,1691h-907.8c-219.5,0-342.5,153.7-342.5,317.2c0,150.9,104.3,317.2,342.5,317.2h907.8L2187.7,1691z"
        />
        <ellipse
          className="st1"
          cx="2187.7"
          cy="2007.7"
          rx="312.3"
          ry="317.2"
        />
        <path
          className="st0"
          d="M1250.3,845.2H342.5C123,845.2,0,998.9,0,1162.5c0,150.9,104.3,317.2,342.5,317.2h907.8V845.2z"
        />
        <ellipse
          className="st1"
          cx="1250.3"
          cy="1162.5"
          rx="312.3"
          ry="317.2"
        />
        <path
          className="st0"
          d="M2187.7,0h-907.8c-219.5,0-342.5,153.7-342.5,317.2c0,150.9,104.3,317.2,342.5,317.2h907.8L2187.7,0z"
        />
        <ellipse className="st1" cx="2187.7" cy="317.2" rx="312.3" ry="317.2" />
      </g>
    </SVG>
  )
}

DataStudioIcon.defaultProps = {
  width: "1.6rem",
  height: "1.6rem",
}

export default DataStudioIcon
