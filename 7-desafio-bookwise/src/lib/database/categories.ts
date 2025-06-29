import { prisma } from '@/lib/prisma'

export async function getCategoriesFromDatabase() {
  return prisma.category.findMany({
    orderBy: {
      name: 'asc',
    },
  })
}
