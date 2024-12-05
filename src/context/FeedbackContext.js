import { createContext,   useState } from "react";
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedBackProvider = ( {children} ) => {
    const [feedBack, setFeedBack] = useState([
        {
            id: 14,
            text: 'This is a feedback fromm context',
            rating: 10
        },
        {
            id: 1,
            rating: 10,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
          },
          {
            id: 2,
            rating: 9,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
          },
          {
            id: 3,
            rating: 8,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
          },
])

const [feedBackEdit, setFeedBackEdit] = useState({
    item: {},
    edit: false
})

    const deleteFeedBack = (id) => {
        if ( window.confirm('Do you want to delete this feedback?')){
            setFeedBack( feedBack.filter( (item)=> item.id !== id))
        }
    }


    const addFeedback = (newFeedBack) => {
        newFeedBack.id = uuidv4()
        setFeedBack([newFeedBack, ...feedBack])
    }

    const editFeedback = (item) => {
        setFeedBackEdit(
            {
                item,
                edit: true
            }
        )
    }

    const updateFeedBackItem = (id, updItem) => {
        setFeedBack(
            
            feedBack.map((item) => (item.id === id ? {...item, ...updItem} : item))
        )
        // console.log(feedBack)
    }

   return  <FeedbackContext.Provider value={ {
        feedBack,
        deleteFeedBack,
        addFeedback,
        editFeedback,
        feedBackEdit,
        updateFeedBackItem,
    } }>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext