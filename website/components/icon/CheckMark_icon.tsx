import { InputHTMLAttributes } from "react"
import styled from "styled-components"

interface Icon extends InputHTMLAttributes<HTMLDivElement> {
  width?: string
  height?: string
}

const SVG = styled.svg`
  fill: url(#gradient);
  cursor: pointer;
`

const CheckMark_icon = ({ width, height, ...props }: Icon) => {
  return (
    <SVG width={width} height={height} viewBox="0 0 64 64" xmlSpace="preserve">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#05a" />
          <stop offset="100%" stopColor="#0a5" />
        </linearGradient>
      </defs>
      <use href="#checkmark-icon" />
    </SVG>
  )
}

CheckMark_icon.defaultProps = {
  width: "1.6rem",
  height: "1.6rem",
}

export default CheckMark_icon
