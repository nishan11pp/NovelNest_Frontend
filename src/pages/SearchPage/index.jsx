import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import Header1 from "components/Header1";

const SearchPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 border border-gray-500 border-solid flex flex-col font-alata justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <Header1 className="flex sm:flex-col flex-row sm:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row gap-[22px] items-center justify-center mt-[85px] md:px-5 w-[45%] md:w-full">
            <Input
              name="frameTwo"
              placeholder="Enter book name, author....."
              className="font-alata leading-[normal] p-0 placeholder:text-gray-500_03 text-left text-xl w-full"
              wrapClassName="rounded-[12px] w-[74%] md:w-full"
              type="text"
              color="gray_200_91"
              size="md"
            ></Input>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[150px] rounded-lg"
              leftIcon={
                <div className="h-[27px] mr-2.5 w-[27px] bg-white-A700 my-px">
                  <Img
                    className="h-[27px]"
                    src="images/img_search.svg"
                    alt="search"
                  />
                </div>
              }
              color="red_A200"
              size="lg"
              variant="fill"
            >
              <div className="font-poppins font-semibold leading-[normal] text-left text-xl">
                Search
              </div>
            </Button>
          </div>
          <div className="flex sm:flex-col flex-row gap-[29px] items-center justify-center max-w-[903px] mt-[42px] mx-auto md:px-5 w-full">
            <Button
              className="cursor-pointer leading-[normal] min-w-[121px] rounded-[18px] text-center text-xl"
              color="black_900"
              size="sm"
              variant="outline"
            >
              Historical
            </Button>
            <Text
              className="border border-black-900 border-solid pt-[7px] px-[18px] rounded-[18px] text-gray-700_01 text-xl w-auto"
              size="txtAlataRegular20"
            >
              Fantasy
            </Text>
            <Button
              className="cursor-pointer leading-[normal] min-w-[122px] rounded-[18px] text-center text-xl"
              color="black_900"
              size="sm"
              variant="outline"
            >
              Romance
            </Button>
            <Button
              className="cursor-pointer leading-[normal] min-w-[127px] rounded-[18px] text-center text-xl"
              color="black_900"
              size="sm"
              variant="outline"
            >
              Academic
            </Button>
            <Button
              className="cursor-pointer leading-[normal] min-w-[123px] rounded-[18px] text-center text-xl"
              color="black_900"
              size="sm"
              variant="outline"
            >
              Literature
            </Button>
            <Text
              className="border border-black-900 border-solid pt-[7px] px-[18px] rounded-[18px] text-gray-700_01 text-xl w-auto"
              size="txtAlataRegular20"
            >
              Documentary
            </Text>
          </div>
        </div>
        <div className="flex flex-col font-raleway items-end mt-[55px] md:px-10 sm:px-5 px-[137px] w-full">
          <div className="border border-gray-500_04 border-solid flex flex-row gap-[13px] items-center justify-end p-1.5 w-[16%] md:w-full">
            <Text
              className="text-blue_gray-400_01 text-lg"
              size="txtRalewayRomanSemiBold18Bluegray40001"
            >
              Audio books
            </Text>
            <Img
              className="h-5 mr-1.5 w-5"
              src="images/img_bxsdownarrow.svg"
              alt="bxsdownarrow"
            />
          </div>
        </div>
        <div className="flex flex-col font-raleway items-center mt-[49px] pl-0.5 w-full">
          <div className="md:gap-5 gap-[49px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center max-w-[1146px] min-h-[auto] mx-auto md:px-5 w-full">
            <div
              className="common-pointer md:h-[347px] h-[356px] pb-[5px] relative w-full"
              onClick={() => navigate("/bookdetails")}
            >
              <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-3.5 rounded-lg w-full">
                <div className="flex flex-col items-start justify-start mt-52 w-full">
                  <Text
                    className="text-lime-900_02 text-sm"
                    size="txtRalewayRomanBold14"
                  >
                    The Lord of the Rings
                  </Text>
                  <Text
                    className="mt-[22px] text-base text-blue_gray-400"
                    size="txtAlataRegular16"
                  >
                    J.R.R. Tolkien
                  </Text>
                  <div className="flex flex-row font-alata items-end justify-between mt-3 w-full">
                    <Text
                      className="mt-3.5 text-base text-green-A700"
                      size="txtAlataRegular16GreenA700"
                    >
                      <span className="text-green-A700 font-alata text-left font-normal">
                        Rs.
                      </span>
                      <span className="text-light_green-800_01 font-alata text-left font-normal">
                        {" "}
                      </span>
                      <span className="text-green-A700 font-raleway text-left font-bold">
                        420
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
            <div className="md:h-[347px] h-[356px] pb-[5px] relative w-full">
              <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[13px] rounded-lg w-full">
                <div className="flex flex-col gap-2.5 items-start justify-start mt-[209px] w-full">
                  <Text
                    className="text-lime-900_02 text-sm w-full"
                    size="txtRalewayRomanBold14"
                  >
                    Breif answers to big questions
                  </Text>
                  <Text
                    className="text-base text-blue_gray-400"
                    size="txtAlataRegular16"
                  >
                    Stephen Hawking
                  </Text>
                  <div className="flex flex-row font-alata items-end justify-between w-full">
                    <Text
                      className="mt-3.5 text-base text-green-A700"
                      size="txtAlataRegular16GreenA700"
                    >
                      <span className="text-green-A700 font-alata text-left font-normal">
                        Rs.
                      </span>
                      <span className="text-light_green-800_01 font-alata text-left font-normal">
                        {" "}
                      </span>
                      <span className="text-green-A700 font-raleway text-left font-bold">
                        420
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
            <div className="md:h-[347px] h-[356px] pb-[5px] relative w-full">
              <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-3.5 rounded-lg w-full">
                <div className="flex flex-col items-start justify-start mt-52 w-full">
                  <Text
                    className="text-lime-900_02 text-sm"
                    size="txtRalewayRomanBold14"
                  >
                    The Hypocrite World
                  </Text>
                  <Text
                    className="mt-[22px] text-base text-blue_gray-400"
                    size="txtAlataRegular16"
                  >
                    Sofia Hill
                  </Text>
                  <div className="flex flex-row font-alata items-end justify-between mt-3 w-full">
                    <Text
                      className="mt-3.5 text-base text-green-A700"
                      size="txtAlataRegular16GreenA700"
                    >
                      <span className="text-green-A700 font-alata text-left font-normal">
                        Rs.
                      </span>
                      <span className="text-light_green-800_01 font-alata text-left font-normal">
                        {" "}
                      </span>
                      <span className="text-green-A700 font-raleway text-left font-bold">
                        420
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
            <div className="md:h-[347px] h-[356px] pb-[5px] relative w-full">
              <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[13px] rounded-lg w-full">
                <div className="flex flex-col gap-2.5 items-start justify-start mt-[209px] w-full">
                  <Text
                    className="text-lime-900_02 text-sm w-full"
                    size="txtRalewayRomanBold14"
                  >
                    Anya and the Nightingale
                  </Text>
                  <Text
                    className="text-base text-blue_gray-400"
                    size="txtAlataRegular16"
                  >
                    Sofiya Pasternack
                  </Text>
                  <div className="flex flex-row font-alata items-end justify-between w-full">
                    <Text
                      className="mt-3.5 text-base text-green-A700"
                      size="txtAlataRegular16GreenA700"
                    >
                      <span className="text-green-A700 font-alata text-left font-normal">
                        Rs.
                      </span>
                      <span className="text-light_green-800_01 font-alata text-left font-normal">
                        {" "}
                      </span>
                      <span className="text-green-A700 font-raleway text-left font-bold">
                        420
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
            <div
              className="common-pointer md:h-[347px] h-[356px] pb-[5px] relative w-full"
              onClick={() => navigate("/bookdetails")}
            >
              <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-3.5 rounded-lg w-full">
                <div className="flex flex-col items-start justify-start mt-[207px] w-full">
                  <Text
                    className="text-lime-900_02 text-sm"
                    size="txtRalewayRomanBold14"
                  >
                    Lunar Storm
                  </Text>
                  <Text
                    className="mt-[25px] text-base text-blue_gray-400"
                    size="txtAlataRegular16"
                  >
                    Terry Crosby
                  </Text>
                  <div className="flex flex-row font-alata items-end justify-between mt-2.5 w-full">
                    <Text
                      className="mt-3.5 text-base text-green-A700"
                      size="txtAlataRegular16GreenA700"
                    >
                      <span className="text-green-A700 font-alata text-left font-normal">
                        Rs.
                      </span>
                      <span className="text-light_green-800_01 font-alata text-left font-normal">
                        {" "}
                      </span>
                      <span className="text-green-A700 font-raleway text-left font-bold">
                        420
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
            <div className="md:h-[347px] h-[356px] pb-[5px] relative w-full">
              <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-3.5 rounded-lg w-full">
                <div className="flex flex-col items-start justify-start mt-[207px] w-full">
                  <Text
                    className="text-lime-900_02 text-sm"
                    size="txtRalewayRomanBold14"
                  >
                    Lunar Storm
                  </Text>
                  <Text
                    className="mt-[25px] text-base text-blue_gray-400"
                    size="txtAlataRegular16"
                  >
                    Terry Crosby
                  </Text>
                  <div className="flex flex-row font-alata items-end justify-between mt-2.5 w-full">
                    <Text
                      className="mt-3.5 text-base text-green-A700"
                      size="txtAlataRegular16GreenA700"
                    >
                      <span className="text-green-A700 font-alata text-left font-normal">
                        Rs.
                      </span>
                      <span className="text-light_green-800_01 font-alata text-left font-normal">
                        {" "}
                      </span>
                      <span className="text-green-A700 font-raleway text-left font-bold">
                        420
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
            <div className="md:h-[347px] h-[356px] pb-[5px] relative w-full">
              <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-3.5 rounded-lg w-full">
                <div className="flex flex-col items-start justify-start mt-52 w-full">
                  <Text
                    className="text-lime-900_02 text-sm"
                    size="txtRalewayRomanBold14"
                  >
                    The Lord of the Rings
                  </Text>
                  <Text
                    className="mt-[22px] text-base text-blue_gray-400"
                    size="txtAlataRegular16"
                  >
                    J.R.R. Tolkien
                  </Text>
                  <div className="flex flex-row font-alata items-end justify-between mt-3 w-full">
                    <Text
                      className="mt-3.5 text-base text-green-A700"
                      size="txtAlataRegular16GreenA700"
                    >
                      <span className="text-green-A700 font-alata text-left font-normal">
                        Rs.
                      </span>
                      <span className="text-light_green-800_01 font-alata text-left font-normal">
                        {" "}
                      </span>
                      <span className="text-green-A700 font-raleway text-left font-bold">
                        420
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
            <div className="md:h-[348px] h-[356px] pb-[5px] relative w-full">
              <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-3.5 rounded-lg w-full">
                <div className="flex flex-col items-start justify-start mt-[209px] w-full">
                  <Text
                    className="text-lime-900_02 text-sm"
                    size="txtRalewayRomanBold14"
                  >
                    The Hypocrite World
                  </Text>
                  <Text
                    className="mt-[22px] text-base text-blue_gray-400"
                    size="txtAlataRegular16"
                  >
                    Sofia Hill
                  </Text>
                  <div className="flex flex-row font-alata items-end justify-between mt-3 w-full">
                    <Text
                      className="mt-3.5 text-base text-green-A700"
                      size="txtAlataRegular16GreenA700"
                    >
                      <span className="text-green-A700 font-alata text-left font-normal">
                        Rs.
                      </span>
                      <span className="text-light_green-800_01 font-alata text-left font-normal">
                        {" "}
                      </span>
                      <span className="text-green-A700 font-raleway text-left font-bold">
                        420
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
            <div className="md:h-[347px] h-[356px] pb-[5px] relative w-full">
              <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[13px] rounded-lg w-full">
                <div className="flex flex-col gap-2.5 items-start justify-start mt-[209px] w-full">
                  <Text
                    className="text-lime-900_02 text-sm w-full"
                    size="txtRalewayRomanBold14"
                  >
                    Breif answers to big questions
                  </Text>
                  <Text
                    className="text-base text-blue_gray-400"
                    size="txtAlataRegular16"
                  >
                    Stephen Hawking
                  </Text>
                  <div className="flex flex-row font-alata items-end justify-between w-full">
                    <Text
                      className="mt-3.5 text-base text-green-A700"
                      size="txtAlataRegular16GreenA700"
                    >
                      <span className="text-green-A700 font-alata text-left font-normal">
                        Rs.
                      </span>
                      <span className="text-light_green-800_01 font-alata text-left font-normal">
                        {" "}
                      </span>
                      <span className="text-green-A700 font-raleway text-left font-bold">
                        420
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
            <div className="md:h-[347px] h-[356px] pb-[5px] relative w-full">
              <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[13px] rounded-lg w-full">
                <div className="flex flex-col gap-2.5 items-start justify-start mt-[209px] w-full">
                  <Text
                    className="text-lime-900_02 text-sm w-full"
                    size="txtRalewayRomanBold14"
                  >
                    Anya and the Nightingale
                  </Text>
                  <Text
                    className="text-base text-blue_gray-400"
                    size="txtAlataRegular16"
                  >
                    Sofiya Pasternack
                  </Text>
                  <div className="flex flex-row font-alata items-end justify-between w-full">
                    <Text
                      className="mt-3.5 text-base text-green-A700"
                      size="txtAlataRegular16GreenA700"
                    >
                      <span className="text-green-A700 font-alata text-left font-normal">
                        Rs.
                      </span>
                      <span className="text-light_green-800_01 font-alata text-left font-normal">
                        {" "}
                      </span>
                      <span className="text-green-A700 font-raleway text-left font-bold">
                        420
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
          <div className="flex flex-row gap-2 items-center justify-center mt-[62px] md:px-5 w-auto">
            <Text
              className="bg-red-A200 border border-black-900 border-solid justify-center px-[7px] text-red-50 text-sm w-[21px]"
              size="txtRalewayRomanBold14Red50"
            >
              1
            </Text>
            <Text
              className="border border-black-900 border-solid px-[7px] text-black-900 text-sm w-auto"
              size="txtRalewayRomanBold14Black900"
            >
              2
            </Text>
            <Text
              className="border border-black-900 border-solid pt-[3px] px-[7px] text-black-900 text-sm w-auto"
              size="txtRalewayRomanBold14Black900"
            >
              3
            </Text>
            <Text
              className="text-black-900 text-sm w-auto"
              size="txtRalewayRomanBold14Black900"
            >
              ..........
            </Text>
            <Text
              className="border border-black-900 border-solid px-[7px] text-black-900 text-sm w-auto"
              size="txtRalewayRomanBold14Black900"
            >
              10
            </Text>
          </div>
          <footer className="bg-gray-800 flex font-mulish items-center justify-center mt-[57px] md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[271px] items-center justify-between mb-[65px] mt-[49px] mx-auto w-auto">
              <div className="flex flex-col gap-3.5 justify-start w-1/4 md:w-full">
                <div className="flex flex-row font-aladin gap-3 items-center justify-center px-[9px] py-[5px] rounded-[11px] shadow-bs w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                    size="txtAladinRegular24"
                  >
                    NovelNest{" "}
                  </Text>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-11 items-center justify-start"
                    style={{
                      backgroundImage:
                        "url('images/img_vector_white_a700.svg')",
                    }}
                  >
                    <Text
                      className="mb-[5px] sm:text-2xl md:text-[26px] text-[28px] text-red-A200"
                      size="txtAladinRegular28"
                    >
                      द्N’
                    </Text>
                  </div>
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
              <div className="flex flex-col gap-5 justify-start w-[10%] md:w-full">
                <Text
                  className="text-lg text-white-A700"
                  size="txtMulishExtraBold18"
                >
                  Quick Links
                </Text>
                <ul className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[11px] md:w-full common-column-list">
                  <li>
                    <a href="javascript:" className="text-base text-white-A700">
                      <Text size="txtMulishExtraBold16">Home</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-base text-white-A700">
                      <Text size="txtMulishExtraBold16">Popular Picks</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-base text-white-A700">
                      <Text size="txtMulishExtraBold16">Newly Listed</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-base text-white-A700">
                      <Text size="txtMulishExtraBold16">FAQs</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="text-base text-white-A700">
                      <Text size="txtMulishExtraBold16">About</Text>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-center justify-start w-[22%] md:w-full">
                <ul className="flex flex-col items-start justify-start w-full common-column-list">
                  <li>
                    <a href="javascript:" className="text-lg text-white-A700">
                      <Text size="txtMulishExtraBold18">Contact Us</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <Input
                        name="groupNinetyEight"
                        placeholder="Enter your email"
                        className="leading-[normal] p-0 placeholder:text-gray-500_02 text-left text-sm w-full"
                        wrapClassName="flex mt-[26px]"
                        type="email"
                        suffix={
                          <li>
                            <Img
                              className="h-6 ml-3 my-auto"
                              src="images/img_bisend.svg"
                              alt="bi:send"
                            />
                          </li>
                        }
                        shape="round"
                      ></Input>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="mt-[17px] text-[13px] text-white-A700"
                    >
                      <Text size="txtMulishRegular13">
                        +977- 9834223443 Dillibazar, Kathmandu
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <div className="flex flex-row gap-4 items-center justify-start mt-5">
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
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default SearchPagePage;
