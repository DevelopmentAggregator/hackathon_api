import { Router } from 'express';
import { posts, create, remove, update } from '@hackatone/controllers';

const router = Router();

/**
 * @swagger
 *   /api/posts:
 *   post:
 *     summary: create post
 *     tags: [Post]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Post-write"
 *     responses:
 *       200:
 *         description: Successful created
 *       401:
 *         description: Unauthorized
 */
router.route('/').post(create);

/**
 * @swagger
 *   /api/posts/{id}:
 *   delete:
 *     summary: delete post
 *     tags: [Post]
 *     requestBody:
 *       required: false
 *     responses:
 *       200:
 *         description: Successful deleted
 *       401:
 *         description: Unauthorized
 */
router.route('/:id').delete(remove);


/**
 * @swagger
 *   /api/posts/{id}:
 *   patch:
 *     summary: update post
 *     tags: [Post]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Post-write"
 *     responses:
 *       200:
 *         description: Successful updted
 *       401:
 *         description: Unauthorized
 */
router.route('/:id').patch(update);

export default router;