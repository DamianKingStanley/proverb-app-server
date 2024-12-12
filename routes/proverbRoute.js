import express from "express";

import {
  GetAllProverb,
  PostProverb,
  DeleteProverb,
  GetEnglishProverbs,
  GetIgboProverbs,
  GetYorubaProverbs,
  GetHauseProverbs,
} from "../controllers/proverbController.js";

const router = express.Router();

router.get("/get", GetAllProverb);
router.post("/post", PostProverb);
router.delete("/delete/:id", DeleteProverb);
router.get("/get-english", GetEnglishProverbs);
router.get("/get-igbo", GetIgboProverbs);
router.get("/get-yoruba", GetYorubaProverbs);
router.get("/get-hausa", GetHauseProverbs);

export default router;
