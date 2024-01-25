// Obtém o endereço IP do visitante
const ip = window.location.hostname;

// Obtém o navegador do visitante
const browser = window.navigator.userAgent;

// Obtém o sistema operacional do visitante
const os = window.navigator.appVersion;

// Obtém o tipo de dispositivo do visitante
const device = window.devicePixelRatio;

// Salva as informações em um arquivo TXT
const fs = require("fs");
fs.writeFile("info.txt", `IP: ${ip}\nBrowser: ${browser}\nOS: ${os}\nDevice: ${device}`, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Informações salvas com sucesso!");
  }
});
