import express from 'express';
import Loader from '../core/Loader';
const router = express.Router();

router.get('/', async (req, res, next)=> {
  const UserModel = Loader.model('UserModel');
  const users = await UserModel.getAll();
  res.json(users);
});

router.get('/:userId',async(req,res,next) => {
  const UserModel = Loader.model('UserModel');
  const user = await UserModel.getByID(req.params.userId);
  res.json(user);
});

export default router;