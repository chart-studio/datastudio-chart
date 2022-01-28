import axios from "axios"
export const createGraphTestDirectory = async (id: string, graph?: any) => {
  const { data } = await axios({
    method: "POST",
    url: `/api/graphtest?id=${id}&graph=${graph}`,
  })
  return data
}
