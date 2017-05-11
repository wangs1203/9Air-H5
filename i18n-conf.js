var path = require('path');
module.exports = {
  srcDir: path.join(__dirname, 'src'),
  buildDir: path.join(__dirname, 'dist/__build__'),
  distDir: path.join(__dirname, 'dist'),
  sourceLang: 'zh-cn',
  defaultLang: 'en',
  glob:['static/js/*'],
  regI18nContent:/<i18n>([\s\S]*?)<\/i18n>/g,
  regDelimeter:/_#(.*?)#_/g,
  saveLocalesTo: path.join(__dirname, 'dist/locales.json')
}
