const express = require("express"); 
let books = require("../../books");
const {
  bookCreate,
  deleteBook,
  updateBook,
  getAllBooks,
  getBookById,
} = require("./books.controllers");
const Book_ = require("../../models/Book_");
const upload = require("../../middlewares/multer");
const router = express.Router();



router.param("_id", async (req, res, next, _id) => {
    const book = await Book_.findById(_id);
    if (!book) {
      return res.status(404).json({ message: "book with this id not found" });
    }
    req.book = book;
    next();
  });

router.get("/", getAllBooks);
router.post("/", upload.single("bookImage"), bookCreate);
router.delete("/:_id", deleteBook);
router.put("/:_id", updateBook);
router.get("/:_id", getBookById);

module.exports = router;