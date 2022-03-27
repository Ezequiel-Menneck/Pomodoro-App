import './Divisor.css'

const Divisor = (props) => {
    return (
        <>
            <hr className='divisor' style={{width: props.width, marginBottom: props.marginBottom, border: props.border}} />
        </>
    )
}

export default Divisor