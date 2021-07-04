const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa-cors');

const app = new Koa();
const router = new Router();

app.use(cors());

const {
  downloadApp
} = require('./middleware/downloadMiddleware');

router.get('/yibaoqishou.apk',downloadApp);
router.get('/yibaoadmin.apk',downloadApp);
router.get('/workSpace.7z',downloadApp);

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
  console.log("服务器启动成功: 3000");
})