import React from "react";

const sizeClasses = {
  txtRalewayRomanExtraBold25: "font-extrabold font-raleway",
  txtRalewayRomanSemiBold16: "font-raleway font-semibold",
  txtRalewayRomanBold28: "font-bold font-raleway",
  txtAlataRegular16: "font-alata font-normal",
  txtAlataRegular14: "font-alata font-normal",
  txtAlataRegular16Black900: "font-alata font-normal",
  txtRalewayRomanBold16Gray60001: "font-bold font-raleway",
  txtAlataRegular20Black900: "font-alata font-normal",
  txtRalewayRomanBold14Red50: "font-bold font-raleway",
  txtMulishExtraBold18: "font-extrabold font-mulish",
  txtMulishExtraBold16: "font-extrabold font-mulish",
  txtRalewayRomanBold21: "font-bold font-raleway",
  txtMulishRegular13: "font-mulish font-normal",
  txtAlataRegular18: "font-alata font-normal",
  txtRalewayRomanBold20: "font-bold font-raleway",
  txtRalewayRomanExtraBold20: "font-extrabold font-raleway",
  txtRalewayRomanExtraBold21: "font-extrabold font-raleway",
  txtRalewayRomanBold18: "font-bold font-raleway",
  txtRalewayRomanBold16: "font-bold font-raleway",
  txtAlataRegular28: "font-alata font-normal",
  txtRalewayRomanRegular21: "font-normal font-raleway",
  txtRalewayRomanSemiBold20: "font-raleway font-semibold",
  txtAlataRegular20: "font-alata font-normal",
  txtPoppinsSemiBold24: "font-poppins font-semibold",
  txtAladinRegular24: "font-aladin font-normal",
  txtAladinRegular28: "font-aladin font-normal",
  txtRalewayRomanSemiBold18Bluegray40001: "font-raleway font-semibold",
  txtRalewayRomanBold14Black900: "font-bold font-raleway",
  txtRalewayRomanBold14: "font-bold font-raleway",
  txtAlataRegular16GreenA700: "font-alata font-normal",
  txtRalewayRomanSemiBold18: "font-raleway font-semibold",
  txtRalewayRomanExtraBold32: "font-extrabold font-raleway",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
