import { Router } from 'express';
const router = Router();
import { getAllThoughts, getThoughtById, createThought, updateThoughts, deleteThought, removeReact, addReact, } from '../../controllers/thoughtController.js';
router.route('/').get(getAllThoughts).post(createThought);
router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThoughts)
    .delete(deleteThought);
router.
    route('/:thoughtId/reactions')
    .post(addReact);
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReact);
export { router as thoughtRouter };
