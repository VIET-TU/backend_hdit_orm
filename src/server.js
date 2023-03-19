import express from "express";
import connection from "./config/connectionDb";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/homePage";

const app = express();

// config body paster
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

configViewEngine(app);

//test connection db
connection();

// init routes
initWebRoutes(app);

app.listen(8000, () => {
  console.log("sever run on success");
});
