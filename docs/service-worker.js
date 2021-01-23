/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c336546eecea96f50de587d4f01a5c2c"
  },
  {
    "url": "api/cli.html",
    "revision": "f3115b9e83f6b871b2a1593801b7da71"
  },
  {
    "url": "api/node.html",
    "revision": "0cc3109d809dd96149a5ffb2e9278a64"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.fca152ce.css",
    "revision": "6411f7d795ed9d48e79ab1152182a574"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.84acbb53.js",
    "revision": "68b5c106f99f36c91af44702a0c8269f"
  },
  {
    "url": "assets/js/11.702efeb3.js",
    "revision": "577b162aaf0e8f99565c877b75d49e9a"
  },
  {
    "url": "assets/js/12.589fb250.js",
    "revision": "5a8a6a3cdb6fac79e40ccdbf3faea9fc"
  },
  {
    "url": "assets/js/13.5b7e8614.js",
    "revision": "88c98a85332f94077100c7da847d76c5"
  },
  {
    "url": "assets/js/14.a954bfd1.js",
    "revision": "9c7a95d5603d93f3ed3d865395d3aebc"
  },
  {
    "url": "assets/js/15.bd11c63a.js",
    "revision": "b6807cf1a7706853008468c4ec0d0d69"
  },
  {
    "url": "assets/js/16.b4fb7988.js",
    "revision": "caa81d6c3d9b4d3a0a4c1bed031661ad"
  },
  {
    "url": "assets/js/17.61d84266.js",
    "revision": "807fb134e16d3edfeb190b03cb2c30bb"
  },
  {
    "url": "assets/js/18.24a2bff9.js",
    "revision": "f7fc8af86b9a7a0bce7631baaf2a099c"
  },
  {
    "url": "assets/js/19.43d31d8f.js",
    "revision": "6ad6bae2ed48ba0e487c5fc80e31e264"
  },
  {
    "url": "assets/js/20.b22f54d0.js",
    "revision": "f767dc368c18d21ea4787d20224866f6"
  },
  {
    "url": "assets/js/21.9c07bc91.js",
    "revision": "cbe802ed6633ad6573b0534ddef3e7c9"
  },
  {
    "url": "assets/js/22.32e1eb60.js",
    "revision": "afe144dd2c25e17c26b8bebe27cedb4c"
  },
  {
    "url": "assets/js/23.093427d3.js",
    "revision": "d827cb16f84f3641dc47463f6d97d1f9"
  },
  {
    "url": "assets/js/24.e648d309.js",
    "revision": "b45d312ef0c52d8ecadf8e4691730a52"
  },
  {
    "url": "assets/js/25.d7282ca4.js",
    "revision": "a4b314b7ec244f6dd1ef00ac0bbf57ba"
  },
  {
    "url": "assets/js/26.35acf93d.js",
    "revision": "a494241bbdd12fe0806b2596888f88df"
  },
  {
    "url": "assets/js/27.56ca4ce1.js",
    "revision": "66e2ac5e93fcaac8a0e8b77ce667bb53"
  },
  {
    "url": "assets/js/28.93379c82.js",
    "revision": "063fc0463ff4f69fe7d046bb618c6495"
  },
  {
    "url": "assets/js/29.51d63262.js",
    "revision": "d2824026c3e70562c49277aac3598c61"
  },
  {
    "url": "assets/js/30.1b336946.js",
    "revision": "d3161fa6d4666cc13007b46ec4dc656d"
  },
  {
    "url": "assets/js/31.e297de45.js",
    "revision": "d6cb1a5cc58b8ee435eb94e3dee7e1c0"
  },
  {
    "url": "assets/js/32.4bae9555.js",
    "revision": "54767042aa9d11dd5903f111f232468d"
  },
  {
    "url": "assets/js/33.4239fd2e.js",
    "revision": "510419531f0e1e65f1a212db62815d6f"
  },
  {
    "url": "assets/js/34.bbc16b3c.js",
    "revision": "5a8c574d395baf4faecce5fedabe615e"
  },
  {
    "url": "assets/js/35.f16977ac.js",
    "revision": "f3d538da3102b02a3ec0c950f802463d"
  },
  {
    "url": "assets/js/36.6141cdc8.js",
    "revision": "22dc846461a00f4c134c17ddf7d4385c"
  },
  {
    "url": "assets/js/37.43f5a7f6.js",
    "revision": "ee9204c8e1c4e874089a27005b770d72"
  },
  {
    "url": "assets/js/38.01c53507.js",
    "revision": "acd31905b9c8dc4b0f502f00e6dd67c4"
  },
  {
    "url": "assets/js/39.21f63708.js",
    "revision": "b76cfcfae0f10b866b5617405c267897"
  },
  {
    "url": "assets/js/40.f9f38954.js",
    "revision": "077fe3379fa862ffb15497af83921e5d"
  },
  {
    "url": "assets/js/41.0175e1f4.js",
    "revision": "15a7a7a1010d3e9ab49e97e3953cd69b"
  },
  {
    "url": "assets/js/42.422cba18.js",
    "revision": "ee7afae977a7664d54a153a751e5bf5e"
  },
  {
    "url": "assets/js/43.3d77a131.js",
    "revision": "668052596ee770a0ec3b9d81a72c65c1"
  },
  {
    "url": "assets/js/44.aab84de2.js",
    "revision": "908af2a40d017eacdd687e56dd4d3f07"
  },
  {
    "url": "assets/js/45.ac7ca1c5.js",
    "revision": "4d74ffc424f5f032354f0ed952d1d40f"
  },
  {
    "url": "assets/js/46.9982952d.js",
    "revision": "bb53693ef69121b13ecdebee046a6498"
  },
  {
    "url": "assets/js/47.d4c85adf.js",
    "revision": "acd7575bf3ee5c41c4489f4cce83d585"
  },
  {
    "url": "assets/js/48.d00a7fe9.js",
    "revision": "64c778b789cd3215c6077679f347636b"
  },
  {
    "url": "assets/js/49.03487062.js",
    "revision": "ee0badb9837097edbc930b777dbae15a"
  },
  {
    "url": "assets/js/5.cdfc0b9f.js",
    "revision": "dafbc2006249b85a8200912d18df2177"
  },
  {
    "url": "assets/js/50.bbfd00cd.js",
    "revision": "74ba62322c7b839c4ec594873be94dfa"
  },
  {
    "url": "assets/js/51.1ef38ba0.js",
    "revision": "e6a29f1d0f181864ac02f691acf77a29"
  },
  {
    "url": "assets/js/52.f352c22a.js",
    "revision": "92e2a4432b10c4674ffe002d63e7a2a6"
  },
  {
    "url": "assets/js/53.fa377a7b.js",
    "revision": "dea6990b2ebe04a2572799fd2a8029a7"
  },
  {
    "url": "assets/js/54.16d81c63.js",
    "revision": "9d3cfa2da8977307a9a322b06018a27e"
  },
  {
    "url": "assets/js/55.b2e1b9f2.js",
    "revision": "de65cec91784004b743aca25c3ae71ef"
  },
  {
    "url": "assets/js/56.99f69695.js",
    "revision": "6addaa139907a67642d535971c8a23c9"
  },
  {
    "url": "assets/js/57.54be906e.js",
    "revision": "b230d6fcc12141d3e452564a70bbb019"
  },
  {
    "url": "assets/js/58.e28944e4.js",
    "revision": "7cdbb37bb6f6a235b1b81cc598f233af"
  },
  {
    "url": "assets/js/59.647fcd7b.js",
    "revision": "1eedc3c3669b1b603cf5994e17d2a8c7"
  },
  {
    "url": "assets/js/6.8f67e34e.js",
    "revision": "985ec852fe9c310a17f2176a25b7dd80"
  },
  {
    "url": "assets/js/60.ed875cf2.js",
    "revision": "99315284e03e96d717a445fc5504c62a"
  },
  {
    "url": "assets/js/61.d244e754.js",
    "revision": "2bb6d6be55ea50410c0fdcf10f4fdb1f"
  },
  {
    "url": "assets/js/62.82572383.js",
    "revision": "4598534cf871b8f7cc8109b01ee31e06"
  },
  {
    "url": "assets/js/63.afac6e14.js",
    "revision": "b0d917abe33c6c634d3965735239919c"
  },
  {
    "url": "assets/js/64.1793ed0c.js",
    "revision": "6bc0870afa1661f4aca5c2333e686e75"
  },
  {
    "url": "assets/js/65.75847d31.js",
    "revision": "9a68fff593796b57f136c861949302bc"
  },
  {
    "url": "assets/js/66.a613f673.js",
    "revision": "48c351a3b537d06e2f5bfe77f126dedc"
  },
  {
    "url": "assets/js/67.374e7e54.js",
    "revision": "ab1ba407241ada64b4ab3e354f135d50"
  },
  {
    "url": "assets/js/7.2df5fd3a.js",
    "revision": "05641d0fd21fa946493dea304cb7c3a7"
  },
  {
    "url": "assets/js/8.79c44677.js",
    "revision": "f1407abffa188b9f81b2f7fad69f105a"
  },
  {
    "url": "assets/js/9.4c44b987.js",
    "revision": "9ddff524112de3d1d50e13accabb3ac7"
  },
  {
    "url": "assets/js/app.28715422.js",
    "revision": "742a896b45e56152154bedf017189119"
  },
  {
    "url": "assets/js/vendors~docsearch.b3708bf9.js",
    "revision": "6ac16423deb78c40f9f4ca87229996e4"
  },
  {
    "url": "assets/js/vendors~flowchart.3b4fa92d.js",
    "revision": "903ce990afb2698e93c25fbe4bceb697"
  },
  {
    "url": "assets/js/vendors~notification.11c6c6d5.js",
    "revision": "18c76fb300310a126987b92a7f64b760"
  },
  {
    "url": "config/index.html",
    "revision": "c4bbd0ec7cc8a80422c21f256c73c53b"
  },
  {
    "url": "faq/index.html",
    "revision": "1c7a085f389f88aed4035ac827e0a390"
  },
  {
    "url": "guide/assets.html",
    "revision": "e2fe7f213c7d56a99870db9a7abfb07e"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "fc40d3ef3fd0a20419c623ea24dfcdbe"
  },
  {
    "url": "guide/deploy.html",
    "revision": "880c278869bf45723415264ea9cbadd6"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "8db345b53f89c6182ed402fdb1877ad0"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "533416a2ae1213e1737c8e3cd19aad44"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "610de391a2e9e1e89274b3bfb84dd774"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "21ec50f13ef2277f213ccec788ce66c9"
  },
  {
    "url": "guide/i18n.html",
    "revision": "a54febec7d02320abe9e27179e3bf329"
  },
  {
    "url": "guide/index.html",
    "revision": "8f4c6f42fe55aad2eebd472fc51e8d95"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "4a845d5afcc4f39ae91f46562efabb05"
  },
  {
    "url": "guide/markdown.html",
    "revision": "83fbe0490748e0495bd3eb5a36945cfb"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "62fc21ae5cef7626eb62ecadafc25fe2"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "1d56a857df3ec3f20a00233b72358b62"
  },
  {
    "url": "hero.png",
    "revision": "e42a1720bcf918642cfe85f4da485f2d"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "24bf1ac337cbbae2d7c739de0e841f3f"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "fa2e5b1cdb2c54a248767097ce7a9a7f"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "ddbd17cc55e882d749d081648391be95"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "miscellaneous/design-concepts.html",
    "revision": "21dfa12e374473b18b6e5b2254132c6d"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "90d9c12050c1c45b246c7e7e8de20e2c"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "33fcc16f3fa5cf7c43e39c91691b35eb"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "a81895fac0d020ed87202cfa5543ceec"
  },
  {
    "url": "notes/index.html",
    "revision": "67287ede8e631a27709d0a12068a5c99"
  },
  {
    "url": "notes/using-a-theme.html",
    "revision": "1f4aed777f02b4db30df2b21d9585c68"
  },
  {
    "url": "notes/writing-a-theme.html",
    "revision": "b0e3cc2ccf2bf6203f99514c5d9f7cc9"
  },
  {
    "url": "notes/程序员和数学.html",
    "revision": "30093422db156902414a1cc84ba92b71"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "af94432fee6ef85bf4fd5591dff8d120"
  },
  {
    "url": "plugin/index.html",
    "revision": "eda0be1fb13ffaf799866d0626ff66d2"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "8d3e27e2c5f04e459eb5f7e259757f42"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "9645e00587a8aad2c0cb40648e85d134"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "840ce0129d770c727f33fed4ce61282d"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "62ce127b952bad083776a009ae2483be"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "56000f534239a8a1df35b5d055b66754"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "5c9624002fa042cd75885a03e5395c24"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "c9a2e8afc8b751ca67c01384e4d98b76"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "b8e4e4fe37b50e93b2dfcb5ec5fd52bb"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "10347df6297bbba5a7e2f3cbcfc5e662"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "a344f14234f2af070f78739e11313601"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "8136adbbc16c27a6760a06b0107302a6"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "cbe54c3a2c668b24ab75176d0dbedf8e"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "ffdc4da5498c0239b1a9aa879e73d2b4"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "1aab2ba1909967e489e983596ee4df3a"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "dad01ba66b1a9210295d83ada5db6ed2"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "6b8402230880aaf8430fa13daad945d3"
  },
  {
    "url": "theme/index.html",
    "revision": "f93e154cf6a0d6aacff004b3062b4aeb"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "c5beb3fc21a5345693c4f75bd136e521"
  },
  {
    "url": "theme/option-api.html",
    "revision": "2a4953f2917bd2a45d5046059126931e"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "ae2905e7117614794557d5f8b9923297"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "d6ffac5514dead812fcb471c5cb6f797"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
