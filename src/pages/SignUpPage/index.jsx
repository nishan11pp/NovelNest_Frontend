import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import Header from "components/Header";

const SignUpPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 border border-gray-500 border-solid flex flex-col font-aladin items-center justify-end mx-auto w-full">
        <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="bg-white-A700 flex flex-col font-raleway items-start justify-start max-w-[1131px] mt-[77px] mx-auto pr-0.5 pt-0.5 md:px-5 rounded-[29px] shadow-bs4 w-full">
          <div className="flex md:flex-col flex-row gap-[51px] items-center justify-start w-[93%] md:w-full">
            <div className="bg-gray-50 flex flex-col items-center justify-start p-[73px] md:px-10 sm:px-5 w-[56%] md:w-full">
              <Img
                className="h-[441px] mb-[154px] mt-[104px]"
                src="images/img_bookloverpana.svg"
                alt="bookloverpana"
              />
            </div>
            <div className="flex flex-col items-start justify-start w-2/5 md:w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                size="txtRalewayRomanExtraBold32"
              >
                Sign up to NovelNest{" "}
              </Text>
              <Text
                className="mt-[31px] text-black-900 text-lg"
                size="txtRalewayRomanSemiBold18"
              >
                <span className="text-black-900 font-raleway text-left font-semibold">
                  Already a member?{" "}
                </span>
                <span className="text-red-A200 font-raleway text-left font-semibold">
                  Sign in
                </span>
              </Text>
              <Text
                className="mt-[45px] text-black-900 text-lg"
                size="txtRalewayRomanSemiBold18"
              >
                Username
              </Text>
              <Input
                name="password"
                placeholder="********************"
                className="!placeholder:text-blue_gray-100 !text-blue_gray-100 font-extrabold leading-[normal] md:text-[22px] p-0 sm:text-xl text-2xl text-left w-full"
                wrapClassName="border border-blue_gray-100_01 border-solid flex mt-[7px] rounded-[12px] w-full"
                suffix={
                  <Img
                    className="mt-auto mb-0.5 h-7 ml-[35px]"
                    src="images/img_bxsuser.svg"
                    alt="bxs:user"
                  />
                }
                size="lg"
              ></Input>
              <Text
                className="mt-5 text-black-900 text-lg"
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
                className="mt-5 text-black-900 text-lg"
                size="txtRalewayRomanSemiBold18"
              >
                Contact No
              </Text>
              <Input
                name="password_One"
                placeholder="********************"
                className="!placeholder:text-blue_gray-100 !text-blue_gray-100 font-extrabold leading-[normal] md:text-[22px] p-0 sm:text-xl text-2xl text-left w-full"
                wrapClassName="border border-blue_gray-100_01 border-solid flex mt-[7px] rounded-[12px] w-full"
                suffix={
                  <Img
                    className="mt-auto mb-px h-[34px] ml-[35px]"
                    src="images/img_antdesignphonefilled.svg"
                    alt="ant-design:phone-filled"
                  />
                }
                size="md"
              ></Input>
              <Text
                className="mt-[23px] text-black-900 text-lg"
                size="txtRalewayRomanSemiBold18"
              >
                Password
              </Text>
              <Input
                name="password_Three"
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
                className="common-pointer cursor-pointer font-black leading-[normal] min-w-[412px] sm:min-w-full mt-[37px] shadow-bs2 sm:text-[17px] md:text-[19px] text-[21px] text-center"
                onClick={() => navigate("/")}
                shape="round"
                color="red_A200"
                size="xl"
                variant="fill"
              >
                Create an account
              </Button>
              <div className="bg-white-A700 border border-gray-400_03 border-solid flex sm:flex-col flex-row gap-2.5 items-center justify-center mt-[26px] p-5 rounded-[12px] w-full">
                <Img
                  className="h-7 sm:ml-[0] ml-[67px] w-7"
                  src="images/img_warning.svg"
                  alt="warning"
                />
                <Text
                  className="mr-[93px] text-gray-400_02 text-lg"
                  size="txtRalewayRomanBold18"
                >
                  Sign up with Google
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-raleway items-start mt-[405px] md:px-10 sm:px-5 px-[153px] w-full">
          <Button
            className="border-l-4 border-red-A200 border-solid cursor-pointer font-extrabold leading-[normal] min-w-[148px] text-center text-xl"
            shape="square"
            color="white_A700_33"
            size="sm"
            variant="fill"
          >
            Newly Listed
          </Button>
        </div>
        <div className="md:gap-5 gap-[49px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center max-w-[1146px] min-h-[auto] mt-[50px] mx-auto md:px-5 w-full">
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
        <div className="bg-gray-800 flex flex-col font-mulish items-center justify-start mt-[167px] p-[49px] md:px-10 sm:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[271px] items-center justify-between max-w-[1223px] mb-[18px] mx-auto w-full">
            <div className="flex md:flex-1 flex-col gap-3.5 justify-start w-1/4 md:w-full">
              <div className="flex flex-row font-aladin gap-3 items-center justify-center px-[9px] py-[5px] rounded-[11px] shadow-bs w-auto">
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                  size="txtAladinRegular24"
                >
                 Nobel
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                faucibus tincidunt non etiam elit. Amet, malesuada vel cras nam
                porttitor fermentum habitasse vulputate. Vel pellentesque
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
                  name="groupSeventyFour"
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
    </>
  );
};

export default SignUpPagePage;
