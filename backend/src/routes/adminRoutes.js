const express = require('express');
const { requireAuth, requireAdmin } = require('../middleware/auth');
const { getAllUsers, getAllTasks, deleteAnyTask } = require('../controllers/adminController');

const router = express.Router();
//swagger docs here.
/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Admin APIs
 */

/**
 * @swagger
 * /api/v1/admin/users:
 *   get:
 *     summary: Get all users
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of users
 */
router.get('/users', requireAuth, requireAdmin, getAllUsers);

/**
 * @swagger
 * /api/v1/admin/tasks:
 *   get:
 *     summary: Get all tasks
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of tasks
 */
router.get('/tasks', requireAuth, requireAdmin, getAllTasks);

/**
 * @swagger
 * /api/v1/admin/tasks/{id}:
 *   delete:
 *     summary: Delete any task
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Task deleted
 */
router.delete('/tasks/:id', requireAuth, requireAdmin, deleteAnyTask);

module.exports = router;
