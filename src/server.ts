import "./setup";
import "./database";
import app from "./app";

const port = process.env.PORT;

app.listen(port, () => {
  console.log("Servidor iniciado na porta ", port);
});
