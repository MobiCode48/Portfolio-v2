import vikeReact from "vike-react/config";
import type { Config } from "vike/types";
import Head from "../layouts/HeadDefault.jsx";
import Layout from "./+Layout.jsx";

// Default config (can be overridden by pages)
export default {
  Layout,
  Head,
  // <title>
  title: "Emmanuel Ezeagwula",
  extends: vikeReact,
} satisfies Config;
