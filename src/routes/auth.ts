import { Router } from 'express';
import { login, refresh } from '@hackatone/controllers';

const router = Router();

/**
 * @swagger
 *   /auth/login:
 *   post:
 *     summary: Log in user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 description: Email
 *               password:
 *                 type: string
 *                 description: Password
 *     responses:
 *       200:
 *         description: Successful login
 *       401:
 *         description: Unauthorized
 */
router.route('/login').post(login);

/**
 * @swagger
 *   /auth/refresh:
 *   post:
 *     summary: Refresh access token
 *     tags: [Authentication]
 *     requestBody:
 *       required: false
 *     responses:
 *       200:
 *         description: Successful token refresh
 *       401:
 *         description: Unauthorized
 */
router.route('/refresh').post(refresh);

export default router;