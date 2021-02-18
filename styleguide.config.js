module.exports = {
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.(j|t)sx?/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        { test: /\.css$/, use: ["style-loader", "css-loader"] },
        {
          test: /\.less$/,
          use: ["style-loader", "css-loader", "less-loader"],
        },
      ],
    },
  },
  propsParser: require("react-docgen-typescript").withCustomConfig(
    "./tsconfig.json"
  ).parse,
  components: [
    "src/components/Button/index.tsx",
    "src/components/Dropdown/index.tsx",
    "src/components/Input/index.tsx",
    "src/components/Message/index.tsx",
    "src/components/Modal/index.tsx",
  ],
};
