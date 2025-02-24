const fs = require("fs");
const path = require("path");

const sourceFilePath = path.resolve(__dirname, "dist/index.html");
const errorFilePath = path.resolve(__dirname, "dist/404.html");

fs.readFile(sourceFilePath, (err, data) => {
  if (err) {
    console.error("读取dist index.html文件出错", err);
    return;
  }
  fs.writeFile(errorFilePath, data, (err) => {
    if (err) {
      console.error("写入404.html文件时发生错误:", err);
      return;
    }
    console.log("404.html写入成功");
  });
});
