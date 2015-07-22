var mobyDick = {
	name: "Moby Dick",
	category: "Fiction",
	price: 1.99,
	description: "An epic tale about hunting a whale.",
	imgUrl: "http://static.comicvine.com/uploads/original/4/48250/933085-moby_dick.jpg",
	sellingPoints: ["Cheap","Classic","Scary"]

};

var braveNew = {
	name: "Brave New World",
	category: "Fiction",
	price: 12.50,
	description: "If you get old, you die.",
	imgUrl: "http://ecx.images-amazon.com/images/I/41le8ej-fiL._SY344_BO1,204,203,200_.jpg",
	sellingPoints: ["Satire","Required reading","It's a book!"]
};

var ifHemingway = {
	name: "If Hemingway Wrote Javascript",
	category: "Educational",
	price: 0.75,
	description: "A strange and beautiful book.",
	imgUrl: "https://www.nostarch.com/sites/default/files/imagecache/product_main_page/Hemingway_cover-front-FINAL-new.png",
	sellingPoints: ["In-depth look into Javascript","Easy to read!","It's also a book!"]
};

var books = [mobyDick, braveNew, ifHemingway];
var albums = [synchronicity, highwaytoHell, fortyLicks];

var addBookToPage = function (book) {
	$("#mobyDick .name").text(book.name)
	$("#mobyDick .category").text(book.category)
//	$("#book .name").prepend(book.name); << Find way to abstract title or name and search file for matching ID.

};


addBookToPage(mobyDick);