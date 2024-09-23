import '../assets/ButtonIncrement.css'

function ButtonIncrement({count, setCount}) {
    return (
        <div className="plus">
            <button  onClick={() => setCount(count + 1)}>
                +
            </button>
        </div>
    )
}

export default ButtonIncrement;