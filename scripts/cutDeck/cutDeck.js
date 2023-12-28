const Jimp = require("jimp");
const forloop = require("async-for-loop");
const path = require("path");
const width = 150,
  height = 210,
  h = 53,
  v = 1;
async function crop(source, filename, offSetX, offSetY, width, height, cb) {
  // Reading Image
  const image = await Jimp.read(source);
  image.crop(offSetX, offSetY, width, height).write(filename);
}
//
forloop(
  h,
  (hi, nextH) => {
    forloop(
      v,
      async (vi, nextV) => {
        console.log(hi, vi)
        await crop(
          path.resolve(__dirname, "..", "..", "assets/deck/deck.png"),
          path.resolve(__dirname, "..", "..", "assets/deck/cards", `${hi}_${vi}.png`),
          hi * width,
          vi * height,
          width,
          height,
          nextV
        );
        nextV();
      },
      () => {
        nextH();
      }
    );
  },
  () => {
    console.log("Image is processed successfully");
  }
);
