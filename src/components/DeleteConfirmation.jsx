import { useContext } from 'react'
import ReviewContext from '../context/ReviewContext'

function DeleteConfirmation() {
  const { deleteId, setDeleteId, deleteReview } = useContext(ReviewContext)

  return (
    <div
      key='ModalBackground'
      className={`fixed-background ${deleteId !== '' && 'active-modal'}`}
    >
      <div className='confirmation-modal'>
        <h4>Are you sure you want to delete this review ?</h4>
        <button onClick={() => deleteReview(deleteId)}>Yes</button>
        <button onClick={() => setDeleteId('')}>No, Cancel</button>
      </div>
    </div>
  )
}

export default DeleteConfirmation
