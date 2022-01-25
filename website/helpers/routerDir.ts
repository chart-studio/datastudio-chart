import { NextRouter } from "next/router"

export const routerDir = (router: NextRouter, link: string, shallow = true) => {
  router.push(link, undefined, {
    shallow: shallow,
  })
}
