import "styles/globals.css";
import { useEffect } from "react";
import App from "next/app";
import type { AppProps } from "next/app";
// import { config } from "@fortawesome/fontawesome-svg-core";
// import "@fortawesome/fontawesome-svg-core/styles.css";

import Script from "next/script";
// import { DefaultSeo } from "next-seo";
import { useState } from "react";
//@ts-ignore
// import TagManager from "react-gtm-module";
import { ModalContext } from "@/constants/lib/context/demo-modal";
import { getGlobalData } from "@/constants/lib/util/api";
import Layout from "@/constants/layout";
export default function MyApp({ Component, pageProps }: AppProps) {
  //@ts-ignore
  const { global } = pageProps;
  // config.autoAddCss = false;
  const [modalVisible, setModalVisible] = useState(false);
  const [quoteModalVisible, setQuoteModalVisible] = useState(false);

  const value = {
    modalVisible,
    setModalVisible,
    quoteModalVisible,
    setQuoteModalVisible,
  };
  // useEffect(() => {
  //   if (process.env.NEXT_PUBLIC_GTM_CONTAINER_ID) {
  //     TagManager.initialize({
  //       gtmId: process.env.NEXT_PUBLIC_GTM_CONTAINER_ID as string,
  //     });
  //   }
  // }, []);
  return (
    <ModalContext.Provider value={value}>
      <Script
        src="https://player.vimeo.com/api/player.js"
        strategy="lazyOnload"
      />
      <Script
        src="https://player.vimeo.com/video/850946356?autoplay=1&loop=1&autopause=0"
        strategy="lazyOnload"
      />
      <Script
        src="https://player.vimeo.com/video/859317647?autoplay=1&loop=1&autopause=0&muted=1"
        strategy="lazyOnload"
      />
      <Script
        src="https://player.vimeo.com/video/850946356?autoplay=1&loop=1&autopause=0"
        strategy="lazyOnload"
      />
      <Script
        src="https://player.vimeo.com/video/852296313?autoplay=1&loop=1&autopause=0"
        strategy="lazyOnload"
      />

      <Layout global={global}>
        {/* <DefaultSeo {...SEO} /> */}
        <Component {...pageProps} />
      </Layout>
    </ModalContext.Provider>
  );
}

MyApp.getInitialProps = async function (ctx: any) {
  const appProps = await App.getInitialProps(ctx);
  const getGlobal = await getGlobalData();
  const global = getGlobal.data.attributes;
  return { ...appProps, pageProps: { global, path: ctx.pathname } };
};
