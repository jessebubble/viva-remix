import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

process.on('beforeExit', () => {
   prisma.$disconnect();
});
