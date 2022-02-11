import { FC, InputHTMLAttributes } from "react"
import styled from "styled-components"

interface DivProps extends InputHTMLAttributes<HTMLDivElement> {
  width?: string
  height?: string
}

const Div = styled.div`
  margin: 0.5rem;
  &:hover {
    cursor: pointer;
  }
`

const Svg = styled.svg`
  #path1 {
    fill: hsl(195, 69%, 48%);
  }
  #path2 {
    fill: hsl(169, 49%, 47%);
  }
  #path3 {
    fill: hsl(4, 72%, 59%);
  }

  @media (prefers-color-scheme: dark) {
    #path1 {
      fill: hsl(195, 69%, 28%);
    }
    #path2 {
      fill: hsl(169, 49%, 27%);
    }
    #path3 {
      fill: hsl(4, 72%, 39%);
    }
  }
`

const Logo: FC<DivProps> = ({ width, height, ...props }) => {
  return (
    <Div {...props}>
      <Svg
        width={width}
        height={height}
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 280.027 280.027"
        xmlSpace="preserve"
      >
        <g>
          <path
            id="path1"
            d="M17.502,105.009h35.003c9.661,0,17.502,7.832,17.502,17.502v113.761
		c0,9.67-7.841,17.502-17.502,17.502H17.502C7.841,253.774,0,245.942,0,236.272V122.511C0,112.841,7.841,105.009,17.502,105.009z"
          />
          <path
            id="path2"
            d="M122.512,26.252h35.003c9.661,0,17.502,7.841,17.502,17.502v192.519
		c0,9.67-7.841,17.502-17.502,17.502h-35.003c-9.661,0-17.502-7.832-17.502-17.502V43.753
		C105.01,34.092,112.851,26.252,122.512,26.252z"
          />
          <path
            id="path3"
            d="M227.522,70.006h35.003c9.661,0,17.502,7.841,17.502,17.502v148.765
		c0,9.67-7.841,17.502-17.502,17.502h-35.003c-9.661,0-17.502-7.832-17.502-17.502V87.508
		C210.021,77.847,217.861,70.006,227.522,70.006z"
          />
        </g>
      </Svg>
    </Div>
  )
}

Logo.defaultProps = {
  width: "1.2rem",
  height: "1.2rem",
}

export default Logo
