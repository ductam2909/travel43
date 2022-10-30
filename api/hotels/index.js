const express = require('express')
const router = express.Router()

const Hotels = require('./model')

// @route:  GET /api/hotels/
// @desc:   Lấy ra tất cả hotel trong hệ thống
router.get('/', async (req, res) => {
  try {
    const limit = Number(req?.query?.limit || 10)
    const skip = Number(req?.query?.skip || 0) * limit
    const hotels = await Hotels.find().sort({ createdAt: 1 }).skip(skip).limit(limit)
    const count = await Hotels.count()
    res.status(200).json({ hotels, count })
  } catch (err) {
    res.status(500).json({ msg: 'Server error' })
  }
})

// @route:  POST /api/hotels/
// @desc:   Thêm mới hotel
router.post('/', async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).json({ msg: 'Vui lòng nhập đầy đủ thông tin' })
    }
    const newHotel = new Hotels(req.body)
    newHotel.save(function (error) {
      if (error) {
        const errors = []
        Object.keys(error?.errors).forEach(function (key) {
          errors.push(error?.errors[key].message)
        })
        return res.status(400).json({ errors })
      } else {
        res.status(201).json({ hotel: newHotel, msg: 'thêm mới thành công' })
      }
    })
  } catch (err) {
    res.status(500).json({ msg: 'Server error' })
  }
})

// @route:  GET /api/hotels/:id
// @desc:   Lấy thông tin chi tiết của hotel
router.get('/:id', async (req, res) => {
  try {
    const hotel = await Hotels.findById(req.params.id)
    if (!hotel) {
      return res.status(404).json({ msg: 'khách sạn không tồn tại' })
    }
    res.status(200).json({ hotel })
  } catch (err) {
    res.status(500).json({ msg: 'Server error' })
  }
})

// @route:  put /api/hotels/:id
// @desc:   Cập nhật thông tin hotel
router.put('/:id', async (req, res) => {
  try {
    const hotel = await Hotels.findById(req.params.id)
    if (!hotel) {
      return res.status(404).json({ msg: 'khách sạn không tồn tại' })
    }
    const updateHotel = await Hotels.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(201).json({ hotel: updateHotel, msg: 'cập nhật thành công' })
  } catch (err) {
    res.status(500).json({ msg: 'Server error' })
  }
})

// @route:  DELETE /api/hotels/:id
// @desc:   Xóa hotel
router.delete('/:id', async (req, res) => {
  try {
    const hotel = await Hotels.findById(req.params.id)
    if (!hotel) {
      return res.status(404).json({ msg: 'khách sạn không tồn tại' })
    }
    await Hotels.findByIdAndDelete(req.params.id)

    res.status(201).json({ msg: 'xóa khách sạn thành công' })
  } catch (err) {
    res.status(500).json({ msg: 'Server error' })
  }
})

module.exports = router
