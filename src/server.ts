import express from "express";
import users from "./routes/users";

import error from "./error";

const app = express();
app.use("/users", users);

// 404
app.use((req: express.Request, res: express.Response) => {
  res.status(404).json({ message: "not found" });
});

// any error
app.use(error);

app.listen(3000);
export default app;
