import { locale } from "../../@types/interface"
import SeoHome from "../../components/SEO/seoHome"
import translatedWords from "../../helpers/translatedWords"

const index = ({ locale }: { locale: locale }) => {
  const t = translatedWords(locale)
  return (
    <>
      <SeoHome title={t.navbar.link5} />
      <div>Contact</div>
    </>
  )
}
export default index

export async function getStaticProps({ locale }: { locale: locale }) {
  return {
    props: { locale },
  }
}
