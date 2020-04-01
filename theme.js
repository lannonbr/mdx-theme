import { pre, code } from "./syntax-highlighter";

export default {
  googleFont:
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap",
  fonts: {
    body: "Inter, sans-serif",
    monospace: '"Inter", monospace'
  },
  colors: {
    text: "black",
    background: "white",
    primary: "blue",
    heading: "#663399",
    footerBg: "#E0D6EA",
    footerFg: "#663399"
  },
  styles: {
    Slide: {
      padding: 30,
      boxSizing: "border-box",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      lineHeight: 1.6
    },
    Footer: {
      backgroundColor: "footerBg",
      color: "footerFg",
      lineHeight: 3,
      display: "flex",
      justifyContent: "space-between"
    },
    h1: {
      color: "heading"
    },
    h2: {
      color: "heading",
      fontWeight: "400",
      margin: 0
    }
  },
  components: {
    pre,
    code
  }
};
