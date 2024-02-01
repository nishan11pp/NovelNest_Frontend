import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img } from "components";

const Header1 = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <Button
          className="common-pointer cursor-pointer flex items-center justify-center mb-6 min-w-[151px] sm:ml-[0] ml-[59px] sm:mt-0 mt-[19px] rounded-[11px]"
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
            NovelNest{" "}
          </div>
        </Button>
        <Button
          className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[91px] sm:ml-[0] ml-[949px] sm:mt-0 my-9"
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
        <Button
          className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[97px] ml-9 sm:ml-[0] mr-[57px] sm:mt-0 my-9"
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
    </>
  );
};

Header1.defaultProps = {};

export default Header1;
