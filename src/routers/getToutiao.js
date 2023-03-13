import { Router } from 'express'
import axios from 'axios';
const router = Router()
router.get('/', async (req, res, next) => {
  let data = await axios.get('https://www.toutiao.com/hot-event/hot-board/?origin=toutiao_pc')
  if (data.status === 200) {
    res.send({
      code: 200,
      data: data.data.data
    })
  } else {
    res.send({
      code: 400,
      data: "查询失败！"
    })
  }
})
export default router;
