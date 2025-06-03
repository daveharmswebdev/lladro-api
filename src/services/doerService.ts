import { PrismaClient, Doer, Todo } from '@prisma/client';
import { Doer as DoerInterface } from '../models/doer.model';

const prisma = new PrismaClient();

export const getAllDoers = async (): Promise<(DoerInterface & { todoCount: number })[]> => {
  const doers = await prisma.doer.findMany({
    include: {
      _count: {
        select: { todos: true },
      },
    },
  });
  return doers.map(doer => {
    const { _count, ...rest } = doer;
    return {
      ...rest,
      todoCount: _count.todos,
    };
  });
};

export const getDoerById = async (id: number): Promise<(DoerInterface & { todoCount: number }) | null> => {
  const doer = await prisma.doer.findUnique({
    where: { id },
    include: {
      _count: {
        select: { todos: true },
      },
    },
  });
  if (doer) {
    const { _count, ...rest } = doer;
    return {
      ...rest,
      todoCount: _count.todos,
    };
  }
  return null;
};

export const getDoerAndAllTodos = async (id: number): Promise<(DoerInterface & { todos: Todo[] }) | null> => {
  return prisma.doer.findUnique({
    where: { id },
    include: {
      todos: true,
    },
  });
};

export const createDoer = async (data: Omit<DoerInterface, 'id'>): Promise<DoerInterface> => {
  return prisma.doer.create({
    data,
  });
};

export const updateDoer = async (id: number, data: Partial<Omit<DoerInterface, 'id'>>): Promise<DoerInterface | null> => {
  return prisma.doer.update({
    where: { id },
    data,
  });
};

export const deleteDoer = async (id: number): Promise<DoerInterface | null> => {
  // First, delete associated todos or handle them as per business logic (e.g., set doerId to null)
  // For simplicity, we'll delete them here. This might cascade if set up in Prisma schema.
  // If not, manual deletion or unlinking is needed.
  // Assuming cascade delete is set up or todos should be disassociated/deleted.
  // If todos need to be disassociated:
  // await prisma.todo.updateMany({ where: { doerId: id }, data: { doerId: null } });
  // If todos need to be deleted (Prisma doesn't automatically cascade delete records referenced by a foreign key unless explicitly configured in the database schema or handled here):
  await prisma.todo.deleteMany({
    where: { doerId: id },
  });

  return prisma.doer.delete({
    where: { id },
  });
};
