const fs = require('fs');
const path = require('path');

const srcFolder = './src';

const folders = [
  'components',
  'containers',
  'services',
  'utils',
  'assets/images',
  'styles',
];

const createFolder = (folderPath) => {
  fs.mkdirSync(folderPath, { recursive: true }, (err) => {
    if (err) throw err;
  });
};

const createFile = (filePath, content = '') => {
  fs.writeFileSync(filePath, content, (err) => {
    if (err) throw err;
  });
};

if (!fs.existsSync(srcFolder)) {
  console.log('Erreur: Le dossier "src" est introuvable. Assurez-vous de lancer ce script à partir de la racine du projet React.');
  process.exit(1);
}

// Création des dossiers
folders.forEach((folder) => {
  const folderPath = path.join(srcFolder, folder);
  createFolder(folderPath);
});

// Création des fichiers de base
createFile(path.join(srcFolder, 'styles', 'global.css'));
createFile(path.join(srcFolder, 'styles', 'variables.css'));
createFile(path.join(srcFolder, 'utils', 'helpers.js'));
createFile(path.join(srcFolder, 'services', 'api.js'));

// Création du fichier index.js
createFile(path.join(srcFolder, 'index.js'));

console.log('L\'architecture du projet a été créée avec succès dans le dossier "src".');
