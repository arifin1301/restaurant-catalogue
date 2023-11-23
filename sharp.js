const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const imageminWebp = require('imagemin-webp');

const target = path.resolve(__dirname, 'src/public/image/hero');
const destination = path.resolve(__dirname, 'dist/image');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target).forEach((image) => {
  sharp(`${target}/${image}`)
    .resize(1200)
    .toFile(
      path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-xlarge.jpg`,
      ),
    );

  sharp(`${target}/${image}`)
    .resize(800)
    .toFile(
      path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-large.jpg`,
      ),
    );

  sharp(`${target}/${image}`)
    .resize(480)
    .toFile(
      path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-small.jpg`,
      ),
    );
  sharp(`${target}/${image}`)
    .resize(1200)
    .toBuffer()
    .then((buffer) => {
      const webpOutputPath = path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-xlarge.webp`,
      );
      fs.writeFileSync(webpOutputPath, buffer);
      imageminWebp([webpOutputPath], {
        destination,
        plugins: [imageminWebp({ quality: 75 })],
      });
    });

  sharp(`${target}/${image}`)
    .resize(800)
    .toBuffer()
    .then((buffer) => {
      const webpOutputPath = path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-large.webp`,
      );
      fs.writeFileSync(webpOutputPath, buffer);
      imageminWebp([webpOutputPath], {
        destination,
        plugins: [imageminWebp({ quality: 75 })],
      });
    });

  sharp(`${target}/${image}`)
    .resize(480)
    .toBuffer()
    .then((buffer) => {
      const webpOutputPath = path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-small.webp`,
      );
      fs.writeFileSync(webpOutputPath, buffer);
      imageminWebp([webpOutputPath], {
        destination,
        plugins: [imageminWebp({ quality: 75 })],
      });
    });
});
