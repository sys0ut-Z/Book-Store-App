import React from 'react'
import playStoreImg from '../../assets/website/play_store.png'
import appStoreImg from '../../assets/website/app_store.png'
import bannerImg from '../../assets/website/banner.jpg'

const bgImageCss = {
  backgroundImage : `url(${bannerImg})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center'
}

const AppStore = () => {
  return (
    <div className='py-6' style={{...bgImageCss}}>
      <div className="container">
        <div className='flex flex-col items-center gap-6'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white'>Read Books at Your Fingertips</h1>
          <div className='flex gap-2 items-center'>
            <a href="#">
              <img src={playStoreImg} alt='playstore-img' className='max-w-[160px] sm:max-w-[200px] md:max-w-[220px]'/>
            </a>
            <a href="#">
              <img src={appStoreImg} alt="appstore-img" className='max-w-[160px] sm:max-w-[200px] md:max-w-[220px]'/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppStore