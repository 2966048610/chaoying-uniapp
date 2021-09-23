

const path = require("path");
 
function resolve(dir) {
  return path.join(__dirname, dir);
}

const name = "chaoying-uniapp";  // 这里填项目的名称
 
module.exports = {
  lintOnSave: process.env.NODE_ENV === "development",
  // 路径别名
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        "@": resolve("chaoying-uniapp"),
        "@components": resolve("chaoying-uniapp/components"),
        "@pages": resolve("chaoying-uniapp/pages"),
        "@static": resolve("chaoying-uniapp/static"),
        "@utils": resolve("chaoying-uniapp/utils"),
      },
    },
  },
};


