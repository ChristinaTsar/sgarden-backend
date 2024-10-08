import express from "express";

import { attachUser } from "../utils/index.js";

import publicRoutes from "./public.js";
import userSystemRoutes from "./user-system.js";
import userRoutes from "./user.js";

const router = express.Router({ mergeParams: true });

// Handlers for public routes
router.use("/", publicRoutes);

// Handlers for user routes
router.use("/", userSystemRoutes);

// Authorization middleware
router.use(attachUser);

// Handlers for user routes
router.use("/user/", userRoutes);

router.get("/test/", (req, res) => {
	const { user } = res.locals;
	console.log(user);
	return res.json({ success: true });
});

export default router;
