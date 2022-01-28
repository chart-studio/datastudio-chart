import FunnelChart1 from "./funnel-chart1"
import React from "react"
import FunnelChart2 from "./funnel-chart2"

const GraphsComponent = ({ val }: { val: string }) => {
  if (val === "FunnelChart1") {
    return (
      <div>
        <FunnelChart1 />
      </div>
    )
  }
  if (val === "FunnelChart2") {
    return (
      <div>
        <FunnelChart2 />
      </div>
    )
  }
  return null
}

export default GraphsComponent
