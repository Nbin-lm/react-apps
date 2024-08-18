/* eslint-disable react/prop-types */
function Child({handleChange}) {
  return (
    <div>
        <button onClick={handleChange}>Click to change</button>
    </div>
  )
}

export default Child