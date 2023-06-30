import { Router } from 'express';
import { posts, create, remove, update } from '@hackatone/controllers';

const router = Router();

/**
 * @swagger
 *   /api/posts:
 *   get:
 *     summary: get posts
 *     tags: [Post]
 *     requestBody:
 *       required: false
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post-read'
 *       401:
 *         description: Unauthorized
 */
router.route('/').get(posts);

export default router;