import { useLocale } from "next-intl"
import Footer from "@/components/layout/home-template/footer"
import Header from "@/components/layout/home-template/header"
import Main from "@/components/layout/home-template/main"

interface Props {
  showBanner?: boolean
  children: React.ReactNode
}


export default function HomeLayoutTemplate({
  children,
  showBanner = false
}: Readonly<Props>) {

  return (
    <>
      <Header showBanner={showBanner} />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  )
}



