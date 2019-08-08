import React, { useEffect, useState } from "react";
// import { Layout, Header, Content, Footer, FooterLinks, Wrapper } from "../Layout/Layout.styles";
import { timedoutPromise } from "../../helpers/timedoutPromise";
import { LOREM_IPSUM } from "../../helpers/lorem";
import Page from "../Page/Page";
import { P } from "../Layout/Layout.styles";

const Home = () => {
  const [contentVisible, setContentVisible] = useState(false);
  useEffect(function() {
    const observer = new PerformanceObserver(list => {
      for (const entry of list.getEntries()) {
        console.log(entry);
      }
    });
    observer.observe({ type: "layoutShift", buffered: true });

    return observer.disconnect;
  }, []);

  useEffect(function() {
    timedoutPromise(2000).then(() => setContentVisible(true));
  });

  return (
    // <Layout>
    //   <Icons />
    //   <Header>miquido</Header>
    //   <Menu />
    //   <Content>
    //     <Wrapper>
    //       {contentVisible && (
    //         <>
    //           <p>{LOREM_IPSUM}</p>
    //           <img
    //             src="./cat.png"
    //             alt="cat"
    //             // intrinsicsize="300 x 300"
    //           />
    //           <p>{LOREM_IPSUM}</p>
    //           <p>{LOREM_IPSUM}</p>
    //         </>
    //       )}
    //     </Wrapper>
    //   </Content>
    //   <Footer>
    //     <FooterLinks />
    //   </Footer>
    // </Layout>
    <Page title="Lorem Impsum">
      {contentVisible && (
        <>
          <img
            src="https://picsum.photos/700/300"
            alt="cat"
            width="100%"
            // intrinsicsize="300 x 300"
          />
          <P>{LOREM_IPSUM}</P>
          <P>{LOREM_IPSUM}</P>
        </>
      )}
    </Page>
  );
};

export default Home;
