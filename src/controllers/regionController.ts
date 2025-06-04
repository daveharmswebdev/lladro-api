import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { Region } from '../models/region.model';

const prisma = new PrismaClient();

export const createRegion = async (req: Request, res: Response) => {
  try {
    const regionData: Region = req.body;
    const newRegion = await prisma.region.create({
      data: regionData,
    });
    res.status(201).json(newRegion);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};

export const getRegions = async (req: Request, res: Response) => {
  try {
    const regions = await prisma.region.findMany();
    res.status(200).json(regions);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};

export const getRegionById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const region = await prisma.region.findUnique({
      where: { id: parseInt(id, 10) },
    });
    if (region) {
      res.status(200).json(region);
    } else {
      res.status(404).json({ message: 'Region not found' });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};

export const updateRegion = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const regionData: Region = req.body;
    const updatedRegion = await prisma.region.update({
      where: { id: parseInt(id, 10) },
      data: regionData,
    });
    res.status(200).json(updatedRegion);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};

export const deleteRegion = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.region.delete({
      where: { id: parseInt(id, 10) },
    });
    res.status(204).send();
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};

export const getRegionsWithDoers = async (req: Request, res: Response) => {
  try {
    const regions = await prisma.region.findMany({
      include: {
        _count: {
          select: { doers: true },
        },
      },
    });
    const regionsWithDoerCount = regions.map((region) => {
      const { _count, ...regionData } = region;
      return {
        ...regionData,
        doerCount: _count?.doers || 0,
      };
    });
    res.status(200).json(regionsWithDoerCount);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};
