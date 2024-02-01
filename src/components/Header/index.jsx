import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <Button
          className="common-pointer cursor-pointer flex h-[54px] items-center justify-center mb-6 min-w-[151px] md:ml-[0] ml-[59px] md:mt-0 mt-[19px] px-[9px] rounded-[11px]"
          onClick={() => navigate("/")}
          rightIcon={
            <Img
              className="ml-[11px]"
              src="images/img_television.svg"
              alt="television"
            />
          }
          shape="round"
          color="white_A700"
          size="xs"
          variant="fill"
        >
          <div className="font-aladin leading-[normal] md:text-[22px] sm:text-xl text-2xl text-left">
            NovelNest{" "}
          </div>
        </Button>
        <div className="flex flex-row gap-[5px] items-center justify-center md:ml-[0] ml-[949px] md:mt-0 my-9 w-auto">
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
        <div className="flex flex-row gap-[11px] items-center justify-center ml-9 md:ml-[0] mr-[78px] md:mt-0 my-[35px] w-auto">
          <Img
            className="h-5 w-5"
            src="images/img_settings.svg"
            alt="settings"
          />
          <Text
            className="text-gray-700 text-lg w-auto"
            size="txtAlataRegular18"
          >
            Login
          </Text>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
