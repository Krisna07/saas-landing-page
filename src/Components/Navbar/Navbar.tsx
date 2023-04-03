import React, { useState } from "react";
import Button from "../Button";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const logo = (
  <svg
    width="160"
    height="32"
    viewBox="0 0 160 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_3_14)">
      <path
        d="M48.0732 24.2381V7.95015H51.1446V21.4459H58.5905V24.2381H48.0732Z"
        fill="white"
      />
      <path
        d="M65.2217 24.5639C64.0738 24.5639 63.0422 24.3312 62.127 23.8658C61.2117 23.4005 60.4904 22.7257 59.963 21.8415C59.4356 20.9573 59.1719 19.8947 59.1719 18.6537V18.2814C59.1719 17.0404 59.4356 15.9778 59.963 15.0936C60.4904 14.2094 61.2117 13.5346 62.127 13.0692C63.0422 12.6039 64.0738 12.3712 65.2217 12.3712C66.3696 12.3712 67.4012 12.6039 68.3164 13.0692C69.2316 13.5346 69.9529 14.2094 70.4804 15.0936C71.0078 15.9778 71.2715 17.0404 71.2715 18.2814V18.6537C71.2715 19.8947 71.0078 20.9573 70.4804 21.8415C69.9529 22.7257 69.2316 23.4005 68.3164 23.8658C67.4012 24.3312 66.3696 24.5639 65.2217 24.5639ZM65.2217 21.9578C66.1214 21.9578 66.866 21.6708 67.4555 21.0969C68.0449 20.5074 68.3397 19.6697 68.3397 18.5839V18.3512C68.3397 17.2653 68.0449 16.4354 67.4555 15.8614C66.8815 15.272 66.1369 14.9772 65.2217 14.9772C64.322 14.9772 63.5774 15.272 62.9879 15.8614C62.3984 16.4354 62.1037 17.2653 62.1037 18.3512V18.5839C62.1037 19.6697 62.3984 20.5074 62.9879 21.0969C63.5774 21.6708 64.322 21.9578 65.2217 21.9578Z"
        fill="white"
      />
      <path
        d="M72.3721 18.5141V18.1418C72.3721 16.9318 72.6125 15.9002 73.0934 15.047C73.5743 14.1784 74.2103 13.5191 75.0014 13.0692C75.8081 12.6039 76.6845 12.3712 77.6308 12.3712C78.6856 12.3712 79.4845 12.5573 80.0274 12.9296C80.5704 13.3019 80.9659 13.6897 81.2141 14.093H81.633V12.6969H84.5183V26.2857C84.5183 27.0769 84.2856 27.7051 83.8202 28.1705C83.3548 28.6514 82.7344 28.8918 81.9587 28.8918H74.2336V26.3323H80.9349C81.3693 26.3323 81.5864 26.0996 81.5864 25.6342V22.6326H81.1676C81.0125 22.8808 80.7953 23.1367 80.5161 23.4005C80.2369 23.6486 79.8646 23.8581 79.3992 24.0287C78.9338 24.1993 78.3444 24.2847 77.6308 24.2847C76.6845 24.2847 75.8081 24.0597 75.0014 23.6099C74.2103 23.1445 73.5743 22.4852 73.0934 21.632C72.6125 20.7634 72.3721 19.724 72.3721 18.5141ZM78.4685 21.7251C79.3682 21.7251 80.1205 21.4381 80.7255 20.8642C81.3305 20.2902 81.633 19.4836 81.633 18.4443V18.2116C81.633 17.1567 81.3305 16.3501 80.7255 15.7916C80.136 15.2177 79.3837 14.9307 78.4685 14.9307C77.5687 14.9307 76.8164 15.2177 76.2114 15.7916C75.6064 16.3501 75.3039 17.1567 75.3039 18.2116V18.4443C75.3039 19.4836 75.6064 20.2902 76.2114 20.8642C76.8164 21.4381 77.5687 21.7251 78.4685 21.7251Z"
        fill="white"
      />
      <path
        d="M92.213 24.5639C91.0651 24.5639 90.0335 24.3312 89.1182 23.8658C88.203 23.4005 87.4817 22.7257 86.9543 21.8415C86.4269 20.9573 86.1631 19.8947 86.1631 18.6537V18.2814C86.1631 17.0404 86.4269 15.9778 86.9543 15.0936C87.4817 14.2094 88.203 13.5346 89.1182 13.0692C90.0335 12.6039 91.0651 12.3712 92.213 12.3712C93.3609 12.3712 94.3924 12.6039 95.3077 13.0692C96.2229 13.5346 96.9442 14.2094 97.4717 15.0936C97.9991 15.9778 98.2628 17.0404 98.2628 18.2814V18.6537C98.2628 19.8947 97.9991 20.9573 97.4717 21.8415C96.9442 22.7257 96.2229 23.4005 95.3077 23.8658C94.3924 24.3312 93.3609 24.5639 92.213 24.5639ZM92.213 21.9578C93.1127 21.9578 93.8573 21.6708 94.4467 21.0969C95.0362 20.5074 95.3309 19.6697 95.3309 18.5839V18.3512C95.3309 17.2653 95.0362 16.4354 94.4467 15.8614C93.8728 15.272 93.1282 14.9772 92.213 14.9772C91.3132 14.9772 90.5687 15.272 89.9792 15.8614C89.3897 16.4354 89.095 17.2653 89.095 18.3512V18.5839C89.095 19.6697 89.3897 20.5074 89.9792 21.0969C90.5687 21.6708 91.3132 21.9578 92.213 21.9578Z"
        fill="white"
      />
      <path
        d="M99.9217 24.2381V12.6969H102.854V24.2381H99.9217ZM101.388 11.3474C100.86 11.3474 100.411 11.1767 100.038 10.8354C99.6813 10.4942 99.5029 10.0443 99.5029 9.48587C99.5029 8.92743 99.6813 8.47757 100.038 8.1363C100.411 7.79503 100.86 7.62439 101.388 7.62439C101.931 7.62439 102.381 7.79503 102.737 8.1363C103.094 8.47757 103.273 8.92743 103.273 9.48587C103.273 10.0443 103.094 10.4942 102.737 10.8354C102.381 11.1767 101.931 11.3474 101.388 11.3474Z"
        fill="white"
      />
      <path
        d="M105.056 28.8918V12.6969H107.941V14.093H108.36C108.623 13.6432 109.034 13.2476 109.593 12.9063C110.151 12.5496 110.95 12.3712 111.99 12.3712C112.92 12.3712 113.781 12.6039 114.572 13.0692C115.364 13.5191 116 14.1861 116.48 15.0703C116.961 15.9545 117.202 17.0249 117.202 18.2814V18.6537C117.202 19.9102 116.961 20.9805 116.48 21.8647C116 22.7489 115.364 23.4237 114.572 23.8891C113.781 24.3389 112.92 24.5639 111.99 24.5639C111.292 24.5639 110.702 24.4786 110.221 24.3079C109.756 24.1528 109.376 23.9511 109.081 23.7029C108.802 23.4392 108.577 23.1755 108.406 22.9118H107.987V28.8918H105.056ZM111.105 22.0043C112.021 22.0043 112.773 21.7174 113.362 21.1434C113.967 20.5539 114.27 19.7008 114.27 18.5839V18.3512C114.27 17.2343 113.967 16.3889 113.362 15.8149C112.757 15.2254 112.005 14.9307 111.105 14.9307C110.206 14.9307 109.453 15.2254 108.848 15.8149C108.243 16.3889 107.941 17.2343 107.941 18.3512V18.5839C107.941 19.7008 108.243 20.5539 108.848 21.1434C109.453 21.7174 110.206 22.0043 111.105 22.0043Z"
        fill="white"
      />
      <path
        d="M123.64 24.5639C122.135 24.5639 120.902 24.2381 119.94 23.5866C118.979 22.9351 118.397 22.0043 118.195 20.7944L120.894 20.0963C121.003 20.6393 121.181 21.0658 121.43 21.3761C121.693 21.6863 122.011 21.9113 122.384 22.0509C122.771 22.175 123.19 22.237 123.64 22.237C124.323 22.237 124.827 22.1207 125.152 21.888C125.478 21.6398 125.641 21.3373 125.641 20.9805C125.641 20.6237 125.486 20.3523 125.176 20.1661C124.865 19.9645 124.369 19.8016 123.687 19.6775L123.035 19.5611C122.228 19.406 121.492 19.1966 120.825 18.9329C120.157 18.6537 119.622 18.2736 119.219 17.7927C118.816 17.3119 118.614 16.6914 118.614 15.9313C118.614 14.7833 119.033 13.9069 119.871 13.3019C120.708 12.6814 121.81 12.3712 123.175 12.3712C124.462 12.3712 125.533 12.6581 126.386 13.2321C127.239 13.8061 127.797 14.5584 128.061 15.4892L125.339 16.3268C125.215 15.7374 124.959 15.3185 124.571 15.0703C124.198 14.8221 123.733 14.698 123.175 14.698C122.616 14.698 122.19 14.7989 121.895 15.0005C121.6 15.1867 121.453 15.4504 121.453 15.7916C121.453 16.1639 121.608 16.4432 121.918 16.6293C122.228 16.7999 122.647 16.9318 123.175 17.0249L123.826 17.1412C124.695 17.2963 125.478 17.5058 126.176 17.7695C126.89 18.0177 127.448 18.3822 127.852 18.8631C128.27 19.3285 128.48 19.9645 128.48 20.7711C128.48 21.9811 128.038 22.9196 127.154 23.5866C126.285 24.2381 125.114 24.5639 123.64 24.5639Z"
        fill="white"
      />
      <path
        d="M134.4 24.4243C133.5 24.4243 132.709 24.2226 132.026 23.8193C131.359 23.4005 130.84 22.8265 130.467 22.0974C130.095 21.3683 129.909 20.5307 129.909 19.5844V12.6969H132.841V19.3517C132.841 20.2204 133.05 20.8719 133.469 21.3063C133.903 21.7406 134.516 21.9578 135.307 21.9578C136.207 21.9578 136.905 21.6631 137.401 21.0736C137.898 20.4686 138.146 19.6309 138.146 18.5606V12.6969H141.078V24.2381H138.192V22.7257H137.774C137.588 23.1135 137.238 23.4935 136.727 23.8658C136.215 24.2381 135.439 24.4243 134.4 24.4243Z"
        fill="white"
      />
      <path
        d="M143.293 24.2381V12.6969H146.178V13.9534H146.597C146.799 13.5656 147.133 13.2321 147.598 12.9529C148.063 12.6581 148.676 12.5108 149.436 12.5108C150.258 12.5108 150.918 12.6737 151.414 12.9994C151.91 13.3097 152.29 13.7207 152.554 14.2327H152.973C153.237 13.7363 153.609 13.3252 154.09 12.9994C154.571 12.6737 155.253 12.5108 156.137 12.5108C156.851 12.5108 157.495 12.6659 158.069 12.9762C158.658 13.2709 159.124 13.7285 159.465 14.349C159.822 14.954 160 15.7218 160 16.6526V24.2381H157.068V16.862C157.068 16.226 156.905 15.7529 156.58 15.4426C156.254 15.1169 155.796 14.954 155.207 14.954C154.54 14.954 154.02 15.1711 153.648 15.6055C153.291 16.0243 153.113 16.6293 153.113 17.4204V24.2381H150.181V16.862C150.181 16.226 150.018 15.7529 149.692 15.4426C149.366 15.1169 148.909 14.954 148.319 14.954C147.652 14.954 147.132 15.1711 146.76 15.6055C146.403 16.0243 146.225 16.6293 146.225 17.4204V24.2381H143.293Z"
        fill="white"
      />
      <path
        d="M38.7812 15.5127C38.7812 11.3985 37.1468 7.45275 34.2376 4.54356C31.3284 1.63437 27.3827 5.39515e-07 23.2685 0C19.1543 -5.39514e-07 15.2086 1.63437 12.2994 4.54356C9.39023 7.45275 7.75586 11.3985 7.75586 15.5127H12.6036C14.21 15.5127 15.4628 14.1665 16.0512 12.6717C16.4375 11.6903 17.0237 10.7884 17.7839 10.0281C19.2385 8.57352 21.2114 7.75634 23.2685 7.75634C25.3256 7.75634 27.2985 8.57352 28.7531 10.0281C30.2077 11.4827 31.0248 13.4556 31.0248 15.5127H38.7812Z"
        fill="url(#paint0_linear_3_14)"
      />
      <path
        d="M29.8444 21.4491C30.624 19.567 31.0253 17.5498 31.0253 15.5127H38.7808C38.7808 24.0801 31.8355 31.0253 23.2681 31.0253C21.9264 31.0253 20.6244 30.855 19.3828 30.5348C20.0853 30.3538 20.7758 30.1233 21.449 29.8445C23.3311 29.0649 25.0412 27.9223 26.4817 26.4818C27.9222 25.0413 29.0649 23.3312 29.8444 21.4491Z"
        fill="#FBCF8E"
      />
      <path
        d="M0 15.5126C-2.91433e-07 17.5498 0.401247 19.567 1.18083 21.4491C1.96042 23.3312 3.10307 25.0413 4.54356 26.4818C5.98404 27.9222 7.69415 29.0649 9.57623 29.8445C11.4583 30.6241 13.4755 31.0253 15.5127 31.0253C17.5498 31.0253 19.567 30.6241 21.4491 29.8445C23.3312 29.0649 25.0413 27.9222 26.4818 26.4818C27.9223 25.0413 29.0649 23.3312 29.8445 21.4491C30.6241 19.567 31.0254 17.5498 31.0254 15.5126H26.1776C24.5712 15.5126 23.3184 16.8588 22.73 18.3535C22.7133 18.3961 22.6961 18.4385 22.6786 18.4809C22.2888 19.4219 21.7175 20.277 20.9972 20.9972C20.277 21.7174 19.4219 22.2888 18.4809 22.6786C17.5399 23.0684 16.5313 23.269 15.5127 23.269C14.4941 23.269 13.4855 23.0684 12.5445 22.6786C11.6034 22.2888 10.7484 21.7174 10.0281 20.9972C9.30787 20.277 8.73655 19.4219 8.34676 18.4809C7.95696 17.5398 7.75634 16.5312 7.75634 15.5126H0Z"
        fill="url(#paint1_linear_3_14)"
      />
      <path
        d="M0.00195312 15.5127C0.00195312 6.94524 6.9472 0 15.5146 0C16.856 0 18.1576 0.170246 19.3991 0.490323C16.7352 1.17657 14.2778 2.56535 12.2995 4.54357C9.39029 7.45273 7.75594 11.3985 7.75594 15.5127H0.00195312Z"
        fill="#73E5E2"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_3_14"
        x1="38.7812"
        y1="7.75634"
        x2="7.75586"
        y2="7.75634"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#73E5E2" />
        <stop offset="1" stop-color="#394F87" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_3_14"
        x1="1.01712e-06"
        y1="23.269"
        x2="31.0254"
        y2="23.269"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FBDC8E" />
        <stop offset="1" stop-color="#FB958E" />
      </linearGradient>
      <clipPath id="clip0_3_14">
        <rect width="160" height="32" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const Navbar = () => {
  const [menu, setMenu] = useState<Boolean>(false);
  const checkScroll = () => {
    !menu
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "scroll");
  };
  checkScroll();
  return (
    <div
      className="navigationContainer"
      style={{ height: `${!menu ? "100vh" : "10vh"}` }}
    >
      <div className="logoContainer">
        <span>{logo}</span>
        <span className="burgurmenu">
          {!menu ? (
            <RxCross1 onClick={() => setMenu(!menu)} />
          ) : (
            <RxHamburgerMenu onClick={() => setMenu(!menu)} />
          )}
        </span>
      </div>
      <div
        className="mobileMenu"
        style={menu ? { opacity: "0" } : { opacity: "1" }}
      >
        <div className="menus">
          <li>Home</li>
          <li>About Us</li>
          <li>Pricing</li>
          <li>Contact Us</li>
        </div>
        <Button btnText={"Contact Us"} btnBorder={"1px solid white"} />
      </div>
      <div className="menuContainer">
        <div className="menus">
          <li>Home</li>
          <li>About Us</li>
          <li>Pricing</li>
          <li>Contact Us</li>
        </div>
        <Button btnText={"Contact Us"} btnBorder={"1px solid white"} />
      </div>
    </div>
  );
};

export default Navbar;
