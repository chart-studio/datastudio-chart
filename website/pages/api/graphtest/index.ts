import { NextApiRequest, NextApiResponse } from "next"
import { copyFileBucket } from "../../../helpers/copyFiles"
import { date_YYYY_MM_DD } from "../../../helpers/date_YYYY_MM_DD"

const projectDirectory = "visualisations/test"
const listChartsDirectory = ["funnel_one", "timebrush_one", "timebrush_two"]

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, graph: selectedChart } = req.query as { [x: string]: string }
  console.log(id, selectedChart)
  try {
    if (listChartsDirectory.includes(selectedChart)) {
      const chartProjectDirectory = `${projectDirectory}/${selectedChart}`
      const newDate = new Date()
      const newDateTransf = date_YYYY_MM_DD(newDate)
      //verifier que le fichier existe
      const destBucketName = `visualisations/prod/try/${newDateTransf}/${selectedChart}/${id}`
      await copyFileBucket(chartProjectDirectory, destBucketName)
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
