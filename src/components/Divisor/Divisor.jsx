import './Divisor.css'

const Divisor = ({ width, marginBottom, border }) => {
    return (
        <>
            <hr className='divisor' style={{width: width, marginBottom: marginBottom, border: border}} />
        </>
    )
}

export default Divisor