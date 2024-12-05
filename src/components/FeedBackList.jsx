import FeedBackItem from './FeedBackItems'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

export default function FeedBackList() {
  const {feedBack} = useContext(FeedbackContext)
  
   if (!feedBack || feedBack.length === 0) {
    return <p>No Feedback yet</p>
   }
  
   return (
     <div>
          {feedBack.map((item, index)=> (
              <FeedBackItem key={item.id} item={item}  /> 

          ))}
      </div>

  )

}

