module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
        alias: {
          "*": ".",
          "@root": "./",
          "@src": "./src",
          "@components": "./src/components",
          "@navigation": "./src/navigation",
          "@config": "./src/config",
          "@scenes": "./src/scenes",
          "@utils": "./src/utils",
          "@store": "./src/store",
          "@hooks": "./src/hooks",
          "@modals": "./src/modals",
        },
      },
    ],
  ],
};
