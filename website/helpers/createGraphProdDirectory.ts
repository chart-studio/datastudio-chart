import axios from "axios"
export const createGraphProdDirectory = async (id: string, graph?: any) => {
  const { data } = await axios({
    method: "POST",
    url: `/api/graphSubsc?id=${id}&graph=${graph}`,
  })
  return data
}
