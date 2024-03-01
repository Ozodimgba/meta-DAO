import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <script src="https://giscus.app/client.js"
        data-repo="Ozodimgba/meta-DAO"
        data-repo-id="R_kgDOLWN_sA"
        data-category="[ENTER CATEGORY NAME HERE]"
        data-category-id="[ENTER CATEGORY ID HERE]"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="en"
        crossOrigin="anonymous"
        async>
</script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
