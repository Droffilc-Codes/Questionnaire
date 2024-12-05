import { useContext  } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedBackStat() {
  const { feedBack } = useContext(FeedbackContext)
  
    let average = feedBack.reduce((sum, rate) => sum + rate.rating, 0)/feedBack.length
    average = average.toFixed(1).replace(/\.0+$/, '')

  return (
    <div className='feedback-stats'>
        <h4>{feedBack.length} reviews</h4>
        <h4>Average: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedBackStat
