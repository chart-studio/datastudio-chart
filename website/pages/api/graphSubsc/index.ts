import { NextApiRequest, NextApiResponse } from "next"
import { copyFileBucket } from "../../../helpers/copyFiles"

const projectDirectory = "visualisations/test"
const listChartsDirectory = [
  "funnel_one",
  "timebrush_one",
  "timebrush_two",
  "simple_scorecard",
]

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, graph: selectedChart } = req.query as { [x: string]: string }
  console.log(id, selectedChart)
  try {
    if (listChartsDirectory.includes(selectedChart)) {
      const chartProjectDirectory = `${projectDirectory}/${selectedChart}`
      //verifier que le fichier existe
      const destBucketName = `visualisations/prod/subsc/${id}/${selectedChart}`
      await copyFileBucket(
        chartProjectDirectory,
        destBucketName,
        "vizdata_prod"
      )
      return res.status(200).json({
        message: id,
        destBucketName,
      })
    } else {
      return res.status(204).json({
        message: `${selectedChart} does not exist`,
        destBucketName: "not created",
      })
    }
  } catch (error) {
    console.error(error)
    return res.status(500).end(error)
  }
}
