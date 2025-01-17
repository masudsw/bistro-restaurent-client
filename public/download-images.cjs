const fs = require('fs');
const path = require('path');
const axios = require('axios');

// Create a folder to save images
const outputFolder = path.join(__dirname, 'menu_images');
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

// Load the menu.json file
const menuFilePath = path.join(__dirname, 'menu.json');
const menu = JSON.parse(fs.readFileSync(menuFilePath, 'utf-8'));

// Function to download images
const downloadImage = async (url, outputPath) => {
  try {
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream',
    });

    const writer = fs.createWriteStream(outputPath);
    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
  } catch (error) {
    console.error(`Failed to download ${url}: ${error.message}`);
  }
};

// Download all images
const downloadAllImages = async () => {
  for (const item of menu) {
    const imageUrl = item.image;
    const imageName = path.basename(imageUrl);
    const outputPath = path.join(outputFolder, imageName);

    console.log(`Downloading ${imageUrl}...`);
    await downloadImage(imageUrl, outputPath);
    console.log(`Downloaded: ${imageName}`);
  }

  console.log('All images have been downloaded!');
};

// Start downloading
downloadAllImages().catch((error) => {
  console.error(`Error: ${error.message}`);
});
