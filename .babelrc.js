if (process.env.NODE_ENV === "development") {
  require("./scripts/.babelrc/development");
} else if (process.env.NODE_ENV === "production") {
  require("./scripts/.babelrc/production");
} else if (process.env.NODE_ENV === "test") {
  require("./scripts/.babelrc/development");
} else {
  throw new Error("알 수 없는 모드입니다");
}

module.exports = {
  plugins: []
};
