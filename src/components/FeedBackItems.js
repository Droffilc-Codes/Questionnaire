import { FaTimes, FaEdit } from 'react-icons/fa'
import Card from "./shared/Card"
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

export default function FeedBackItems({item}) {
  const { deleteFeedBack, editFeedback } = useContext(FeedbackContext)
   
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className='close' onClick={()=> deleteFeedBack(item.id)}>
        <FaTimes  />
      </button>
      <button onClick={()=> editFeedback(item)} className="edit">
        <FaEdit />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}
