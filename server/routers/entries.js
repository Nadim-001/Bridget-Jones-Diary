const { Router } = require("express");

const entriesController = require("../controllers/entriesController");

const diaryRouter = Router();

diaryRouter.get("/", entriesController.index);
diaryRouter.get("/:id", entriesController.show);
diaryRouter.post("/", entriesController.create);
diaryRouter.delete("/:id", entriesController.destroy);
diaryRouter.patch("/:id", entriesController.update);

module.exports = diaryRouter;