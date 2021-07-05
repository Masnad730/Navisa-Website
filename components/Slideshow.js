import Link from 'next/link'
import { Carousel } from 'react-responsive-carousel'

const Slideshow = () => {
  return (
    <Carousel showStatus={false} showThumbs={false} showArrows={false} autoPlay={false}>
      <div className='relative'>
        <img src='/images/slide-1-2.jpg' />
      </div>
      <div>
        <img src='/images/slide-2.jpg' />
      </div>
      <div>
        <img src='/images/slide-3.jpg' />
      </div>
    </Carousel>
  )
}
export default Slideshow
