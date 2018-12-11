module.exports = function(env) {
  console.log('env:' + env);
  return require(`./webpack.${env}.config.js`)
}
