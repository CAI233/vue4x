module.exports = {
  outputDir: '../docs',
  lintOnSave:false,//关闭语法检测
  publicPath: process.env.NODE_ENV === 'production' ? '/vue4x/' : '/'
};
