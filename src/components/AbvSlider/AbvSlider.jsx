import './AbvSlider.scss'

const AbvSlider = ({getSliderAbvValue}) => {
  return (
    <div>
        <input type="range" className='abv-range' onClick={getSliderAbvValue}/>
    </div>
  )
}

export default AbvSlider