import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";

const YukinaConfig: Configuration = {
  title: "StoryTelling",
  subTitle: "Incidencia del storytelling en el desarrollo de habilidades comunicativas del idioma inglés en estudiantes de sexto grado de la Institución Educativa Técnica Pio XII",
  brandTitle: "StoryTelling",

  description: "Demo Site",

  site: "https://cintya-blog.netlify.app",

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
  sign: "Aprender sin fronteras: El poder de la interculturalidad en la educación",
  avatarUrl: "https://s2.loli.net/2025/01/25/FPpTrQSezM8ivbl.webp",
  socialLinks: [],
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
