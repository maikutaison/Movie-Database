const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let movieSchema = Schema({
  id: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	rated: {
		type: String,
	},
  released: {
		type: String,
	},
  runtime: {
		type: String,
	},
  genre: {
		type: [],
	},
  director: {
		type: [],
	},
  writer: {
		type: [],
	},
  actors: {
		type: [],
	},
  plot: {
		type: String,
	},
  language: {
		type: String,
	},
  poster: {
		type: String,
	},
  ratings: {
		type: [],
	},
  similar: {
		type: [],
	}
  //directors: [Schema.Types.ObjectId],
  //writers: [Schema.Types.ObjectId],
  //actors: [Schema.Types.ObjectId],
  //similar: [Schema.Types.ObjectId]
});

module.exports = mongoose.model("Movie", movieSchema);
