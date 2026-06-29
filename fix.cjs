const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(/src=\"\.\/certificate-images\//g, 'src=\"/certificate-images/');
html = html.replace(/href=\"\.\/certificate-images\//g, 'href=\"/certificate-images/');
html = html.replace(/openCertificate\(\'\.\/certificates\//g, 'openCertificate(\'/certificates/');
html = html.replace(/src=\"\.\/project-images\//g, 'src=\"/project-images/');
html = html.replace(/href=\"\.\/AnkitGola_Resume.pdf\"/g, 'href=\"/AnkitGola_Resume.pdf\"');
html = html.replace(/src=\"\.\/profile.jpg\"/g, 'src=\"/profile.jpg\"');


fs.writeFileSync('index.html', html);
console.log('Fixed URLs in index.html');
