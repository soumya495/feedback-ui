function RadioInputs({ rating, handleRadioChange }) {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <>
      {arr.map((num) => (
        <div className='radio' key={num}>
          <input
            type='radio'
            name='rating'
            id={`rating-${num}`}
            value={num}
            checked={rating === num}
            onChange={handleRadioChange}
          />
          <label htmlFor={`rating-${num}`}>{num}</label>
        </div>
      ))}
    </>
  )
}

export default RadioInputs
