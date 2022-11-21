import  React  from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import profile from "../../assets/profilepic.jpg"
const Main = () => {

    const examples={profilepic:profile,userid:"@deepsharma",desc:"frontenddev/singer/foodie",email:"deepanshusharma551@gmail.com",twitter:"http:twitter.com",youtube:"http:youtube.com",facebook:"http:facebook.com"}
  return (
    <main className='biolink-main'>
      <div className='biolink-container'>
        <div className='biolink-main__component'>
          <div className='biolink-main__component-content'>
            <p className='biolink-main__component-content-top'>
              create in 3 min. <span className="biolink-hide">-&gt;</span>
            </p>
            <p className='biolink-main__component-content-bottom'>
              get inights <span className="biolink-hide">-&gt;</span>
            </p>
          </div>
          <div className='biolink-main__component-content--center'>

            <span className="biolink-main__component-content--center-text1">👇 Examples 👇</span>
            <span className="biolink-main__component-content--center-text2">Try It <OpenInNewIcon/></span>

            <div className="biolink-main__component-content-bg">
                <div className="biolink-main__component-content-main">
                    <div className="biolink-main__component-content-image">
                        <img src={examples.profilepic} alt="profilepic" />
                    </div>

                    <div className="biolink-main__component-content-info">
                       <p>{examples.userid}</p>
                       <span>{examples.desc}</span>
                    </div>

                    <div className="biolink-main__component-content-links">
                      <div className="biolink-main__component-content-link">email</div>
                      <div className="biolink-main__component-content-link">twitter</div>
                      <div className="biolink-main__component-content-link">outlook</div>
                      <div className="biolink-main__component-content-link">facebook</div>
                    </div>
                </div>
                

            </div>
          </div>
          <div className='biolink-main__component-content biolink-main__component-content--right'>
            <p className='biolink-main__component-content-top'>
            <span className="biolink-hide">&lt;-</span> grow audience
            </p>
            <p className='biolink-main__component-content-bottom'>
            <span className="biolink-hide">&lt;-</span> express yourself
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main
