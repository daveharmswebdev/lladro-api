import { Router } from 'express';
import {
  createRegion,
  getRegions,
  getRegionById,
  updateRegion,
  deleteRegion,
  getRegionsWithDoers,
} from '../controllers/regionController';

const router = Router();

router.post('/', createRegion);
router.get('/', getRegions);
router.get('/with-doers', getRegionsWithDoers); // Ensure this is before /:id
router.get('/:id', getRegionById);
router.put('/:id', updateRegion);
router.delete('/:id', deleteRegion);

export default router;
