import { prisma } from '~/db/prisma';

export async function getFormSubmissions() {
   return prisma.contactForm.findMany();
}

export async function getFormSubmission(id: number) {
   return prisma.contactForm.findUnique({
      where: {
         id,
      },
   });
}

export async function deleteFormSubmission(id: number) {
   return prisma.contactForm.delete({
      where: {
         id,
      },
   });
}

export async function updateFormSubmission(id: number, data: any) {
   return prisma.contactForm.update({
      where: {
         id,
      },
      data,
   });
}
