const sharp = require('sharp');

sharp('original.png').resize(80).toFile('originalx80.png');
