import { Link, Outlet, useLocation } from "react-router-dom";
import signupHero from "../assets/images/signup-hero.png";
import loginHero from "../assets/images/login-hero.png";
import forgotPassHero from "../assets/images/forgot-password-hero.png";
import changePhoneHero from "../assets/images/change-phone-hero.png";

const AuthLayout = () => {
  const { pathname } = useLocation();

  const imageSelector = (path: string) => {
    const image: { [key: string]: string } = {
      "/": loginHero,
      "/login": loginHero,
      "/signup": signupHero,
      "/forgot-password": forgotPassHero,
      "/change-phone": changePhoneHero,
    };
    return image[path];
  };

  return (
    <section className="w-full min-h-screen lg:grid lg:grid-cols-2">
      <div className="w-full h-full hidden lg:grid grid-rows-[auto_1fr_auto] p-10 2xl:p-20">
        {/* begin:: Logo */}
        <div className="w-full flex justify-center items-center">
          <svg
            width="196"
            height="40"
            viewBox="0 0 196 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M98.7794 22.1875C99.6736 22.1875 100.14 22.6542 100.14 23.5478V25.4431C100.14 26.1037 99.9069 26.6482 99.4795 27.1149L97.8469 28.9021C97.2249 29.5632 96.6806 29.9133 96.2139 29.9133H85.4077C84.9409 29.9133 84.3967 29.5632 83.7747 28.9021L82.1421 27.1149C81.7146 26.6482 81.4813 26.1037 81.4813 25.4431V14.6757H78.9547C78.0605 14.6757 77.5938 14.209 77.5938 13.3144V11.2545C77.5938 10.3607 78.0605 9.89397 78.9547 9.89397H81.4813V6.97837C81.4813 6.08456 81.9476 5.61783 82.8416 5.61783H85.4077C86.3013 5.61783 86.768 6.08456 86.768 6.97837V11.954C86.768 12.2266 86.8844 12.343 87.1566 12.343H87.7786C87.9731 12.343 88.1284 12.2653 88.2453 12.1093L89.4112 10.7489C89.9166 10.1658 90.461 9.89397 91.0442 9.89397H98.3909C99.285 9.89397 99.7517 10.3607 99.7517 11.2545V13.3144C99.7517 14.209 99.285 14.6757 98.3909 14.6757H86.768V25.1316H95.1645V23.5478C95.1645 22.6542 95.6308 22.1875 96.5248 22.1875H98.7794Z"
              fill="#00636D"
            />
            <path
              d="M106.24 29.9132C105.346 29.9132 104.879 29.4465 104.879 28.5529V11.2544C104.879 10.3608 105.346 9.89404 106.24 9.89404H108.805C109.699 9.89404 110.166 10.3608 110.166 11.2544V11.9539C110.166 12.2265 110.282 12.3429 110.554 12.3429H111.176C111.371 12.3429 111.526 12.2654 111.643 12.1093L112.809 10.7488C113.314 10.1657 113.858 9.89404 114.441 9.89404H120.817C121.711 9.89404 122.177 10.3608 122.177 11.2544V13.3531C122.177 14.2477 121.711 14.7144 120.817 14.7144H110.554C110.282 14.7144 110.166 14.8308 110.166 15.1027V28.5529C110.166 29.4465 109.699 29.9132 108.805 29.9132H106.24Z"
              fill="#00636D"
            />
            <path
              d="M44.3455 8.34795L42.8453 10.9459H40.4207L38.9211 8.34795H35.0317L33.0877 11.7155L35.0317 15.0835H38.9211L40.4213 12.4854H42.8453L44.3455 15.0835H65.1166C63.8338 12.8413 62.5569 10.5955 61.2835 8.34795H44.3455ZM66.6557 17.7669C66.4365 17.3859 66.2177 17.0045 65.9988 16.623L32.7276 16.6228L31.2271 19.2209H27.7485L26.2481 16.6228H11.6388L9.69415 19.9906L11.6388 23.3584H26.2481L27.7485 20.7605H31.2279L32.7276 23.3578L65.9616 23.3584C66.1816 22.9738 66.4014 22.5887 66.6218 22.2041C67.4885 20.6923 67.5328 19.2911 66.6557 17.7669ZM37.7068 33.1724L36.2063 35.7705H33.7818L32.2813 33.1724H21.7541L19.8095 36.5401L21.7541 39.9077H32.2813L33.7818 37.31H36.2063L37.7068 39.9077C41.0704 39.9075 50.6492 40 53.9287 40C55.6846 40 56.9274 39.3543 57.7867 37.8218C58.656 36.2713 59.5263 34.7216 60.398 33.1728L37.7068 33.1724ZM27.7485 24.8975L26.2481 27.4954H23.8233L22.3239 24.8975H18.4346L16.4909 28.2651L18.4346 31.6331H22.3239L23.8241 29.0349H26.2481L27.7485 31.6331L61.2653 31.6333C62.5328 29.3855 63.8049 27.1399 65.0827 24.8979C65.0827 24.8979 39.9199 24.8975 27.7485 24.8975ZM2.29854 16.6228L0.354675 19.9906L2.29854 23.3584H6.18766L8.13172 19.9906L6.18766 16.6228H2.29854ZM20.6642 6.80844L22.1644 4.21051H24.5884L26.0888 6.80844H60.412C59.5371 5.26196 58.6632 3.71488 57.7899 2.1678C56.9292 0.642841 55.6711 -0.0108261 53.9217 0.000137329C48.7757 0.0322227 26.0888 0.0730743 26.0888 0.0730743L24.5884 2.67101H22.1637L20.6642 0.0730743H16.7751L14.831 3.44066L16.7751 6.80844H20.6642ZM23.0455 11.7155L24.9894 15.0835H28.8785L30.8226 11.7155L28.8785 8.34795H24.9894L23.0455 11.7155ZM15.6003 33.1724L17.5441 36.5401L15.6003 39.9077H11.7112L9.76689 36.5401L11.7112 33.1724H15.6003Z"
              fill="#22B789"
            />
            <path
              d="M131.231 25.1187H139.277L142.232 19.495L139.277 14.6756H131.231V25.1187ZM127.304 36.8612C126.411 36.8612 125.944 36.3945 125.944 35.5009V11.2544C125.944 10.3606 126.411 9.89383 127.304 9.89383H140.988C141.726 9.89383 142.271 10.2045 142.621 10.8265L147.246 18.5625C147.596 19.1845 147.596 19.8065 147.246 20.4284L142.621 28.967C142.271 29.589 141.726 29.9002 140.988 29.9002H135.507C134.924 29.9002 134.379 29.6276 133.874 29.0445L132.708 27.6453C132.592 27.49 132.436 27.4125 132.241 27.4125H131.619C131.348 27.4125 131.231 27.5289 131.231 27.8005V35.5009C131.231 36.3945 130.764 36.8612 129.87 36.8612H127.304Z"
              fill="#22B789"
            />
            <path
              d="M158.866 25.1317H164.813L167.806 19.8842L164.813 14.6756H158.866L155.912 19.8842L158.866 25.1317ZM157 29.9132C156.261 29.9132 155.717 29.6029 155.367 28.9799L150.741 20.8169C150.392 20.1949 150.392 19.5727 150.741 18.9509L155.367 10.8265C155.717 10.2045 156.261 9.89404 157 9.89404H166.679C167.418 9.89404 167.962 10.2045 168.312 10.8265L172.937 18.9509C173.287 19.5727 173.287 20.1949 172.937 20.8169L168.312 28.9799C167.962 29.6029 167.418 29.9132 166.679 29.9132H157Z"
              fill="#22B789"
            />
            <path
              d="M177.987 29.9132C177.093 29.9132 176.627 29.4465 176.627 28.5529V26.7646C176.627 25.871 177.093 25.4043 177.987 25.4043H189.533L190.543 23.7325L189.533 22.0606H180.009C179.309 22.0606 178.765 21.7501 178.376 21.1668L175.616 16.9684C175.227 16.3464 175.227 15.7246 175.616 15.1027L178.376 10.7877C178.726 10.2045 179.27 9.89404 180.009 9.89404H192.098C192.992 9.89404 193.459 10.3608 193.459 11.2544V13.0426C193.459 13.9364 192.992 14.403 192.098 14.403H181.408L180.436 16.0359L181.408 17.7068H190.97C191.671 17.7068 192.215 18.0183 192.604 18.6014L195.324 22.8389C195.752 23.4606 195.752 24.0826 195.324 24.7046L192.604 29.0196C192.253 29.6027 191.709 29.9132 190.97 29.9132H177.987Z"
              fill="#22B789"
            />
          </svg>
        </div>
        {/* end:: Logo */}
        {/* begin:: Hero section */}

        <div className="w-full h-full flex justify-center items-center relative">
          <img
            className="w-full max-w-[700px]"
            src={imageSelector(pathname)}
            alt=""
          />
          {(pathname === "/" ||
            pathname === "/login" ||
            pathname === "/signup") && (
            <div className="bg-gray-100 w-2/3 lg:text-sm bg-opacity-50 backdrop-blur-sm p-6 rounded-2.5xl absolute top-[70%]">
              <span className="flex gap-x-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.7017 9.10048C15.4017 9.09648 15.0717 9.09548 14.6957 9.09548H9.30375C8.92975 9.09548 8.60275 9.09648 8.30475 9.10048V7.48848C8.33875 5.47648 9.94375 3.88148 11.9567 3.85548H12.0037C14.0217 3.85548 15.6768 5.48348 15.7017 7.49648V9.10048ZM15.0717 14.0755L11.6547 17.4965C11.5138 17.6365 11.3227 17.7165 11.1237 17.7165C10.9237 17.7165 10.7318 17.6355 10.5917 17.4945L8.93175 15.8235C8.63975 15.5295 8.64175 15.0545 8.93575 14.7625C9.22975 14.4705 9.70475 14.4735 9.99675 14.7665L11.1248 15.9035L14.0098 13.0145C14.3027 12.7215 14.7787 12.7215 15.0707 13.0145C15.3637 13.3065 15.3637 13.7825 15.0717 14.0755ZM19.5597 11.0775C19.2127 10.3595 18.6298 9.77948 17.9237 9.44648C17.7028 9.33848 17.4657 9.26648 17.2017 9.21548V7.48748C17.1657 4.62248 14.8077 2.34948 11.9387 2.35548C9.10775 2.39148 6.85275 4.63448 6.80475 7.47548V9.21348C6.53875 9.26448 6.30175 9.33648 6.08075 9.44348C5.36975 9.77948 4.78675 10.3595 4.43875 11.0795C4.09375 11.8025 4.09375 12.6395 4.09375 14.3055V16.4355C4.09375 18.1105 4.09375 18.9515 4.43775 19.6605C4.77575 20.3705 5.35675 20.9545 6.08175 21.3075C6.79875 21.6455 7.63575 21.6455 9.30375 21.6455H14.6958C16.3638 21.6455 17.2008 21.6455 17.9237 21.3045C18.6418 20.9545 19.2227 20.3705 19.5588 19.6645C19.9058 18.9515 19.9058 18.1105 19.9058 16.4355V14.3055C19.9058 12.6395 19.9057 11.8025 19.5597 11.0775Z"
                    fill="#00636D"
                  />
                </svg>

                <a
                  href="https://www.trpos.com"
                  target="_blank"
                  className="mb-6 font-normal"
                >
                  <span className="text-primary">https://</span>www.trpos.com
                </a>
              </span>
              <hr />
              <ul className="ps-5 list-disc opacity-60 mt-6 gap-y-4">
                <li className="mb-2">6 adet rakamdan oluşmalıdır.</li>
                <li className="mb-2"> ⁠En az 4 farklı rakam içermelidir.</li>
                <li>İlk 2 hane ile son 2 hane aynı olmamalıdır.</li>
              </ul>
            </div>
          )}
        </div>
        {/* end:: Hero section */}
      </div>

      <div
        className={`${
          pathname === "/forgot-password" || pathname === "/change-phone"
            ? ""
            : "justify-between"
        } w-full min-h-screen flex flex-col  items-center gap-y-4 bg-base-gray p-4 sm:p-10`}
      >
        <div className="lg:invisible">
          <svg
            width="196"
            height="40"
            viewBox="0 0 196 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M98.7794 22.1875C99.6736 22.1875 100.14 22.6542 100.14 23.5478V25.4431C100.14 26.1037 99.9069 26.6482 99.4795 27.1149L97.8469 28.9021C97.2249 29.5632 96.6806 29.9133 96.2139 29.9133H85.4077C84.9409 29.9133 84.3967 29.5632 83.7747 28.9021L82.1421 27.1149C81.7146 26.6482 81.4813 26.1037 81.4813 25.4431V14.6757H78.9547C78.0605 14.6757 77.5938 14.209 77.5938 13.3144V11.2545C77.5938 10.3607 78.0605 9.89397 78.9547 9.89397H81.4813V6.97837C81.4813 6.08456 81.9476 5.61783 82.8416 5.61783H85.4077C86.3013 5.61783 86.768 6.08456 86.768 6.97837V11.954C86.768 12.2266 86.8844 12.343 87.1566 12.343H87.7786C87.9731 12.343 88.1284 12.2653 88.2453 12.1093L89.4112 10.7489C89.9166 10.1658 90.461 9.89397 91.0442 9.89397H98.3909C99.285 9.89397 99.7517 10.3607 99.7517 11.2545V13.3144C99.7517 14.209 99.285 14.6757 98.3909 14.6757H86.768V25.1316H95.1645V23.5478C95.1645 22.6542 95.6308 22.1875 96.5248 22.1875H98.7794Z"
              fill="#00636D"
            />
            <path
              d="M106.24 29.9132C105.346 29.9132 104.879 29.4465 104.879 28.5529V11.2544C104.879 10.3608 105.346 9.89404 106.24 9.89404H108.805C109.699 9.89404 110.166 10.3608 110.166 11.2544V11.9539C110.166 12.2265 110.282 12.3429 110.554 12.3429H111.176C111.371 12.3429 111.526 12.2654 111.643 12.1093L112.809 10.7488C113.314 10.1657 113.858 9.89404 114.441 9.89404H120.817C121.711 9.89404 122.177 10.3608 122.177 11.2544V13.3531C122.177 14.2477 121.711 14.7144 120.817 14.7144H110.554C110.282 14.7144 110.166 14.8308 110.166 15.1027V28.5529C110.166 29.4465 109.699 29.9132 108.805 29.9132H106.24Z"
              fill="#00636D"
            />
            <path
              d="M44.3455 8.34795L42.8453 10.9459H40.4207L38.9211 8.34795H35.0317L33.0877 11.7155L35.0317 15.0835H38.9211L40.4213 12.4854H42.8453L44.3455 15.0835H65.1166C63.8338 12.8413 62.5569 10.5955 61.2835 8.34795H44.3455ZM66.6557 17.7669C66.4365 17.3859 66.2177 17.0045 65.9988 16.623L32.7276 16.6228L31.2271 19.2209H27.7485L26.2481 16.6228H11.6388L9.69415 19.9906L11.6388 23.3584H26.2481L27.7485 20.7605H31.2279L32.7276 23.3578L65.9616 23.3584C66.1816 22.9738 66.4014 22.5887 66.6218 22.2041C67.4885 20.6923 67.5328 19.2911 66.6557 17.7669ZM37.7068 33.1724L36.2063 35.7705H33.7818L32.2813 33.1724H21.7541L19.8095 36.5401L21.7541 39.9077H32.2813L33.7818 37.31H36.2063L37.7068 39.9077C41.0704 39.9075 50.6492 40 53.9287 40C55.6846 40 56.9274 39.3543 57.7867 37.8218C58.656 36.2713 59.5263 34.7216 60.398 33.1728L37.7068 33.1724ZM27.7485 24.8975L26.2481 27.4954H23.8233L22.3239 24.8975H18.4346L16.4909 28.2651L18.4346 31.6331H22.3239L23.8241 29.0349H26.2481L27.7485 31.6331L61.2653 31.6333C62.5328 29.3855 63.8049 27.1399 65.0827 24.8979C65.0827 24.8979 39.9199 24.8975 27.7485 24.8975ZM2.29854 16.6228L0.354675 19.9906L2.29854 23.3584H6.18766L8.13172 19.9906L6.18766 16.6228H2.29854ZM20.6642 6.80844L22.1644 4.21051H24.5884L26.0888 6.80844H60.412C59.5371 5.26196 58.6632 3.71488 57.7899 2.1678C56.9292 0.642841 55.6711 -0.0108261 53.9217 0.000137329C48.7757 0.0322227 26.0888 0.0730743 26.0888 0.0730743L24.5884 2.67101H22.1637L20.6642 0.0730743H16.7751L14.831 3.44066L16.7751 6.80844H20.6642ZM23.0455 11.7155L24.9894 15.0835H28.8785L30.8226 11.7155L28.8785 8.34795H24.9894L23.0455 11.7155ZM15.6003 33.1724L17.5441 36.5401L15.6003 39.9077H11.7112L9.76689 36.5401L11.7112 33.1724H15.6003Z"
              fill="#22B789"
            />
            <path
              d="M131.231 25.1187H139.277L142.232 19.495L139.277 14.6756H131.231V25.1187ZM127.304 36.8612C126.411 36.8612 125.944 36.3945 125.944 35.5009V11.2544C125.944 10.3606 126.411 9.89383 127.304 9.89383H140.988C141.726 9.89383 142.271 10.2045 142.621 10.8265L147.246 18.5625C147.596 19.1845 147.596 19.8065 147.246 20.4284L142.621 28.967C142.271 29.589 141.726 29.9002 140.988 29.9002H135.507C134.924 29.9002 134.379 29.6276 133.874 29.0445L132.708 27.6453C132.592 27.49 132.436 27.4125 132.241 27.4125H131.619C131.348 27.4125 131.231 27.5289 131.231 27.8005V35.5009C131.231 36.3945 130.764 36.8612 129.87 36.8612H127.304Z"
              fill="#22B789"
            />
            <path
              d="M158.866 25.1317H164.813L167.806 19.8842L164.813 14.6756H158.866L155.912 19.8842L158.866 25.1317ZM157 29.9132C156.261 29.9132 155.717 29.6029 155.367 28.9799L150.741 20.8169C150.392 20.1949 150.392 19.5727 150.741 18.9509L155.367 10.8265C155.717 10.2045 156.261 9.89404 157 9.89404H166.679C167.418 9.89404 167.962 10.2045 168.312 10.8265L172.937 18.9509C173.287 19.5727 173.287 20.1949 172.937 20.8169L168.312 28.9799C167.962 29.6029 167.418 29.9132 166.679 29.9132H157Z"
              fill="#22B789"
            />
            <path
              d="M177.987 29.9132C177.093 29.9132 176.627 29.4465 176.627 28.5529V26.7646C176.627 25.871 177.093 25.4043 177.987 25.4043H189.533L190.543 23.7325L189.533 22.0606H180.009C179.309 22.0606 178.765 21.7501 178.376 21.1668L175.616 16.9684C175.227 16.3464 175.227 15.7246 175.616 15.1027L178.376 10.7877C178.726 10.2045 179.27 9.89404 180.009 9.89404H192.098C192.992 9.89404 193.459 10.3608 193.459 11.2544V13.0426C193.459 13.9364 192.992 14.403 192.098 14.403H181.408L180.436 16.0359L181.408 17.7068H190.97C191.671 17.7068 192.215 18.0183 192.604 18.6014L195.324 22.8389C195.752 23.4606 195.752 24.0826 195.324 24.7046L192.604 29.0196C192.253 29.6027 191.709 29.9132 190.97 29.9132H177.987Z"
              fill="#22B789"
            />
          </svg>
        </div>
        <div
          className={`${
            pathname === "/forgot-password" ||
            (pathname === "/change-phone" && "mt-[12%]")
          }`}
        >
          <Outlet />
        </div>

        {/* begin:: navigation link */}
        <p>
          {(pathname === "/login" || pathname === "/") && (
            <p className="text-sm">
              Hesabın yok mu?{" "}
              <Link to={"signup"} className="text-primary">
                Kayıt Ol
              </Link>
            </p>
          )}
          {pathname === "/signup" && (
            <p className="text-sm">
              Hesabın var mı?{" "}
              <Link to={"login"} className="text-primary">
                Giriş Yap
              </Link>
            </p>
          )}
          {(pathname === "/forgot-password" ||
            pathname === "/change-phone") && (
            <p className="text-sm">
              Bir sorun mu yaşıyorusun?{" "}
              <Link to={"login"} className="text-primary">
                İletişime Geç
              </Link>
            </p>
          )}
        </p>
        {/* end:: navigation link */}
      </div>
    </section>
  );
};

export default AuthLayout;
