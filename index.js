import express from 'express'
import getToutiao from './src/routers/getToutiao.js'
const app = express()

app.get('/', (req, res) => {
  res.send('欢迎使用微信云托管！')
})
app.use('/getToutiao', getToutiao)
const port = process.env.PORT || 80
app.listen(port, () => {
  console.log('服务启动成功，端口：', port)
})
