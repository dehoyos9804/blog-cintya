import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";

const YukinaConfig: Configuration = {
  title: "StoryTelling",
  subTitle: "Incidencia del storytelling en el desarrollo de habilidades comunicativas del idioma inglés en estudiantes de sexto grado de la Institución Educativa Técnica Pio XII mediante la implementación de herramientas y recursos digitales",
  brandTitle: "StoryTelling",

  description: "Demo Site",

  site: "https://yukina-blog.vercel.app",

  locale: "es", // set for website language and date format

  navigators: [
    {
      nameKey: I18nKeys.nav_bar_home,
      href: "/",
    },
    {
      nameKey: I18nKeys.nav_bar_archive,
      href: "/archive",
    },
    {
      nameKey: I18nKeys.nav_bar_about,
      href: "/about",
    },
  ],

  username: "Cintya Carolina",
  sign: "Ad Astra Per Aspera.",
  avatarUrl: "https://s2.loli.net/2025/01/25/FPpTrQSezM8ivbl.webp",
  socialLinks: [
    {
      icon: "line-md:github-loop",
      link: "https://github.com/WhitePaper233",
    },
    {
      icon: "mingcute:bilibili-line",
      link: "https://space.bilibili.com/22433608",
    },
    {
      icon: "mingcute:netease-music-line",
      link: "https://music.163.com/#/user/home?id=125291648",
    },
  ],
  maxSidebarCategoryChip: 6, // It is recommended to set it to a common multiple of 2 and 3
  maxSidebarTagChip: 12,
  maxFooterCategoryChip: 6,
  maxFooterTagChip: 24,

  banners: [
    "https://storage.googleapis.com/alcoapp/utils/banner0.jpg",
    "https://storage.googleapis.com/alcoapp/utils/banner1.png",
    "https://storage.googleapis.com/alcoapp/utils/banner2.jpg",
    "https://storage.googleapis.com/alcoapp/utils/banner3.png",
    "https://storage.googleapis.com/alcoapp/utils/banner4.jpg",
    "https://storage.googleapis.com/alcoapp/utils/banner5.jpg",
    "https://storage.googleapis.com/alcoapp/utils/banner6.jpg",
    "https://storage.cloud.google.com/alcoapp/utils/banner7.jpg",
  ],

  slugMode: "HASH", // 'RAW' | 'HASH'

  license: {
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },

  // WIP functions
  bannerStyle: "LOOP", // 'loop' | 'static' | 'hidden'
};

export default YukinaConfig;
