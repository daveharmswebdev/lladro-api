import { Request, Response } from 'express';
import * as doerService from '../services/doerService';
import { Doer as DoerInterface } from '../models/doer.model';

export const getAllDoers = async (req: Request, res: Response): Promise<void> => {
  try {
    const doers = await doerService.getAllDoers();
    res.status(200).json(doers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching doers', error });
  }
};

export const getDoerById = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      res.status(400).json({ message: 'Invalid ID format' });
      return;
    }
    const doer = await doerService.getDoerById(id);
    if (doer) {
      res.status(200).json(doer);
    } else {
      res.status(404).json({ message: 'Doer not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching doer', error });
  }
};

export const getDoerAndAllTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      res.status(400).json({ message: 'Invalid ID format' });
      return;
    }
    const doerWithTodos = await doerService.getDoerAndAllTodos(id);
    if (doerWithTodos) {
      res.status(200).json(doerWithTodos);
    } else {
      res.status(404).json({ message: 'Doer not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching doer and todos', error });
  }
};

export const createDoer = async (req: Request, res: Response): Promise<void> => {
  try {
    const doerData: Omit<DoerInterface, 'id'> = req.body;
    // Basic validation
    if (!doerData.firstName || !doerData.lastName) {
        res.status(400).json({ message: 'Missing required fields: firstName and lastName' });
        return;
    }
    const newDoer = await doerService.createDoer(doerData);
    res.status(201).json(newDoer);
  } catch (error) {
    res.status(500).json({ message: 'Error creating doer', error });
  }
};

export const updateDoer = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      res.status(400).json({ message: 'Invalid ID format' });
      return;
    }
    const doerData: Partial<Omit<DoerInterface, 'id'>> = req.body;
    const updatedDoer = await doerService.updateDoer(id, doerData);
    if (updatedDoer) {
      res.status(200).json(updatedDoer);
    } else {
      res.status(404).json({ message: 'Doer not found' });
    }
  } catch (error) {
    // Prisma specific error for record not found during update
    if ((error as any).code === 'P2025') {
        res.status(404).json({ message: 'Doer not found' });
    } else {
        res.status(500).json({ message: 'Error updating doer', error });
    }
  }
};

export const deleteDoer = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      res.status(400).json({ message: 'Invalid ID format' });
      return;
    }
    const deletedDoer = await doerService.deleteDoer(id);
    if (deletedDoer) {
      res.status(200).json({ message: 'Doer deleted successfully', doer: deletedDoer });
    } else {
      // This case might not be reached if Prisma throws P2025 first
      res.status(404).json({ message: 'Doer not found' });
    }
  } catch (error) {
     // Prisma specific error for record not found during delete
    if ((error as any).code === 'P2025') {
        res.status(404).json({ message: 'Doer not found' });
    } else {
        res.status(500).json({ message: 'Error deleting doer', error });
    }
  }
};
