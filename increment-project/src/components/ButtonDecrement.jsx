import '../assets/ButtonDecrement.css'

function ButtonDecrement({ count, setCount }) {
    return (
        <div className="less">
            <button onClick={() => setCount(count - 1)}>
                -
            </button>
        </div>
    );
}

export default ButtonDecrement;