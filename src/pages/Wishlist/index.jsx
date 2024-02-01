import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const WishlistPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 border border-gray-500 border-solid flex flex-col font-raleway items-center justify-start mx-auto w-full">
        <header className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
          <Button
            className="common-pointer cursor-pointer flex items-center justify-center mb-6 min-w-[151px] md:ml-[0] ml-[59px] md:mt-0 mt-[19px] rounded-[11px]"
            onClick={() => navigate("/homepage")}
            rightIcon={
              <div className="ml-[11px] bg-red-A200">
                <Img src="images/img_television.svg" alt="television" />
              </div>
            }
            shape="round"
            color="white_A700"
            size="sm"
            variant="fill"
          >
            <div className="font-aladin leading-[normal] md:text-[22px] sm:text-xl text-2xl text-left">
              NovelNest
            </div>
          </Button>
          <div className="flex flex-row font-alata gap-[5px] items-center justify-center md:ml-[0] ml-[949px] md:mt-0 my-9 w-auto">
            <Img
              className="h-5 w-5"
              src="images/img_fluentbookmarkadd20filled.svg"
              alt="fluentbookmarka"
            />
            <Text
              className="text-gray-700 text-lg w-auto"
              size="txtAlataRegular18"
            >
              Wishlist
            </Text>
          </div>
          <Button
            className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[97px] ml-9 md:ml-[0] mr-[57px] md:mt-0 my-9"
            onClick={() => navigate("/mybooks")}
            leftIcon={
              <div className="h-5 mt-px mb-0.5 mr-[11px] w-5 bg-gray-400">
                <Img
                  className="h-5"
                  src="images/img_settings.svg"
                  alt="settings"
                />
              </div>
            }
            size="xs"
          >
            <div className="font-alata leading-[normal] text-gray-700 text-left text-lg">
              Kakashi
            </div>
          </Button>
        </header>
        <div className="flex flex-row gap-1 items-center justify-center mt-[55px] md:px-5 w-auto">
          <Text
            className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 w-auto"
            size="txtRalewayRomanBold28"
          >
            My Wishlist
          </Text>
          <Img
            className="h-[34px] w-[34px]"
            src="images/img_fluentbookmarkadd20filled_deep_orange_a400.svg"
            alt="fluentbookmarka_One"
          />
        </div>
        <div className="font-mulish h-[1064px] md:h-[726px] mt-[58px] md:px-5 relative w-full">
          <Img
            className="absolute h-[668px] inset-y-[0] left-[0] my-auto object-cover"
            src="images/img_vector_668x344.png"
            alt="vector"
          />
          <footer className="absolute bg-gray-800 bottom-[0] flex inset-x-[0] items-center justify-center mx-auto w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[271px] items-center justify-between mb-[65px] mt-[49px] mx-[108px] w-auto">
              <div className="flex flex-col gap-3.5 justify-start w-1/4 md:w-full">
                <div className="flex flex-row font-aladin gap-3 items-center justify-center px-[9px] py-[5px] rounded-[11px] shadow-bs w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                    size="txtAladinRegular24"
                  >
                    NovelNestt
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
                        name="groupSeventySix"
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
          <div className="absolute bg-gray-100_02 flex flex-col inset-x-[0] items-center justify-start mx-auto p-[18px] top-[0] w-[67%]">
            <div className="flex md:flex-col flex-row gap-[22px] items-center justify-between mb-[9px] w-full">
              <Img
                className="h-[227px] md:h-auto object-cover"
                src="images/img_image4_179x118.png"
                alt="imageFour"
              />
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row font-raleway sm:gap-10 items-end justify-between w-full">
                  <Text
                    className="mt-1.5 sm:text-[17px] md:text-[19px] text-[21px] text-lime-900_02"
                    size="txtRalewayRomanExtraBold21"
                  >
                    Breif answers to big questions
                  </Text>
                  <Img
                    className="h-8 w-8"
                    src="images/img_materialsymbol.svg"
                    alt="materialsymbol"
                  />
                </div>
                <Text
                  className="mt-[15px] text-base text-blue_gray-400"
                  size="txtRalewayRomanSemiBold16"
                >
                  - Stephen Hawking
                </Text>
                <Text
                  className="mt-[7px] text-base text-black-900"
                  size="txtAlataRegular16Black900"
                >
                  Description
                </Text>
                <Text
                  className="mt-0.5 text-base text-black-900 w-[84%] sm:w-full"
                  size="txtAlataRegular16Black900"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Turpis cras pulvinar ultrices id nisl ornare nisi. Nisi, morbi
                  consectetur nibh dapibus maecenas elementum id nec. Velit
                  vitae tellus ac feugiat non ridiculus.
                </Text>
                <div className="flex flex-row font-alata sm:gap-10 items-start justify-between mt-[17px] w-full">
                  <Text
                    className="text-base text-black-900"
                    size="txtAlataRegular16Black900"
                  >
                    <span className="text-black-900 font-alata text-left font-normal">
                      Cost:{" "}
                    </span>
                    <span className="text-green-A700 font-alata text-left font-normal">
                      Rs{" "}
                    </span>
                    <span className="text-green-A700 font-raleway text-left font-bold">
                      200
                    </span>
                  </Text>
                  <div className="bg-red-A200 flex flex-col h-[37px] md:h-auto items-center justify-center mt-[21px] px-2 py-1 rounded-[5px] w-[51px]">
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowright.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-gray-100_02 flex flex-col inset-x-[0] items-center justify-start mx-auto p-[18px] top-[33%] w-[67%]">
            <div className="flex md:flex-col flex-row gap-[15px] items-center justify-between mb-[9px] w-full">
              <Img
                className="h-[223px] md:h-auto object-cover"
                src="images/img_image4.png"
                alt="imageFive"
              />
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row font-raleway sm:gap-10 items-end justify-between w-full">
                  <Text
                    className="mt-1.5 sm:text-[17px] md:text-[19px] text-[21px] text-lime-900_02"
                    size="txtRalewayRomanExtraBold21"
                  >
                    The Lord of the Rings
                  </Text>
                  <Img
                    className="h-8 w-8"
                    src="images/img_materialsymbol.svg"
                    alt="materialsymbol_One"
                  />
                </div>
                <Text
                  className="mt-[13px] text-base text-blue_gray-400"
                  size="txtRalewayRomanSemiBold16"
                >
                  - J.R.R. Tolkien
                </Text>
                <Text
                  className="mt-2 text-base text-black-900"
                  size="txtAlataRegular16Black900"
                >
                  Description
                </Text>
                <Text
                  className="mt-0.5 text-base text-black-900 w-[84%] sm:w-full"
                  size="txtAlataRegular16Black900"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Turpis cras pulvinar ultrices id nisl ornare nisi. Nisi, morbi
                  consectetur nibh dapibus maecenas elementum id nec. Velit
                  vitae tellus ac feugiat non ridiculus.
                </Text>
                <div className="flex flex-row font-alata sm:gap-10 items-start justify-between mt-[17px] w-full">
                  <Text
                    className="text-base text-black-900"
                    size="txtAlataRegular16Black900"
                  >
                    <span className="text-black-900 font-alata text-left font-normal">
                      Cost:{" "}
                    </span>
                    <span className="text-green-A700 font-alata text-left font-normal">
                      Rs{" "}
                    </span>
                    <span className="text-green-A700 font-raleway text-left font-bold">
                      200{" "}
                    </span>
                  </Text>
                  <div className="bg-red-A200 flex flex-col h-[37px] md:h-auto items-center justify-center mt-[21px] px-2 py-1 rounded-[5px] w-[51px]">
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowright.svg"
                      alt="arrowright_One"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col md:gap-10 gap-[204px] justify-start right-[0] top-[3%] w-[13%]">
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[210px] items-start justify-start p-[27px] sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_group77.png')" }}
            >
              <Img
                className="h-16 mb-[92px] md:ml-[0] ml-[15px] w-16"
                src="images/img_settings_lime_900.svg"
                alt="settings"
              />
            </div>
            <Img
              className="h-[66px] ml-10 md:ml-[0] w-[66px]"
              src="images/img_notov1closedbook.svg"
              alt="notov1closedboo"
            />
          </div>
          <Img
            className="absolute h-16 left-[5%] top-[17%] w-16"
            src="images/img_emojionebooks.svg"
            alt="emojionebooks"
          />
        </div>
      </div>
    </>
  );
};

export default WishlistPage;
