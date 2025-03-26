const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    title:{
      type: String,
      trim: true,
      required: 'Title is required',
      minLength: [3, "Title must be at least 3 chars"]

    },
    author:{
      type: String,
      trim: true,
      required: 'Author is required',
      minLength:[2, 'Author name must be at leastv 2 chars']
    },
    description:{
      type: String,

    }
  },
  {
    timestamps:true,
    toJSON: {
      transform: function(doc, ret){
        ret.id = ret._id
        delete ret._id
        delete ret.__v
        return ret
      }
    }
  }
)

const Book = mongoose.model('Book', bookSchema);
module.exports = Book