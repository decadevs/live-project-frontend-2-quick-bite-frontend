import PopularFoodsCard from '../components/PopularFoodsCard'
 import '../styles/index.css'
import Header from "../components/Header"
const PopularFoodsPage = () => {
  return (
    <div>
      
      {
        localStorage.getItem('token') ? <Header/> : null
        
        }
      
      <PopularFoodsCard />
    </div>
  )
}

export default PopularFoodsPage