var path = require('path'),
  fs = require('fs-extra'),
  gulp = require('gulp'),
  debug = require('gulp-debug'),
  replace = require('gulp-replace'),
  Sugar = require('sugar'),
  initConf = require('./conf/'),
  typeIs = require('./utils/type-is'),
  manifest = require('gulp-manifest'),
  collectI18nFromDir = require('./collect-i18n-from-dir'),
  i18nContent2Locales = require('./i18n-content2locales'),
  readLocalesFromFile = require('./read-locales-from-file');

/**
 * @param  {Object} customConf
 */
module.exports = function i18n(customConf) {
  var conf = initConf(customConf),
    locales = conf.locales;

    // console.log(conf);

  if (!locales) {
    var i18nContent = collectI18nFromDir(conf.srcDir, conf.regI18nContent, conf.defaultLang);
    if (conf.saveI18nContentTo) fs.outputJson(conf.saveI18nContentTo, i18nContent);

    locales = i18nContent2Locales(i18nContent, conf.sourceLang);
  } else {
    if (typeIs.string(locales)) locales = readLocalesFromFile(locales);
    console.log('[I18N notice] you are using a backup locales\n');
  }

  if (conf.saveLocalesTo) fs.outputJson(conf.saveLocalesTo, locales);

  var langs = Sugar.Array.subtract(Sugar.Object.keys(locales), conf.excludeLangs);

  // console.log('langs:'+langs);

  langs.forEach(function (lang) {
    var targetDir = path.join(conf.distDir, lang);
    fs.copySync(conf.buildDir, targetDir);

    // console.log('conf.glob:'+conf.glob);
    // console.log('targetDir:'+targetDir);

    gulp.src(conf.glob, { cwd: targetDir })
      .pipe(debug({ title: '[I18N translating ' + lang + '] ' }))
      .pipe(replace(conf.regDelimeter, function (match, target) {
        // no need to translate, just trim the delimeters
        if (lang === conf.sourceLang) return target;

        var translation = locales[lang][target];
        // console.log(translation);
        return typeIs.undefined(translation) ?
          console.log('>>>>>>>>>> Missing', lang, 'translation for', '[', match, ']\n') || target
          : translation;
      }))
      .pipe(gulp.dest(targetDir+'/static/js'))
      .on('end', function () {
        console.log('[I18N finished', lang + ']');
      });

      gulp.src([targetDir+'/**'], { cwd: targetDir })
        .pipe(manifest({
          hash: true,
          preferOnline: true,
          network: ['*'],
          filename: 'app.appcache',
          exclude: 'app.appcache'
         }))
        .pipe(gulp.dest(targetDir))
        .on('end', function () {
          console.log('[manifest finished', lang + ']');
        });
  });
};
