import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const MyBooksPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 border border-gray-500 border-solid flex flex-col font-raleway items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
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
            <Button
              className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[91px] md:ml-[0] ml-[949px] md:mt-0 my-9"
              onClick={() => navigate("/wishlist")}
              leftIcon={
                <Img
                  className="h-5 mt-px mb-0.5 mr-1"
                  src="images/img_fluentbookmarkadd20filled.svg"
                  alt="fluent:bookmark-add-20-filled"
                />
              }
              size="xs"
            >
              <div className="font-alata leading-[normal] text-gray-700 text-left text-lg">
                Wishlist
              </div>
            </Button>
            <div className="flex flex-row font-alata gap-[11px] items-center justify-center ml-9 md:ml-[0] mr-[57px] md:mt-0 my-9 w-auto">
              <Img
                className="h-5 w-5"
                src="images/img_settings.svg"
                alt="settings"
              />
              <Text
                className="text-gray-700 text-lg w-auto"
                size="txtAlataRegular18"
              >
                Kakashi
              </Text>
            </div>
          </header>
          <div className="flex md:flex-col flex-row gap-[51px] items-start justify-start max-w-[1324px] mt-16 mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start mb-[18px] w-[24%] md:w-full">
              <Img
                className="h-[233px] sm:h-auto object-cover rounded-bl-[16px] rounded-br-[16px] w-full"
                src="images/img_frame22.png"
                alt="frameTwentyTwo"
              />
              <Text
                className="mt-7 text-black-900 text-xl"
                size="txtRalewayRomanBold20"
              >
                Kakashi Hatake
              </Text>
              <Text
                className="mt-[15px] text-base text-gray-500_05"
                size="txtRalewayRomanBold16"
              >
                kakashi@gmail.com
              </Text>
              <Text
                className="mt-3.5 text-base text-gray-600_01"
                size="txtRalewayRomanBold16Gray60001"
              >
                Kaushaltar, Bhaktapur
              </Text>
            </div>
            <div className="bg-gray-100_02 flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[86px] p-3.5 w-[73%] md:w-full">
              <div className="flex md:flex-col flex-row gap-[22px] items-end justify-between mb-[15px] w-full">
                <Img
                  className="h-[227px] md:h-auto md:mt-0 mt-[15px] object-cover"
                  src="images/img_image4_227x150.png"
                  alt="imageFour"
                />
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-row font-raleway sm:gap-10 items-end justify-between w-full">
                    <Text
                      className="mt-[9px] sm:text-[17px] md:text-[19px] text-[21px] text-lime-900_02"
                      size="txtRalewayRomanBold21"
                    >
                      Anya and the Nightingale
                    </Text>
                    <Img
                      className="h-8 mb-0.5 w-8"
                      src="images/img_bitrashfill.svg"
                      alt="bitrashfill"
                    />
                  </div>
                  <Text
                    className="mt-4 text-base text-blue_gray-400"
                    size="txtRalewayRomanSemiBold16"
                  >
                    - Sofiya Pasternack
                  </Text>
                  <Text
                    className="mt-[7px] text-base text-black-900"
                    size="txtAlataRegular16Black900"
                  >
                    Description
                  </Text>
                  <Text
                    className="mt-0.5 text-base text-black-900 w-[83%] sm:w-full"
                    size="txtAlataRegular16Black900"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Turpis cras pulvinar ultrices id nisl ornare nisi. Nisi,
                    morbi consectetur nibh dapibus maecenas elementum id nec.
                    Velit vitae tellus ac feugiat non ridiculus.
                  </Text>
                  <Text
                    className="mt-[18px] text-base text-black-900"
                    size="txtAlataRegular16Black900"
                  >
                    <span className="text-black-900 font-alata text-left font-normal">
                      Cost:{" "}
                    </span>
                    <span className="text-green-A700 font-alata text-left font-normal">
                      Rs{" "}
                    </span>
                    <span className="text-green-A700 font-raleway text-left font-bold">
                      300
                    </span>
                  </Text>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[146px] md:ml-[0] ml-[603px] rounded-md"
                    rightIcon={
                      <Img
                        className="h-4 mb-px ml-1.5"
                        src="images/img_jamwritef.svg"
                        alt="jam:write-f"
                      />
                    }
                    color="green_400"
                    size="md"
                    variant="fill"
                  >
                    <div className="font-bold font-raleway leading-[normal] text-left text-sm">
                      update details
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start mt-1 md:px-5 w-[23%] md:w-full">
            <Button
              className="border border-light_green-800_01 border-solid cursor-pointer flex items-center justify-center min-w-[143px] rounded-md"
              rightIcon={
                <Img
                  className="h-4 mb-px ml-1.5"
                  src="images/img_jamwritef_light_green_700.svg"
                  alt="jam:write-f"
                />
              }
              color="white_A700"
              size="md"
              variant="fill"
            >
              <div className="!text-light_green-700 font-bold leading-[normal] text-left text-sm">
                update profile
              </div>
            </Button>
            <Button
              className="border border-red-900_01 border-solid cursor-pointer flex items-center justify-center min-w-[169px] ml-[5px] rounded-md"
              rightIcon={
                <div className="h-4 mb-px ml-1.5 w-4 bg-red-700">
                  <Img className="h-4" src="images/img_close.svg" alt="close" />
                </div>
              }
              color="white_A700"
              size="md"
              variant="fill"
            >
              <div className="!text-red-800 font-bold leading-[normal] text-left text-sm">
                Change password
              </div>
            </Button>
          </div>
          <div className="flex md:flex-col flex-row gap-[51px] items-start justify-start max-w-[1324px] mx-auto md:px-5 w-full">
            <Button
              className="cursor-pointer flex h-[53px] items-center justify-center md:mt-0 mt-[49px] rounded-[5px] w-[317px]"
              rightIcon={
                <Img
                  className="h-6 mb-px ml-2"
                  src="images/img_bxsbook.svg"
                  alt="bxs:book"
                />
              }
              size="lg"
              variant="gradient"
              color="red_A200_deep_orange_900_9b"
            >
              <div className="font-black leading-[normal] text-left text-xl">
                Add a Book
              </div>
            </Button>
            <div className="bg-gray-100_02 flex md:flex-1 flex-col items-center justify-start p-3.5 w-[73%] md:w-full">
              <div className="flex md:flex-col flex-row gap-[22px] items-end justify-between mb-[15px] w-full">
                <Img
                  className="h-[227px] md:h-auto md:mt-0 mt-[15px] object-cover"
                  src="images/img_image4_179x118.png"
                  alt="imageFour_One"
                />
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-row font-raleway sm:gap-10 items-end justify-between w-full">
                    <Text
                      className="mt-[9px] sm:text-[17px] md:text-[19px] text-[21px] text-lime-900_02"
                      size="txtRalewayRomanExtraBold21"
                    >
                      Breif answers to big questions
                    </Text>
                    <Img
                      className="h-8 mb-0.5 w-8"
                      src="images/img_bitrashfill.svg"
                      alt="bitrashfill_One"
                    />
                  </div>
                  <Text
                    className="mt-4 text-base text-blue_gray-400"
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
                    className="mt-0.5 text-base text-black-900 w-[83%] sm:w-full"
                    size="txtAlataRegular16Black900"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Turpis cras pulvinar ultrices id nisl ornare nisi. Nisi,
                    morbi consectetur nibh dapibus maecenas elementum id nec.
                    Velit vitae tellus ac feugiat non ridiculus.
                  </Text>
                  <Text
                    className="mt-[18px] text-base text-black-900"
                    size="txtAlataRegular16Black900"
                  >
                    <span className="text-black-900 font-alata text-left font-normal">
                      Cost:{" "}
                    </span>
                    <span className="text-green-A700 font-alata text-left font-normal">
                      Rs{" "}
                    </span>
                    <span className="text-green-A700 font-raleway text-left font-bold">
                      420
                    </span>
                  </Text>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[146px] md:ml-[0] ml-[603px] rounded-md"
                    rightIcon={
                      <Img
                        className="h-4 mb-px ml-1.5"
                        src="images/img_jamwritef.svg"
                        alt="jam:write-f"
                      />
                    }
                    color="green_400"
                    size="md"
                    variant="fill"
                  >
                    <div className="font-bold font-raleway leading-[normal] text-left text-sm">
                      update details
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100_02 flex flex-col items-center justify-start mt-[46px] p-2 md:px-5 w-[60%] md:w-full ml-[420px]">
            <div className="flex md:flex-col flex-row gap-5 items-end justify-between mb-[5px] w-full">
              <Img
                className="h-[225px] md:h-auto mb-[3px] md:mt-0 mt-[15px] object-cover"
                src="images/img_image4_3.png"
                alt="imageFive"
              />
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row font-raleway sm:gap-10 items-end justify-between w-full">
                  <Text
                    className="mt-[7px] sm:text-[17px] md:text-[19px] text-[21px] text-lime-900_02"
                    size="txtRalewayRomanExtraBold21"
                  >
                    Lunar Storm
                  </Text>
                  <Img
                    className="h-8 w-8"
                    src="images/img_bitrashfill.svg"
                    alt="bitrashfill_Two"
                  />
                </div>
                <Text
                  className="mt-[18px] text-base text-blue_gray-400"
                  size="txtRalewayRomanSemiBold16"
                >
                  - Terry Crosby
                </Text>
                <Text
                  className="mt-[7px] text-base text-black-900"
                  size="txtAlataRegular16Black900"
                >
                  Description
                </Text>
                <Text
                  className="mt-0.5 text-base text-black-900 w-[83%] sm:w-full"
                  size="txtAlataRegular16Black900"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Turpis cras pulvinar ultrices id nisl ornare nisi. Nisi, morbi
                  consectetur nibh dapibus maecenas elementum id nec. Velit
                  vitae tellus ac feugiat non ridiculus.
                </Text>
                <Text
                  className="mt-[18px] text-base text-black-900"
                  size="txtAlataRegular16Black900"
                >
                  <span className="text-black-900 font-alata text-left font-normal">
                    Cost:{" "}
                  </span>
                  <span className="text-green-A700 font-alata text-left font-normal">
                    Rs{" "}
                  </span>
                  <span className="text-green-A700 font-raleway text-left font-bold">
                    350
                  </span>
                </Text>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[146px] md:ml-[0] ml-[603px] rounded-md"
                  rightIcon={
                    <Img
                      className="h-4 mb-px ml-1.5"
                      src="images/img_jamwritef.svg"
                      alt="jam:write-f"
                    />
                  }
                  color="green_400"
                  size="md"
                  variant="fill"
                >
                  <div className="font-bold font-raleway leading-[normal] text-left text-sm">
                    update details
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <footer className="bg-gray-800 flex font-mulish items-center justify-center mt-[167px] md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[271px] items-center justify-between mb-[65px] mt-[49px] mx-auto w-auto">
              <div className="flex flex-col gap-3.5 justify-start w-1/4 md:w-full">
                <div className="flex flex-row font-aladin gap-3 items-center justify-center px-[9px] py-[5px] rounded-[11px] shadow-bs w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                    size="txtAladinRegular24"
                  >
                    NovelNest
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
                        name="group100"
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

export default MyBooksPage;
