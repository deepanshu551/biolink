import React, { useState } from 'react'
import '../../styles/index.css'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
export default function Hero () {
  const [link, setLink] = useState('usebio.link/')
  return (
    <section className='biolink-hero'>
      <div className='biolink-container'>
        <div className='biolink-hero__component'>
          <div className='biolink-hero__component-content'>
            <div className='biolink-hero__component-content-ptag'>
              <InfoOutlinedIcon />

              <span>All features free during beta - Don't miss out!</span>
            </div>

            <div className='biolink-hero__component-heading'>
              <h1>
                Build beautiful <strong>bio-link</strong> websites in minutes
              </h1>
              <span>Without limit. Without code.</span>
            </div>
            <form className='biolink-hero__component-form'>
              <label>
                <span className="biolink-hero__component-span1">usebio.link/</span>
                <input type='text' placeholder='username' className='' />
                <button>
                  <ArrowForwardIosIcon />
                </button>
              </label>
              <span className="biolink-hero__component-span2">* No credit card required</span>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
