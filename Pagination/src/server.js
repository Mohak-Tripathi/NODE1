

const app = require("./index");

const connectDB = require("./configs/db");

app.listen(1534, async () => {
	try {
		await connectDB();
		console.log("Listening at 1534...");
	} catch (err) {
		console.log(err);
	}
});
