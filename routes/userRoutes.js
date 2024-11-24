import express from 'express';
import { UpdateUser, createUser, getUserById, getUsers } from '../controller/userController.js';

const router = express.Router();

router.route('/').get(getUsers).post(createUser)
router.route('/:id').get(getUserById).put(UpdateUser)

export default router
