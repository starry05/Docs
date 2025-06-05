import React from "react";
import OriginalLayout from "@theme-original/DocItem/Layout";
import { BackToTopButton, DownloadPdfButton } from "@site/src/components/FloatButtons";

export default function Layout(props) {
  return (
    <>
      <OriginalLayout {...props} />
      <BackToTopButton />
      <DownloadPdfButton />
    </>
  );
}
