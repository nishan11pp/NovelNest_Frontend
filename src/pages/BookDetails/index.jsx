import React from "react";

import { Button, Img, Input, Text } from "components";
import Header1 from "components/Header1";

const BookDetailsPage = () => {
  return (
    <>
      <div className="bg-white-A700 border border-gray-500 border-solid flex flex-col font-raleway items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header1 className="flex sm:flex-col flex-row sm:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[1233px] mt-[89px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-3.5 items-center justify-start md:mt-0 mt-[41px] w-[21%] md:w-full">
              <Img
                className="h-[383px] md:h-auto object-cover w-full"
                src="images/img_image4_179x118.png"
                alt="imageFour"
              />
              <Button
                className="border-2 border-lime-800 border-solid cursor-pointer flex h-[38px] items-center justify-center rounded-[5px] w-[252px]"
                rightIcon={
                  <Img
                    className="h-5 mt-px mb-0.5 ml-2"
                    src="images/img_fluentbookmarkadd20filled_lime_800.svg"
                    alt="fluent:bookmark-add-20-filled"
                  />
                }
                color="white_A700"
                size="md"
                variant="fill"
              >
                <div className="!text-lime-800 font-bold leading-[normal] text-left text-xl">
                  Add to wishlist
                </div>
              </Button>
            </div>
            <div className="md:h-[436px] h-[465px] mb-[11px] relative w-[78%] md:w-full">
              <div className="absolute bg-blue_gray-50_51 bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto p-[15px] rounded-[15px] w-full">
                <div className="flex flex-col items-start justify-start mb-[69px] mt-[9px] w-[68%] md:w-full">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-lime-900_02"
                    size="txtRalewayRomanExtraBold25"
                  >
                    Breif answers to big questions
                  </Text>
                  <Text
                    className="mt-[11px] text-blue_gray-400 text-xl"
                    size="txtRalewayRomanSemiBold20"
                  >
                    - Stephen Hawking
                  </Text>
                  <Text
                    className="mt-[25px] text-black-900 text-xl"
                    size="txtAlataRegular20Black900"
                  >
                    Description
                  </Text>
                  <Text
                    className="mt-1.5 text-base text-black-900 w-full"
                    size="txtAlataRegular16Black900"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Turpis cras pulvinar ultrices id nisl ornare nisi. Nisi,
                    morbi consectetur nibh dapibus maecenas elementum id nec.
                    Velit vitae tellus ac feugiat non ridiculus.
                  </Text>
                  <Text
                    className="text-black-900 text-xl"
                    size="txtAlataRegular20Black900"
                  >
                    <span className="text-black-900 font-alata text-left font-normal">
                      Cost:{" "}
                    </span>
                    <span className="text-green-A700 font-alata text-left font-normal">
                      Rs 300
                    </span>
                  </Text>
                  <div className="flex flex-row gap-[15px] items-end justify-start mt-8 w-[39%] md:w-full">
                    <Text
                      className="my-1 text-black-900 text-xl"
                      size="txtAlataRegular20Black900"
                    >
                      Available For{" "}
                    </Text>
                    <Button
                      className="cursor-pointer flex h-[37px] items-center justify-center rounded-[5px] w-[106px]"
                      rightIcon={
                        <Img
                          className="h-[19px] mb-[5px] ml-2.5"
                          src="images/img_carbonlocationcurrent.svg"
                          alt="carbon:location-current"
                        />
                      }
                      color="red_A200"
                      size="sm"
                      variant="fill"
                    >
                      <div className="font-bold font-raleway leading-[normal] text-left text-xl">
                        Buy
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
              <Img
                className="absolute h-[100px] right-[2%] rounded-[50%] top-[0] w-[100px]"
                src="images/img_ellipse1.png"
                alt="ellipseOne"
              />
            </div>
          </div>
          <footer className="bg-gray-800 flex font-mulish items-center justify-center mt-[200px] md:px-5 w-full">
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
                        name="groupNinetyNine"
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

export default BookDetailsPage;
