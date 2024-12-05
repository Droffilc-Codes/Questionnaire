import React, { useState, useContext, useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelector from './RatingSelector'
import FeedbackContext from '../context/FeedbackContext'


function FeedBackForm( {handleFeedBack} ) {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState()

    const { addFeedback, feedBackEdit, updateFeedBackItem } = useContext(FeedbackContext)

    useEffect(()=>{
      if( feedBackEdit.edit === true){
        setBtnDisabled(false)
        setText(feedBackEdit.item.text)
        setRating(feedBackEdit.item.rating)
      }

    }, [feedBackEdit])

    const handleTextChange = (e) => {
      setText(e.target.value)

        if (text === ''){
          setBtnDisabled(true)
          setMessage(null)
        } else if (text !== '' && text.trim().length <= 10){
          setMessage("Please enter atleast 10 characters!")
          setBtnDisabled(true)
        } else{
          setBtnDisabled(false)
          setMessage(null)
        }

    }
    const handleNewFeedBack = (e) =>{
      e.preventDefault()
      if(text.trim().length > 10){
        const newFeedBack = {
          text,
          rating
        }
        if(feedBackEdit.edit === true){
          updateFeedBackItem(feedBackEdit.item.id, newFeedBack)
        }else{

          addFeedback(newFeedBack)
        }

        setText('')
      }
    }

  return (
    <Card>
      <form onSubmit={handleNewFeedBack}>
        <h2>I make a mental plan before a game</h2>
        <RatingSelector select={(rating)=> setRating(rating)}/>
        <div className="input-group">
            <input type="text"  
                onChange={handleTextChange}
                placeholder='Write a Review'
                value={text}
            />
            <Button type="submit" isDisabled={btnDisabled}>Send</Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedBackForm
