import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";
import Header1 from "components/Header1";

const HomePagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 border border-gray-500 border-solid flex flex-col justify-start mx-auto w-full">
        <div className="flex flex-col font-alata gap-11 items-center w-full">
          <Header1 className="bg-white-A700 flex sm:flex-col flex-row sm:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="h-[629px] sm:h-[704px] md:px-5 relative w-full">
            <Img
              className="h-16 ml-auto mr-[156px] mt-[200px] w-16"
              src="images/img_notov1bookmarktabs.svg"
              alt="notov1bookmarkt"
            />
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto p-[41px] md:px-10 sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_group53.svg')" }}
            >
              <div className="flex flex-col items-center justify-start mb-[264px] w-[47%] md:w-full">
                <div
                  className="common-pointer flex sm:flex-col flex-row gap-[22px] items-center justify-between w-full"
                  onClick={() => navigate("/searchpage")}
                >
                  <Button
                    className="cursor-pointer font-alata leading-[normal] min-w-[466px] sm:min-w-full text-center text-xl ml-20"
                    shape="round"
                    color="gray_200_aa"
                    size="lg"
                    variant="fill"
                  >
                    Enter book name, author.....
                  </Button>
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
                <Text
                  className="mt-[72px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center w-[51%] sm:w-full"
                  size="txtAlataRegular28"
                >
                  Discover, Trade, and Dive into Literary Treasures
                </Text>
                <div className="bg-white-A700 border border-red-A200 border-solid flex flex-row font-poppins gap-2.5 h-[55px] md:h-auto items-center justify-center mt-[25px] pr-2 py-1 rounded-lg w-[300px]">
                  <Text
                    className="text-2xl md:text-[22px] text-red-A200 sm:text-xl w-auto"
                    size="txtPoppinsSemiBold24"
                  >
                    List Books for Sell{" "}
                  </Text>
                  <Img
                    className="h-7 w-7"
                    src="images/img_dashiconsbookalt.svg"
                    alt="dashiconsbookal"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Text
          className="bg-white-A700_33 border-l-4 border-red-A200 border-solid justify-center md:ml-[0] ml-[153px] mr-[1134px] mt-[114px] pt-[5px] px-[11px] text-blue_gray-900_01 text-xl w-auto"
          size="txtRalewayRomanExtraBold20"
        >
          Popular Picks
        </Text>
        <div className="flex flex-col items-center mt-[60px] md:px-10 sm:px-5 px-[141px] w-full">
          <List
            className="sm:flex-col flex-row gap-[49px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center max-w-[1146px] mx-auto w-full"
            orientation="horizontal"
          >
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
                        500
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
                        300
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
                        300
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
                        295
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
                        300
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
          </List>
        </div>
        <Text
          className="bg-white-A700_33 border-l-4 border-red-A200 border-solid justify-center md:ml-[0] ml-[153px] mr-[1139px] mt-24 pt-1.5 px-[11px] text-blue_gray-900_01 text-xl w-auto"
          size="txtRalewayRomanExtraBold20"
        >
          Newly Listed
        </Text>
        <div className="flex flex-col font-mulish md:gap-10 gap-[167px] items-center mt-[50px] w-full">
          <div className="md:gap-5 gap-[49px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center max-w-[1146px] min-h-[auto] mx-auto md:px-5 w-full">
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
                        300
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
                        300
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
                        300
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
                        300
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
                        300
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
                        300
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
                        300
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
                        300
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
                        300
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
                        300
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
          <footer className="bg-gray-800 flex items-center justify-center md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[271px] items-center justify-between mb-[65px] mt-[49px] mx-auto w-auto">
              <div className="flex flex-col gap-3.5 justify-start w-1/4 md:w-full">
                <div className="flex flex-row font-aladin gap-3 items-center justify-center px-[9px] py-[5px] rounded-[11px] shadow-bs w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                    size="txtAladinRegular24"
                  >
                    NovelNest{" "}
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
                        name="groupFiftyTwo"
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

export default HomePagePage;
