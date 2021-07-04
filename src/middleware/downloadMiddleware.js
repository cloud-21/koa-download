const cwd = process.cwd();
const send = require('koa-send');

const downloadApp =  async (ctx, next) => {
  const fileName = ctx.request.url.slice(1);
  console.log(fileName);
  ctx.attachment(fileName);
  await send(ctx, fileName, { root: cwd + '/static' });
}

module.exports = {
  downloadApp
}