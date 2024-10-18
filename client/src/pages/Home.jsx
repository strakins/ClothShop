import BestSellers from "../components/BestSellers"
import Hero from "../components/Hero"
import LatestCollections from "../components/LatestCollections"
import NewsLetterSub from "../components/NewsLetterSub"
import Policy from "../components/Policy"

const home = () => {
  return (
    <div>
      <Hero />
      <LatestCollections />
      <BestSellers />
      <Policy />
      <NewsLetterSub />
    </div>
  )
}

export default home