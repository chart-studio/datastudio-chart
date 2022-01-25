import React from "react"
import styled from "styled-components"

const Svg = styled.svg`
  .cls-1 {
    font-size: 66.72px;
    fill: none;
    font-family: MyriadPro-Regular, Myriad Pro;
  }
  .cls-2 {
    letter-spacing: -0.01em;
  }
  .cls-3 {
    letter-spacing: 0em;
  }
  .cls-4 {
    letter-spacing: 0.02em;
  }
  .cls-5 {
    isolation: isolate;
  }
  .cls-6 {
    clip-path: url(#clip-path);
  }
  .cls-7 {
    mix-blend-mode: multiply;
  }
  .cls-8 {
    fill: #70c3e2;
  }
  .cls-9 {
    fill: #e2bb6f;
  }
  .cls-10 {
    fill: #e36f8a;
  }
  .cls-11 {
    fill: #80be69;
  }
  .cls-12 {
    fill: #7086c2;
  }
  width: 36;
  height: 32;
`
export const Logo = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="31 25 250.13 130.8"
      width="93"
      height="43"
    >
      <defs>
        <clipPath id="clip-path">
          <text
            className="cls-1"
            transform="translate(33.07 115.2) scale(0.95 1)"
          >
            <tspan className="cls-2">L</tspan>
            <tspan className="cls-3" x="30.56" y="0">
              o
            </tspan>
            <tspan className="cls-4" x="67.19" y="0">
              k
            </tspan>
            <tspan x="99.68" y="0">
              alistic
            </tspan>
          </text>
        </clipPath>
      </defs>
      <title>Fichier 1</title>
      <g className="cls-5">
        <g id="Calque_2" data-name="Calque 2">
          <g id="Calque_1-2" data-name="Calque 1">
            <g className="cls-6">
              <g className="cls-7">
                <ellipse
                  className="cls-8"
                  cx="54.2"
                  cy="57.6"
                  rx="54.2"
                  ry="57.6"
                />
              </g>
              <g className="cls-7">
                <ellipse
                  className="cls-9"
                  cx="122.46"
                  cy="57.6"
                  rx="54.2"
                  ry="57.6"
                />
              </g>
              <g className="cls-7">
                <ellipse
                  className="cls-10"
                  cx="190.21"
                  cy="57.6"
                  rx="54.2"
                  ry="57.6"
                />
              </g>
              <g className="cls-7">
                <ellipse
                  className="cls-11"
                  cx="258.92"
                  cy="57.6"
                  rx="54.2"
                  ry="57.6"
                />
              </g>
              <g className="cls-7">
                <ellipse
                  className="cls-12"
                  cx="258.92"
                  cy="144.2"
                  rx="54.2"
                  ry="57.6"
                />
              </g>
              <g className="cls-7">
                <ellipse
                  className="cls-9"
                  cx="190.67"
                  cy="144.2"
                  rx="54.2"
                  ry="57.6"
                />
              </g>
              <g className="cls-7">
                <ellipse
                  className="cls-10"
                  cx="122.91"
                  cy="144.2"
                  rx="54.2"
                  ry="57.6"
                />
              </g>
              <g className="cls-7">
                <ellipse
                  className="cls-11"
                  cx="54.2"
                  cy="144.2"
                  rx="54.2"
                  ry="57.6"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </Svg>
  )
}
