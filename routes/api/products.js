const express = require('express')
const router = express.Router()
const config = require('config')
const { check, validationResult } = require('express-validator')
const auth = require('../../middleware/auth')
const Product = require('../../models/Product')
const User = require('../../models/User')

// post api/products
// @ route : localhost:4000/api/posts

router.post(
  '/',
  [
    auth,
    [
      check('nameproduct', 'nameproduct is required').notEmpty(),
      check('image', 'image is required').notEmpty(),
      check('place', 'place is required').notEmpty(),
      check('category', 'category is required').notEmpty(),
      check('price', 'price is required').notEmpty(),
      check('contact', 'contact is required').notEmpty(),
      check('shipping', 'shipping is required').notEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const user = await User.findById(req.user.id).select('-password')
    const {
      nameproduct,
      image,
      place,
      category,
      price,
      shipping,
      description,
      contact,
    } = req.body
    try {
      const newProduct = new Product({
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
        nameproduct,
        image,
        place,
        category,
        price,
        shipping,
        description,
        contact,
      })
      const CreateProduct = await newProduct.save()
      res.json(CreateProduct)
      //   newProduct.save(newProduct)
      //   res.status(201).json({ msg: 'Product Added Succesfully' })
    } catch (error) {
      console.log(error)
      res.status(500).json({ errors: error })
    }
  }
)
// description update product
// put api/products
// @ route : localhost:4000/api/products/:id

router.put('/:id', [auth], async (req, res) => {
  const {
    nameproduct,
    image,
    place,
    category,
    price,
    shipping,
    description,
    contact,
  } = req.body

  try {
    const product = await Product.findById(req.params.id)

    // Check user
    if (product.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorizes' })
    }
    if (product) {
      product.nameproduct = nameproduct
      product.image = image
      product.place = place
      product.category = category
      product.price = price
      product.shipping = shipping
      product.description = description
      product.contact = contact
    }

    const updateProduct = await product.save()
    res.json(updateProduct)
    //   newProduct.save(newProduct)
    //   res.status(201).json({ msg: 'Product Added Succesfully' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ errors: error })
  }
})

// get
router.get('/', async (req, res) => {
  try {
    const products = await Product.find()
    res.json(products)
  } catch (err) {
    console.error(err.message)
    res.status(500)
  }
})

// get products category
router.get('/:category', async (req, res) => {
  try {
    const { category } = req.params
    const products = await Product.find({ category })
    res.json(products)
  } catch (err) {
    console.error(err.message)
    res.status(500)
  }
})

// delete
router.delete('/:id', auth, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    if (product.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorizes' })
    }
    await product.remove()
    res.json({ msg: 'Product removed' })
  } catch (err) {
    console.error(err.message)
    res.status(500)
  }
})

// PUT api/products/like/:id
// like a product
router.put('/like/:id', auth, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    //check if the product has already been liked
    if (
      product.likes.filter((like) => like.user.toString() === req.user.id)
        .length > 0
    ) {
      return res.json(400).json({ msg: 'Product already liked' })
    }
    product.likes.unshift({ user: req.user.id })

    await product.save()
    res.json(product.likes)
  } catch (err) {
    console.error(err.message)
    res.status(500)
  }
})

// PUT api/products/unlike/:id
// unlike a product
router.put('/unlike/:id', auth, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    //check if the product has already been liked
    if (
      product.likes.filter((like) => like.user.toString() === req.user.id)
        .length === 0
    ) {
      return res.json(400).json({ msg: 'Product has not yet been liked' })
    }

    // Get remove index
    const removeIndex = product.likes
      .map((like) => like.user.toString())
      .indexOf(req.user.id)
    product.likes.splice(removeIndex, 1)
    await product.save()
    res.json(product.likes)
  } catch (err) {
    console.error(err.message)
    res.status(500)
  }
})
// @route   POST api/products/comment/:id
// @desc    Add comment to product
// @access  Private
router.post(
  '/comment/:id',
  [auth, [check('text', 'Text is required').notEmpty()]],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    try {
      const user = await User.findById(req.user.id).select('-password')
      const product = await Product.findById(req.params.id)
      const newComment = {
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
        text: req.body.text,
      }
      product.comments.unshift(newComment)
      await product.save()
      res.json(product.comments)
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  }
)
// @route   Delete api/products/comment/:id/:comment_id
// @desc    delete comment
// @access  Private
router.delete('/comment/:id/:comment_id', auth, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    //pull out comment
    const comment = product.comments.find(
      (comment) => comment.id === req.params.comment_id
    )
    //Make sure comment exists
    if (!comment) {
      return res.status(404).json({ msg: 'Comment does not exist' })
    }
    //check user
    if (comment.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' })
    }
    // Get remove index
    const removeIndex = product.comments
      .map((comment) => comment.user.toString())
      .indexOf(req.user.id)
    product.comments.splice(removeIndex, 1)
    await product.save()
    res.json(product.comments)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})
module.exports = router
