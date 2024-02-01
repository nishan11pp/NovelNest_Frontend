import React from "react";

import { useNavigate } from "react-router-dom";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Img, Input, Text } from "components";
import Header from "components/Header";
import SignUpPage from '../../pages/SignUpPage/index';

const SignInPage = () => {
  const navigate = useNavigate();
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-white-A700 border border-gray-500 border-solid flex flex-col items-start justify-end mx-auto w-full">
        <div className="flex flex-col font-aladin gap-11 items-center w-full">
          <Header className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs2 w-full" />
          <div className="font-raleway md:h-[624px] sm:h-[644px] h-[857px] md:px-5 relative w-full">
            <Img
              className="absolute bottom-[0] h-[432px] inset-x-[0] mx-auto object-cover"
              src="images/img_vector_red_a200.png"
              alt="vector"
            />
            <div className="absolute bg-white-A700 flex flex-col md:gap-10 gap-[60px] inset-x-[0] items-center justify-start mx-auto p-[42px] md:px-10 sm:px-5 rounded-[14px] shadow-bs3 top-[6%] w-2/5">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                size="txtRalewayRomanExtraBold32"
              >
                Sign In to NovelNest{" "}
              </Text>
              <div className="flex flex-col items-start justify-start mb-[30px] w-[87%] md:w-full">
                <Text
                  className="text-black-900 text-lg"
                  size="txtRalewayRomanSemiBold18"
                >
                  E-mail
                </Text>
                <Input
                  name="email_One"
                  placeholder="name@gmail.com"
                  className="!placeholder:text-gray-400_01 !text-gray-400_01 font-semibold leading-[normal] p-0 text-left text-lg w-full"
                  wrapClassName="border border-gray-300 border-solid flex mt-3.5 rounded-[12px] w-full"
                  type="email"
                  suffix={
                    <Img
                      className="h-8 ml-[35px] my-auto"
                      src="images/img_evaemailfill.svg"
                      alt="eva:email-fill"
                    />
                  }
                  size="md"
                ></Input>
                <Text
                  className="mt-[30px] text-black-900 text-lg"
                  size="txtRalewayRomanSemiBold18"
                >
                  Password
                </Text>
                <Input
                  name="password_One"
                  placeholder="********************"
                  className="!placeholder:text-blue_gray-100 !text-blue_gray-100 font-extrabold leading-[normal] md:text-[22px] p-0 sm:text-xl text-2xl text-left w-full"
                  wrapClassName="border border-blue_gray-100_01 border-solid flex mt-[7px] rounded-[12px] w-full"
                  suffix={
                    <div className="h-[27px] mb-0.5 ml-[35px] w-[27px] bg-blue_gray-100">
                      <Img
                        className="h-[27px] my-auto"
                        src="images/img_vector.svg"
                        alt="Vector"
                      />
                    </div>
                  }
                  size="lg"
                ></Input>
                <Button
                  className="common-pointer cursor-pointer font-black leading-[normal] min-w-[412px] sm:min-w-full mt-[41px] sm:text-[17px] md:text-[19px] text-[21px] text-center relative ml-16"
                  onClick={() => navigate("/homepage")}
                  shape="round"
                  color="red_A200"
                  size="xl"
                  variant="fill"
                >
                  Sign In
                </Button>
                <div className="md:h-[110px] h-[70px] mt-10 relative w-full">
                 
                  <Button
                    className="common-pointer border border-gray-400_03 border-solid bottom-[3%] cursor-pointer flex h-max inset-[0] items-center justify-center m-auto mb-0.5 min-w-[412px] sm:min-w-full"
                    onClick={() => navigate("/signuppage")}

                    shape="round"
                    color="white_A700"
                    size="xl"
                    variant="fill"
                  >
                    <div className="!text-gray-400_02 font-bold leading-[normal] text-left text-lg">
                      Sign UP
                    </div>
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col md:gap-10 gap-[61px] items-center justify-start left-[5%] top-[5%] w-[14%]">
              <div className="flex flex-row items-start justify-between w-full">
                <Img
                  className="h-16 mt-[55px] w-16"
                  src="images/img_emojionegreenbook.svg"
                  alt="emojionegreenbo"
                />
                <Img
                  className="h-16 mb-[55px] w-16"
                  src="images/img_emojionebooks.svg"
                  alt="emojionebooks"
                />
              </div>
              <Img
                className="h-16 w-16"
                src="images/img_settings_lime_900.svg"
                alt="settings_One"
              />
            </div>
            <Img
              className="absolute h-16 inset-y-[0] left-[18%] my-auto w-16"
              src="images/img_emojionegreenbook_white_a700.svg"
              alt="emojionegreenbo_One"
            />
            <div className="absolute flex flex-col md:gap-10 gap-[134px] justify-start right-[11%] top-[0] w-[8%]">
              <Img
                className="h-[66px] mr-11 w-[66px]"
                src="images/img_notov1closedbook.svg"
                alt="notov1closedboo"
              />
              <Img
                className="h-16 md:ml-[0] ml-[46px] w-16"
                src="images/img_notov1bookmarktabs.svg"
                alt="notov1bookmarkt"
              />
            </div>
            <Img
              className="absolute h-16 right-[19%] top-[32%] w-16"
              src="images/img_emojionebluebook.svg"
              alt="emojioneblueboo"
            />
          </div>
        </div>
        <Button
          className="border-l-4 border-red-A200 border-solid cursor-pointer font-extrabold font-raleway leading-[normal] min-w-[148px] md:ml-[0] ml-[153px] mt-[100px] text-center text-xl"
          shape="square"
          color="white_A700_33"
          size="sm"
          variant="fill"
        >
          Newly Listed
        </Button>
        <div className="flex flex-col font-mulish md:gap-10 gap-[167px] items-center mt-[50px] w-full">
          <div className="md:gap-5 gap-[49px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center max-w-[1146px] min-h-[auto] mx-auto md:px-5 w-full">
            <div className="md:h-[350px] h-[356px] pb-[5px] relative w-full">
              <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[13px] rounded-lg w-full">
                <div className="flex flex-col items-start justify-start mb-0.5 mt-[209px] w-full">
                  <Text
                    className="text-lime-900_02 text-sm"
                    size="txtRalewayRomanBold14"
                  >
                    The Lord of the Rings
                  </Text>
                  <Text
                    className="mt-6 text-base text-blue_gray-400"
                    size="txtAlataRegular16"
                  >
                    J.R.R. Tolkien
                  </Text>
                  <div className="flex flex-row font-alata gap-[31px] items-end justify-between mt-3.5 w-full">
                    <Text
                      className="mb-0.5 mt-[13px] text-base text-green-A700"
                      size="txtAlataRegular16GreenA700"
                    >
                      <span className="text-green-A700 font-alata text-left font-normal">
                        Rs.
                      </span>
                      <span className="text-light_green-800_01 font-alata text-left font-normal">
                        {" "}
                      </span>
                      <span className="text-green-A700 font-raleway text-left font-bold">
                        70
                      </span>
                      <span className="text-gray-500_01 font-alata text-left font-normal">
                        /day
                      </span>
                    </Text>
                    <div className="bg-red-A200 flex flex-col h-[37px] md:h-auto items-center justify-center px-2 py-1 rounded-[5px] w-[51px]">
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowright.svg"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-gradient1  flex flex-col inset-x-[0] items-start justify-start mx-auto p-[18px] rounded-[3px] top-[0] w-full">
                <Img
                  className="h-[179px] md:h-auto ml-3.5 md:ml-[0] object-cover w-[77%]"
                  src="images/img_image4.png"
                  alt="imageFour"
                />
              </div>
            </div>
            <div className="md:h-[350px] h-[356px] pb-[5px] relative w-full">
              <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[13px] rounded-lg w-full">
                <div className="flex flex-col items-start justify-start mb-0.5 mt-[209px] w-full">
                  <Text
                    className="text-lime-900_02 text-sm w-full"
                    size="txtRalewayRomanBold14"
                  >
                    Breif answers to big questions
                  </Text>
                  <Text
                    className="mt-2 text-base text-blue_gray-400"
                    size="txtAlataRegular16"
                  >
                    Stephen Hawking
                  </Text>
                  <div className="flex flex-row font-alata gap-[31px] items-end justify-between mt-3.5 w-full">
                    <Text
                      className="mb-0.5 mt-[13px] text-base text-green-A700"
                      size="txtAlataRegular16GreenA700"
                    >
                      <span className="text-green-A700 font-alata text-left font-normal">
                        Rs.
                      </span>
                      <span className="text-light_green-800_01 font-alata text-left font-normal">
                        {" "}
                      </span>
                      <span className="text-green-A700 font-raleway text-left font-bold">
                        50
                      </span>
                      <span className="text-gray-500_01 font-alata text-left font-normal">
                        /day
                      </span>
                    </Text>
                    <div className="bg-red-A200 flex flex-col h-[37px] md:h-auto items-center justify-center px-2 py-1 rounded-[5px] w-[51px]">
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowright.svg"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-gradient1  flex flex-col inset-x-[0] items-start justify-start mx-auto p-[18px] rounded-[3px] top-[0] w-full">
                <Img
                  className="h-[179px] md:h-auto ml-3.5 md:ml-[0] object-cover w-[77%]"
                  src="images/img_image4_179x118.png"
                  alt="imageFour"
                />
              </div>
            </div>
            <div className="md:h-[350px] h-[356px] pb-[5px] relative w-full">
              <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[13px] rounded-lg w-full">
                <div className="flex flex-col items-start justify-start mb-0.5 mt-[209px] w-full">
                  <Text
                    className="text-lime-900_02 text-sm"
                    size="txtRalewayRomanBold14"
                  >
                    The Hypocrite World
                  </Text>
                  <Text
                    className="mt-6 text-base text-blue_gray-400"
                    size="txtAlataRegular16"
                  >
                    Sofia Hill
                  </Text>
                  <div className="flex flex-row font-alata gap-[31px] items-end justify-between mt-3.5 w-full">
                    <Text
                      className="mb-0.5 mt-[13px] text-base text-green-A700"
                      size="txtAlataRegular16GreenA700"
                    >
                      <span className="text-green-A700 font-alata text-left font-normal">
                        Rs.
                      </span>
                      <span className="text-light_green-800_01 font-alata text-left font-normal">
                        {" "}
                      </span>
                      <span className="text-green-A700 font-raleway text-left font-bold">
                        50
                      </span>
                      <span className="text-gray-500_01 font-alata text-left font-normal">
                        /day
                      </span>
                    </Text>
                    <div className="bg-red-A200 flex flex-col h-[37px] md:h-auto items-center justify-center px-2 py-1 rounded-[5px] w-[51px]">
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowright.svg"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-gradient1  flex flex-col inset-x-[0] items-start justify-start mx-auto p-[18px] rounded-[3px] top-[0] w-full">
                <Img
                  className="h-[179px] md:h-auto ml-3.5 md:ml-[0] object-cover w-[77%]"
                  src="images/img_image4_1.png"
                  alt="imageFour"
                />
              </div>
            </div>
            <div className="md:h-[350px] h-[356px] pb-[5px] relative w-full">
              <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[13px] rounded-lg w-full">
                <div className="flex flex-col items-start justify-start mb-0.5 mt-[209px] w-full">
                  <Text
                    className="text-lime-900_02 text-sm w-full"
                    size="txtRalewayRomanBold14"
                  >
                    Anya and the Nightingale
                  </Text>
                  <Text
                    className="mt-2 text-base text-blue_gray-400"
                    size="txtAlataRegular16"
                  >
                    Sofiya Pasternack
                  </Text>
                  <div className="flex flex-row font-alata gap-[31px] items-end justify-between mt-3.5 w-full">
                    <Text
                      className="mb-0.5 mt-[13px] text-base text-green-A700"
                      size="txtAlataRegular16GreenA700"
                    >
                      <span className="text-green-A700 font-alata text-left font-normal">
                        Rs.
                      </span>
                      <span className="text-light_green-800_01 font-alata text-left font-normal">
                        {" "}
                      </span>
                      <span className="text-green-A700 font-raleway text-left font-bold">
                        30
                      </span>
                      <span className="text-gray-500_01 font-alata text-left font-normal">
                        /day
                      </span>
                    </Text>
                    <div className="bg-red-A200 flex flex-col h-[37px] md:h-auto items-center justify-center px-2 py-1 rounded-[5px] w-[51px]">
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowright.svg"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-gradient1  flex flex-col inset-x-[0] items-start justify-start mx-auto p-[18px] rounded-[3px] top-[0] w-full">
                <Img
                  className="h-[179px] md:h-auto ml-3.5 md:ml-[0] object-cover w-[77%]"
                  src="images/img_image4_2.png"
                  alt="imageFour"
                />
              </div>
            </div>
            <div className="md:h-[350px] h-[356px] pb-[5px] relative w-full">
              <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[13px] rounded-lg w-full">
                <div className="flex flex-col items-start justify-start mb-0.5 mt-[209px] w-full">
                  <Text
                    className="text-lime-900_02 text-sm"
                    size="txtRalewayRomanBold14"
                  >
                    Lunar Storm
                  </Text>
                  <Text
                    className="mt-6 text-base text-blue_gray-400"
                    size="txtAlataRegular16"
                  >
                    Terry Crosby
                  </Text>
                  <div className="flex flex-row font-alata gap-8 items-end justify-between mt-3.5 w-full">
                    <Text
                      className="mb-0.5 mt-[13px] text-base text-green-A700"
                      size="txtAlataRegular16GreenA700"
                    >
                      <span className="text-green-A700 font-alata text-left font-normal">
                        Rs.
                      </span>
                      <span className="text-light_green-800_01 font-alata text-left font-normal">
                        {" "}
                      </span>
                      <span className="text-green-A700 font-raleway text-left font-bold">
                        35
                      </span>
                      <span className="text-gray-500_01 font-alata text-left font-normal">
                        /day
                      </span>
                    </Text>
                    <div className="bg-red-A200 flex flex-col h-[37px] md:h-auto items-center justify-center px-2 py-1 rounded-[5px] w-[51px]">
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowright.svg"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-gradient1  flex flex-col inset-x-[0] items-start justify-start mx-auto p-[18px] rounded-[3px] top-[0] w-full">
                <Img
                  className="h-[179px] md:h-auto ml-3.5 md:ml-[0] object-cover w-[77%]"
                  src="images/img_image4_3.png"
                  alt="imageFour"
                />
              </div>
            </div>
            <div className="md:h-[350px] h-[356px] pb-[5px] relative w-full">
              <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[13px] rounded-lg w-full">
                <div className="flex flex-col items-start justify-start mb-0.5 mt-[209px] w-full">
                  <Text
                    className="text-lime-900_02 text-sm"
                    size="txtRalewayRomanBold14"
                  >
                    Lunar Storm
                  </Text>
                  <Text
                    className="mt-6 text-base text-blue_gray-400"
                    size="txtAlataRegular16"
                  >
                    Terry Crosby
                  </Text>
                  <div className="flex flex-row font-alata gap-8 items-end justify-between mt-3.5 w-full">
                    <Text
                      className="mb-0.5 mt-[13px] text-base text-green-A700"
                      size="txtAlataRegular16GreenA700"
                    >
                      <span className="text-green-A700 font-alata text-left font-normal">
                        Rs.
                      </span>
                      <span className="text-light_green-800_01 font-alata text-left font-normal">
                        {" "}
                      </span>
                      <span className="text-green-A700 font-raleway text-left font-bold">
                        35
                      </span>
                      <span className="text-gray-500_01 font-alata text-left font-normal">
                        /day
                      </span>
                    </Text>
                    <div className="bg-red-A200 flex flex-col h-[37px] md:h-auto items-center justify-center px-2 py-1 rounded-[5px] w-[51px]">
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowright.svg"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-gradient1  flex flex-col inset-x-[0] items-start justify-start mx-auto p-[18px] rounded-[3px] top-[0] w-full">
                <Img
                  className="h-[179px] md:h-auto ml-3.5 md:ml-[0] object-cover w-[77%]"
                  src="images/img_image4_3.png"
                  alt="imageFour"
                />
              </div>
            </div>
            <div className="md:h-[350px] h-[356px] pb-[5px] relative w-full">
              <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[13px] rounded-lg w-full">
                <div className="flex flex-col items-start justify-start mb-0.5 mt-[209px] w-full">
                  <Text
                    className="text-lime-900_02 text-sm"
                    size="txtRalewayRomanBold14"
                  >
                    The Lord of the Rings
                  </Text>
                  <Text
                    className="mt-6 text-base text-blue_gray-400"
                    size="txtAlataRegular16"
                  >
                    J.R.R. Tolkien
                  </Text>
                  <div className="flex flex-row font-alata gap-[31px] items-end justify-between mt-3.5 w-full">
                    <Text
                      className="mb-0.5 mt-[13px] text-base text-green-A700"
                      size="txtAlataRegular16GreenA700"
                    >
                      <span className="text-green-A700 font-alata text-left font-normal">
                        Rs.
                      </span>
                      <span className="text-light_green-800_01 font-alata text-left font-normal">
                        {" "}
                      </span>
                      <span className="text-green-A700 font-raleway text-left font-bold">
                        70
                      </span>
                      <span className="text-gray-500_01 font-alata text-left font-normal">
                        /day
                      </span>
                    </Text>
                    <div className="bg-red-A200 flex flex-col h-[37px] md:h-auto items-center justify-center px-2 py-1 rounded-[5px] w-[51px]">
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowright.svg"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-gradient1  flex flex-col inset-x-[0] items-start justify-start mx-auto p-[18px] rounded-[3px] top-[0] w-full">
                <Img
                  className="h-[179px] md:h-auto ml-3.5 md:ml-[0] object-cover w-[77%]"
                  src="images/img_image4.png"
                  alt="imageFour"
                />
              </div>
            </div>
            <div className="md:h-[350px] h-[356px] pb-[5px] relative w-full">
              <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[13px] rounded-lg w-full">
                <div className="flex flex-col items-start justify-start mb-0.5 mt-[209px] w-full">
                  <Text
                    className="text-lime-900_02 text-sm"
                    size="txtRalewayRomanBold14"
                  >
                    The Hypocrite World
                  </Text>
                  <Text
                    className="mt-6 text-base text-blue_gray-400"
                    size="txtAlataRegular16"
                  >
                    Sofia Hill
                  </Text>
                  <div className="flex flex-row font-alata gap-[31px] items-end justify-between mt-3.5 w-full">
                    <Text
                      className="mb-0.5 mt-[13px] text-base text-green-A700"
                      size="txtAlataRegular16GreenA700"
                    >
                      <span className="text-green-A700 font-alata text-left font-normal">
                        Rs.
                      </span>
                      <span className="text-light_green-800_01 font-alata text-left font-normal">
                        {" "}
                      </span>
                      <span className="text-green-A700 font-raleway text-left font-bold">
                        50
                      </span>
                      <span className="text-gray-500_01 font-alata text-left font-normal">
                        /day
                      </span>
                    </Text>
                    <div className="bg-red-A200 flex flex-col h-[37px] md:h-auto items-center justify-center px-2 py-1 rounded-[5px] w-[51px]">
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowright.svg"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-gradient1  flex flex-col inset-x-[0] items-start justify-start mx-auto p-[18px] rounded-[3px] top-[0] w-full">
                <Img
                  className="h-[179px] md:h-auto ml-3.5 md:ml-[0] object-cover w-[77%]"
                  src="images/img_image4_1.png"
                  alt="imageFour"
                />
              </div>
            </div>
            <div className="md:h-[350px] h-[356px] pb-[5px] relative w-full">
              <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[13px] rounded-lg w-full">
                <div className="flex flex-col items-start justify-start mb-0.5 mt-[209px] w-full">
                  <Text
                    className="text-lime-900_02 text-sm w-full"
                    size="txtRalewayRomanBold14"
                  >
                    Breif answers to big questions
                  </Text>
                  <Text
                    className="mt-2 text-base text-blue_gray-400"
                    size="txtAlataRegular16"
                  >
                    Stephen Hawking
                  </Text>
                  <div className="flex flex-row font-alata gap-[31px] items-end justify-between mt-3.5 w-full">
                    <Text
                      className="mb-0.5 mt-[13px] text-base text-green-A700"
                      size="txtAlataRegular16GreenA700"
                    >
                      <span className="text-green-A700 font-alata text-left font-normal">
                        Rs.
                      </span>
                      <span className="text-light_green-800_01 font-alata text-left font-normal">
                        {" "}
                      </span>
                      <span className="text-green-A700 font-raleway text-left font-bold">
                        50
                      </span>
                      <span className="text-gray-500_01 font-alata text-left font-normal">
                        /day
                      </span>
                    </Text>
                    <div className="bg-red-A200 flex flex-col h-[37px] md:h-auto items-center justify-center px-2 py-1 rounded-[5px] w-[51px]">
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowright.svg"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-gradient1  flex flex-col inset-x-[0] items-start justify-start mx-auto p-[18px] rounded-[3px] top-[0] w-full">
                <Img
                  className="h-[179px] md:h-auto ml-3.5 md:ml-[0] object-cover w-[77%]"
                  src="images/img_image4_179x118.png"
                  alt="imageFour"
                />
              </div>
            </div>
            <div className="md:h-[350px] h-[356px] pb-[5px] relative w-full">
              <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[13px] rounded-lg w-full">
                <div className="flex flex-col items-start justify-start mb-0.5 mt-[209px] w-full">
                  <Text
                    className="text-lime-900_02 text-sm w-full"
                    size="txtRalewayRomanBold14"
                  >
                    Anya and the Nightingale
                  </Text>
                  <Text
                    className="mt-2 text-base text-blue_gray-400"
                    size="txtAlataRegular16"
                  >
                    Sofiya Pasternack
                  </Text>
                  <div className="flex flex-row font-alata gap-[31px] items-end justify-between mt-3.5 w-full">
                    <Text
                      className="mb-0.5 mt-[13px] text-base text-green-A700"
                      size="txtAlataRegular16GreenA700"
                    >
                      <span className="text-green-A700 font-alata text-left font-normal">
                        Rs.
                      </span>
                      <span className="text-light_green-800_01 font-alata text-left font-normal">
                        {" "}
                      </span>
                      <span className="text-green-A700 font-raleway text-left font-bold">
                        30
                      </span>
                      <span className="text-gray-500_01 font-alata text-left font-normal">
                        /day
                      </span>
                    </Text>
                    <div className="bg-red-A200 flex flex-col h-[37px] md:h-auto items-center justify-center px-2 py-1 rounded-[5px] w-[51px]">
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowright.svg"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-gradient1  flex flex-col inset-x-[0] items-start justify-start mx-auto p-[18px] rounded-[3px] top-[0] w-full">
                <Img
                  className="h-[179px] md:h-auto ml-3.5 md:ml-[0] object-cover w-[77%]"
                  src="images/img_image4_2.png"
                  alt="imageFour"
                />
              </div>
            </div>
          </div>
          <div className="bg-gray-800 flex flex-col items-center justify-start p-[49px] md:px-10 sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[271px] items-center justify-between max-w-[1223px] mb-[18px] mx-auto w-full">
              <div className="flex md:flex-1 flex-col gap-3.5 justify-start w-1/4 md:w-full">
                <div className="flex flex-row font-aladin gap-3 items-center justify-center px-[9px] py-[5px] rounded-[11px] shadow-bs w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                    size="txtAladinRegular24"
                  >
                    Novel
                  </Text>
                
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                    size="txtAladinRegular24"
                  >
                    Nest
                  </Text>
                </div>
                <Text
                  className="md:ml-[0] ml-[9px] text-sm text-white-A700 w-[98%] sm:w-full"
                  size="txtAlataRegular14"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  eu faucibus tincidunt non etiam elit. Amet, malesuada vel cras
                  nam porttitor fermentum habitasse vulputate. Vel pellentesque
                  gravida mi dictum id eu consectetur porta tortor.
                </Text>
              </div>
              <div className="flex md:flex-1 flex-col gap-[22px] justify-start w-[10%] md:w-full">
                <Text
                  className="text-lg text-white-A700"
                  size="txtMulishExtraBold18"
                >
                  Quick Links
                </Text>
                <div className="flex flex-col gap-[7px] items-start justify-start ml-3 md:ml-[0]">
                  <Text
                    className="text-base text-white-A700"
                    size="txtMulishExtraBold16"
                  >
                    Home
                  </Text>
                  <Text
                    className="text-base text-white-A700"
                    size="txtMulishExtraBold16"
                  >
                    Popular Picks
                  </Text>
                  <Text
                    className="text-base text-white-A700"
                    size="txtMulishExtraBold16"
                  >
                    Newly Listed
                  </Text>
                  <a href="javascript:" className="text-base text-white-A700">
                    <Text size="txtMulishExtraBold16">FAQs</Text>
                  </a>
                  <Text
                    className="text-base text-white-A700"
                    size="txtMulishExtraBold16"
                  >
                    About
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start w-[22%] md:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <a href="javascript:" className="text-lg text-white-A700">
                    <Text size="txtMulishExtraBold18">Contact Us</Text>
                  </a>
                  <Input
                    name="groupTwentyOne"
                    placeholder="Enter your email"
                    className="leading-[normal] p-0 placeholder:text-gray-500_02 text-left text-sm w-full"
                    wrapClassName="flex mt-[27px] w-full"
                    type="email"
                    suffix={
                      <Img
                        className="h-6 ml-3 my-auto"
                        src="images/img_bisend.svg"
                        alt="bi:send"
                      />
                    }
                    shape="round"
                  ></Input>
                  <Text
                    className="mt-[17px] text-[13px] text-white-A700"
                    size="txtMulishRegular13"
                  >
                    +977- 9834223443 Dillibazar, Kathmandu
                  </Text>
                  <div className="flex flex-row gap-4 items-center justify-start mt-[22px] w-[46%] md:w-full">
                    <Img
                      className="h-8"
                      src="images/img_fabrandstwittersquare.svg"
                      alt="fabrandstwitter"
                    />
                    <Img
                      className="h-7 w-[29px]"
                      src="images/img_facebook.svg"
                      alt="facebook"
                    />
                    <Img
                      className="h-[30px] w-[29px]"
                      src="images/img_info.svg"
                      alt="info"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
