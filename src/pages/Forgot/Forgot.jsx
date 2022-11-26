import React from 'react'
import '../../styles/index.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
export default function Forgot() {
  return (
    <div className="biolink-login">
      <div className="biolink-login__container">

        <div className="biolink-login__header">
            <div className="biolink-login__header-logo">
            <svg
                  width='7em'
                  height='7em'
                  viewBox='0 0 277 277'
                  fill='currentColor'
                  xmlns='http://www.w3.org/2000/svg'
                  class='text-brand-primary undefined'
                >
                  <path d='M144.514 113.957C146.075 112.15 148.072 111.166 150.504 111.007C152.34 110.886 153.832 111.249 154.98 112.095C156.127 112.941 156.999 114.059 157.596 115.448L142.311 121.911C142.265 121.638 142.242 121.248 142.242 120.741C142.242 118.023 142.999 115.761 144.514 113.957Z'></path>
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M56.9872 24.6499C53.6805 24.867 51 27.7336 51 31.0527V140.882C51 144.201 53.6805 146.716 56.9871 146.498L219.013 135.862C222.319 135.644 225 132.778 225 129.459V19.6297C225 16.3106 222.319 13.796 219.013 14.0131L56.9872 24.6499ZM157.665 126.847C155.462 128.512 153.281 129.415 151.124 129.557C149.563 129.66 148.14 129.43 146.855 128.87C145.57 128.309 144.537 127.455 143.757 126.309L166.203 117.233C165.33 113.051 163.586 109.895 160.97 107.763C158.353 105.585 155.071 104.625 151.124 104.884C148.14 105.08 145.386 105.975 142.862 107.569C140.337 109.117 138.34 111.137 136.872 113.63C135.403 116.122 134.668 118.796 134.668 121.653C134.668 124.694 135.311 127.347 136.596 129.612C137.927 131.875 139.809 133.594 142.242 134.771C144.721 135.944 147.635 136.421 150.986 136.201C152.639 136.092 154.36 135.703 156.15 135.032C157.94 134.316 159.616 133.423 161.176 132.353L157.665 126.847ZM116.708 138.313C114.459 138.461 112.324 138.209 110.305 137.558C108.331 136.859 106.702 135.814 105.416 134.424L108.652 129.857C111.085 132.093 113.564 133.129 116.088 132.963C117.465 132.872 118.59 132.545 119.462 131.981C120.38 131.368 120.839 130.532 120.839 129.472C120.839 128.366 120.38 127.567 119.462 127.074C118.544 126.582 117.511 126.212 116.364 125.965C115.262 125.668 114.551 125.485 114.229 125.414C111.705 124.796 109.823 123.791 108.583 122.398C107.344 120.959 106.724 119.225 106.724 117.198C106.724 115.586 107.115 114.063 107.895 112.629C108.721 111.147 109.938 109.915 111.544 108.934C113.197 107.95 115.193 107.381 117.534 107.228C119.738 107.083 121.642 107.211 123.249 107.613C124.901 108.011 126.439 108.716 127.862 109.729L124.901 114.554C124.075 113.825 123.065 113.269 121.872 112.886C120.724 112.501 119.669 112.34 118.705 112.403C117.511 112.482 116.524 112.823 115.744 113.427C114.964 114.031 114.574 114.771 114.574 115.646C114.528 116.709 114.918 117.49 115.744 117.988C116.57 118.441 117.901 118.906 119.738 119.385C120.518 119.564 121.023 119.692 121.252 119.769C123.547 120.356 125.338 121.275 126.623 122.527C127.908 123.732 128.551 125.395 128.551 127.514C128.551 130.371 127.518 132.835 125.452 134.905C123.433 136.927 120.518 138.063 116.708 138.313ZM97.3245 109.729V138.963L90.3704 139.42L89.8885 134.199C88.8786 136.247 87.3868 137.934 85.4131 139.262C83.4393 140.543 81.1901 141.267 78.6655 141.432C76.0033 141.607 73.777 140.947 71.9869 139.452C70.2426 137.908 69.3475 135.847 69.3016 133.27V111.569L77.0131 111.063V129.999C77.1508 133.215 78.7344 134.747 81.7639 134.594C84.0131 134.447 85.8721 133.288 87.3409 131.118C88.8557 128.945 89.6131 126.292 89.6131 123.159V110.236L97.3245 109.729Z'
                  ></path>
                  <path d='M88.718 170.08C91.2885 169.911 93.6524 170.378 95.8098 171.48C97.9671 172.582 99.6655 174.268 100.905 176.536C102.19 178.756 102.833 181.432 102.833 184.565C102.833 187.79 102.144 190.646 100.767 193.132C99.3901 195.618 97.5311 197.583 95.1901 199.027C92.895 200.468 90.3934 201.277 87.6852 201.455C85.3901 201.606 83.3475 201.325 81.5573 200.613C79.7672 199.901 78.2524 198.872 77.0131 197.525V201.395L69.3016 201.902V147.995L77.0131 147.488V175.271C78.2524 173.854 79.8819 172.687 81.9016 171.771C83.9672 170.806 86.2393 170.242 88.718 170.08ZM86.0327 194.998C88.5573 194.832 90.6688 193.795 92.3671 191.887C94.1114 189.975 94.9835 187.683 94.9835 185.011C94.9835 183.306 94.5704 181.767 93.7442 180.393C92.9639 179.016 91.8852 177.981 90.5081 177.288C89.177 176.546 87.6852 176.229 86.0327 176.338C83.8754 176.479 81.9705 177.157 80.318 178.372C78.7114 179.583 77.6098 181.13 77.0131 183.012V189.508C77.7016 191.352 78.8262 192.776 80.3869 193.779C81.9475 194.736 83.8295 195.142 86.0327 194.998Z'></path>
                  <path d='M118.701 169.424V198.659L110.99 199.165V169.931L118.701 169.424ZM110.645 159.517C110.645 158.366 111.104 157.368 112.022 156.524C112.94 155.635 113.973 155.152 115.121 155.077C116.222 155.005 117.209 155.355 118.081 156.127C118.999 156.85 119.458 157.787 119.458 158.939C119.458 160.091 118.999 161.088 118.081 161.932C117.209 162.772 116.222 163.229 115.121 163.301C113.973 163.377 112.94 163.053 112.022 162.33C111.104 161.607 110.645 160.669 110.645 159.517Z'></path>
                  <path d='M126.869 183.194C126.869 180.292 127.557 177.597 128.934 175.111C130.357 172.622 132.308 170.627 134.787 169.129C137.265 167.584 140.088 166.707 143.255 166.499C146.423 166.291 149.223 166.799 151.655 168.021C154.134 169.195 156.039 170.936 157.37 173.244C158.701 175.506 159.367 178.112 159.367 181.061C159.367 184.01 158.701 186.726 157.37 189.209C156.039 191.646 154.134 193.637 151.655 195.182C149.223 196.724 146.4 197.6 143.187 197.811C140.065 198.016 137.265 197.578 134.787 196.497C132.308 195.369 130.357 193.678 128.934 191.421C127.557 189.116 126.869 186.373 126.869 183.194ZM134.649 182.753C134.649 185.379 135.452 187.538 137.059 189.229C138.665 190.874 140.662 191.619 143.049 191.462C145.528 191.299 147.547 190.291 149.108 188.438C150.714 186.582 151.518 184.317 151.518 181.645C151.518 178.973 150.714 176.814 149.108 175.169C147.547 173.474 145.528 172.708 143.049 172.871C140.662 173.028 138.665 174.08 137.059 176.029C135.452 177.931 134.649 180.172 134.649 182.753Z'></path>
                  <path d='M77.0131 208.587V262.494L69.3016 263V209.093L77.0131 208.587Z'></path>
                  <path d='M95.302 232.059V261.293L87.5905 261.799V232.565L95.302 232.059ZM87.2463 222.152C87.2463 221 87.7053 220.002 88.6233 219.159C89.5413 218.269 90.5741 217.787 91.7217 217.712C92.8233 217.639 93.8102 217.989 94.6823 218.761C95.6003 219.484 96.0593 220.422 96.0593 221.573C96.0593 222.725 95.6003 223.723 94.6823 224.567C93.8102 225.407 92.8233 225.863 91.7217 225.936C90.5741 226.011 89.5413 225.687 88.6233 224.964C87.7053 224.241 87.2463 223.304 87.2463 222.152Z'></path>
                  <path d='M124.883 228.873C127.591 228.695 129.84 229.377 131.63 230.918C133.466 232.41 134.407 234.445 134.453 237.022V258.723L126.742 259.229V240.293C126.65 238.778 126.191 237.61 125.365 236.789C124.584 235.965 123.391 235.583 121.784 235.642C119.397 235.799 117.424 236.965 115.863 239.141C114.348 241.267 113.591 243.92 113.591 247.099V260.092L105.879 260.599V231.365L112.833 230.908L113.384 236.055C114.44 233.959 115.955 232.293 117.929 231.057C119.948 229.773 122.266 229.045 124.883 228.873Z'></path>
                  <path d='M156.165 244.028L152.791 246.876V257.519L145.079 258.025V204.118L152.791 203.612V238.859L167.388 226.635L172.07 230.475L161.466 239.464L173.309 256.172L164.358 256.76L156.165 244.028Z'></path>
                </svg>
            </div>
           <h1>Welcome</h1>
<p>Enter your email address and we will send you instructions to reset your password.</p>
        </div>
        <form className="biolink-login__form">

      
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Email address</label>
          </div>
         
         <button className="btn biolink-button">Login</button>
         <p>Back To Usebiolink</p>
        </form>
      </div>

    </div>
  )
}
