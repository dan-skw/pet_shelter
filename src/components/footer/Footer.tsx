import React from "react";
import { useCheckSize } from "../../hooks/useSizeCheck";
import { FooterDesktop } from "./footerSize/FooterDesktop";
import { FooterMobile } from "./footerSize/FooterMobile";

export const Footer = () => {
  const screenSize = useCheckSize();

  return (
    <>
      <section>{screenSize ? <FooterMobile /> : <FooterDesktop />}</section>
    </>
  );
};
