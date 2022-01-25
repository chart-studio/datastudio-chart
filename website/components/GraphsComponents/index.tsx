import FunnelChart1 from "./funnel-chart1"
import React from "react"

const GraphsComponent = ({ val }: { val: string }) => {
  if (val === "FunnelChart1") {
    return (
      <div>
        <FunnelChart1 />
      </div>
    )
  }
  return null
}

export default GraphsComponent
