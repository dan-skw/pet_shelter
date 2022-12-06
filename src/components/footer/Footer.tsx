import React from "react";
import { useSizeCheck } from "../../hooks/useSizeCheck";
import { FooterDesktop } from "./footerSize/FooterDesktop";
import { FooterMobile } from "./footerSize/FooterMobile";

export const Footer = () => {
  const screenSize = useSizeCheck();

  return (
    <>
      <section>{screenSize ? <FooterMobile /> : <FooterDesktop />}</section>
    </>
  );
};
