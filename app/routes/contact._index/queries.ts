import { prisma } from '~/db/prisma';

export const createQuery = async (data: any) => {
   return await prisma.contactForm.create({
      data,
   });
};

export const getQueries = async () => {
   return await prisma.contactForm.findMany();
};

export const getQuery = async (id: number) => {
   return await prisma.contactForm.findUnique({
      where: {
         id,
      },
   });
};
