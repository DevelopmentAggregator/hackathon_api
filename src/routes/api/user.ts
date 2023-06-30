import { Router } from 'express';
import { Register, users } from '@hackatone/controllers';

const router = Router();

/**
 * @swagger
 *   /api/users:
 *   get:
 *     summary: get users
 *     tags: [User]
 *     requestBody:
 *       required: false
 *     responses:
 *       200:
 *         description: Successful login
 *       401:
 *         description: Unauthorized
 */
router.route('/').get(users);

/**
 * @swagger
 *   /api/users:
 *   post:
 *     summary: create user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/User-write"
 *     responses:
 *       200:
 *         description: Successful created
 *       401:
 *         description: Unauthorized
 */
router.route('/').post(Register);

export default router;