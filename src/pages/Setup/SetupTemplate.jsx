import React, { useState } from 'react'
import dashboard1 from '../../assets/onboarding-page-style-1.svg'
import dashboard2 from '../../assets/onboarding-page-style-2.svg'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import {set,ref} from "firebase/database";
import {useHistory} from "react-router-dom";
import {db} from "../../base";
import {useSelector} from "react-redux"
// import {db} from "../../base";
// import {}
export default function SetupTemplate (props) {
  const history=useHistory();
  const [progressComp, setProgressComp] = useState(25);
  const [selectedImg,setSelectedImg]=useState(1);
  const [instalink,setInstalink]=useState("");
  const [twitterlink,setTwitterlink]=useState("");
  const [tiktoklink,setTiktoklink]=useState("");
  const [customeURL,setCustomeURL]=useState("");
  const [title,setTitle]=useState("");
  const [name,setName]=useState("");
  const [userName,setUserName]=useState("");
  const {user}=useSelector(state=>state.user);

  const refreshFields=()=>{
    setSelectedImg(1);
    setInstalink("");
    setTwitterlink("");
    setTiktoklink("");
    setCustomeURL("");
    setTitle("");
    setUserName("");
    setName("");
  }
  const btnFinish= (e)=>{
    e.preventDefault()
   
      set(ref(db,`/${user.uid}`),{
        selectedImg,
  instalink,
  twitterlink,
  tiktoklink,
  customeURL,
  title,
  name,
  userName,
      })

      refreshFields();
    history.push("/app")
   
  }

  const temp = () => {
    if (props.cont === 'style') {
      return (
        <div className='biolink-setup__display-imgCont'>
          <div className='biolink-setup__display-imgCont1'>
            <img
              id='1'
              className={selectedImg == 1 && 'img-outline'}
              src={dashboard1}
              alt='dashboard1'
              onClick={e => selectImage(e)}
            />
            <p>
              Focusing on your content and making it easy to navigate. This
              style is great for personal profiles.
            </p>
          </div>
          <div className='biolink-setup__display-imgCont2'>
            <img
              id='2'
              className={selectedImg == 2 && 'img-outline'}
              src={dashboard2}
              alt='dashboard2'
              onClick={e => selectImage(e)}
            />
            <p>
              This style is great for brands. It focuses on your brand and
              highlights your content.
            </p>
          </div>
        </div>
      )
    }
    if (props.cont === 'socialHandles') {
      return (
        <div className='biolink-setup__display-socialHandles'>
          <div className="biolink-input">
            <p>Instagram</p>
            <label>
                <span><InstagramIcon/> @ </span>
                <input type="text" placeholder='username' value={instalink} onChange={(e)=>setInstalink(e.target.value)} />
            </label>
          </div>
          <div className='biolink-or'>
            <span>or</span>
          </div>

          <div className="biolink-input">
            <p>Twitter</p>
            <label>
                <span><TwitterIcon/> @ </span>
                <input type="text" placeholder='username' value={twitterlink} onChange={(e)=>setTwitterlink(e.target.value)}/>
            </label>
          </div>
          <div className='biolink-or'>
            <span>or</span>
          </div>
          <div className="biolink-input">
            <p>Tiktok</p>
            <label>
              <span> 
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5927 22.1518C8.10602 22.1518 6.70382 21.6774 5.53747 20.7801C5.31993 20.6125 5.11051 20.4295 4.91488 20.2363C3.55312 18.8906 2.86795 17.0983 2.98565 15.1901C3.07465 13.7472 3.65591 12.3565 4.62278 11.274C5.90254 9.8404 7.66776 9.05109 9.5927 9.05109C9.92297 9.05109 10.2569 9.07571 10.5856 9.12451C10.9179 9.17376 11.1639 9.45907 11.1639 9.79499V12.941C11.1639 13.1585 11.0595 13.3627 10.8833 13.4904C10.7069 13.6175 10.4798 13.6526 10.2738 13.5846C10.0565 13.5129 9.83058 13.4763 9.60196 13.4763C9.02477 13.4763 8.48418 13.7025 8.07981 14.1129C7.67747 14.5212 7.46083 15.0613 7.46919 15.634C7.48026 16.3727 7.86927 17.0423 8.51039 17.4258C8.80542 17.6021 9.14157 17.7053 9.48246 17.724C9.75083 17.7385 10.0179 17.7033 10.2736 17.619C11.1476 17.3303 11.7347 16.5195 11.7347 15.6017L11.7386 2.49803C11.7386 2.1237 12.042 1.82031 12.4163 1.82031H15.5148C15.8866 1.82031 16.1889 2.11986 16.1925 2.4917C16.195 2.75217 16.2214 3.01151 16.2716 3.26249C16.4684 4.25128 17.0227 5.13208 17.8326 5.74271C18.5462 6.28081 19.3968 6.56726 20.2934 6.57155C20.3471 6.56929 20.4009 6.57336 20.4549 6.58398C20.7721 6.647 21.0005 6.92532 21.0005 7.24859V10.3331C21.0005 10.7083 20.6944 11.0117 20.3194 11.0108C19.1688 11.0108 18.0506 10.7851 16.9954 10.3399C16.7229 10.2249 16.4573 10.0961 16.1993 9.95403L16.2124 15.624C16.2049 17.3691 15.5155 19.0054 14.271 20.2357C13.2614 21.2335 11.9871 21.8708 10.5856 22.0784C10.2584 22.1274 9.92433 22.1518 9.5927 22.1518ZM9.5927 10.4063C8.05903 10.4063 6.65299 11.035 5.63393 12.1765C4.86902 13.0331 4.40908 14.1328 4.33859 15.2732C4.24529 16.7852 4.78837 18.2052 5.86775 19.2717C6.02385 19.426 6.19124 19.5722 6.36474 19.7059C7.2914 20.4193 8.40783 20.7964 9.5927 20.7964C9.85814 20.7964 10.1252 20.7767 10.3868 20.7378C11.5011 20.5729 12.5148 20.0658 13.3179 19.2719C14.3044 18.2969 14.8511 17.0009 14.857 15.6231L14.8412 8.70229C14.8405 8.44363 14.9871 8.20733 15.2193 8.0928C15.4516 7.97826 15.7281 8.00605 15.933 8.16419C16.4187 8.53919 16.9536 8.85116 17.5227 9.0913C18.2026 9.3782 18.914 9.55667 19.6453 9.62444V7.88723C18.6917 7.77224 17.7935 7.41079 17.0169 6.82502C15.9411 6.01402 15.2044 4.8427 14.9424 3.52703C14.9189 3.41114 14.8999 3.29389 14.8841 3.17574H13.094L13.0902 15.6021C13.0902 17.1055 12.1292 18.4334 10.6985 18.906C10.2813 19.0436 9.84662 19.1018 9.40791 19.0772C8.84857 19.0465 8.29758 18.8777 7.8146 18.589C6.76753 17.9628 6.13183 16.8656 6.11376 15.6543C6.09975 14.7159 6.45487 13.8306 7.11407 13.1617C7.82363 12.4412 8.80045 12.066 9.80821 12.1268V10.4108C9.73637 10.4079 9.66431 10.4063 9.592710.4063Z"></path></svg>
            
           @</span>
           <input type="text" placeholder='username' value={tiktoklink} onChange={(e)=>setTiktoklink(e.target.value)}/>
           </label>
          </div>
         
        </div>
      )
    }
    if(props.cont==="customLink"){
        return(
            <div className='biolink-setup__display-customLink'>
            <div className="biolink-input">
              <p>Custome URL</p>
              <label>
                  <input type="text" placeholder='https://mywebsite.com' value={customeURL} onChange={(e)=>setCustomeURL(e.target.value)} />
              </label>
            </div>
            <div className='biolink-or'>
              <span>or</span>
            </div>
  
            <div className="biolink-input">
              <p>Give it a title</p>
              <label>
                  <input type="text" placeholder='My Website' value={title} onChange={(e)=>setTitle(e.target.value)}/>
              </label>
            </div>
           
          </div>
        )
    }
    if(props.cont==="last"){
return (
    <div className='biolink-setup__display-last'>
    <div className="biolink-input">
      <p>Your Name</p>
      <label>
          <input type="text" placeholder='John Wick' value={name} onChange={(e)=>setName(e.target.value)}/>
      </label>
    </div>
    <div className='biolink-or'>
      <span>or</span>v
    </div>

    <div className="biolink-input">
      <p>Choose a username</p>
      <label>
        <span>userbio.link/</span>
          <input type="text" placeholder='My Website' value={userName} onChange={(e)=>setUserName(e.target.value)}/>
      </label>
    </div>
   
  </div>
)
    }
  }
  const selectImage = e => {
    setSelectedImg(e.target.id)
  }
  const btnBack = () => {
    if (progressComp != 25) {
      setProgressComp(progressComp - 25)
      props.pro(props.tem-1)
    }
    else{
        props.dash(false)
    }
  }
  const btnNext = () => {
    if (progressComp != 100) {
      setProgressComp(progressComp + 25)
      props.pro(props.tem+1)
    }
  }
  return (
    <div>
      <div className='biolink-setup__edit-main-dashboard'>
        <h2>{props.title}</h2>
        <p>{props.subHead}</p>
        {temp()}
      </div>
      <div className='biolink-progressCont'>
        <button
          className='btn biolink-button biolink-progressCont-btn1'
          onClick={btnBack}
        >
          Back
        </button>
        <progress max={100} value={progressComp}></progress>
        {progressComp===100?(<button
        type="submit"
          className='btn biolink-button biolink-progressCont-btn2'
          onClick={btnFinish}
        >Finish</button>):(<button
          className='btn biolink-button biolink-progressCont-btn2'
          onClick={btnNext}
        >
          Next
        </button>)}
      </div>
    </div>
  )
}
