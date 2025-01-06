import { Router } from 'express';
const router = Router();
import {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
  addFriend,
  deleteFriend,
  updateUser
} from '../../controllers/userController.js';

router.route('/').get(getAllUsers).post(createUser);

router.route('/:userId').get(getUserById).delete(deleteUser).put(updateUser);

router.route('/:userId/friends').post(addFriend);

router.route('/:userId/friends/:friendId').delete(deleteFriend);

export { router as userRouter} ;
