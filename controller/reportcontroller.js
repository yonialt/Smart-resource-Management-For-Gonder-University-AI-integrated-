import prisma from "../prisma/client.js";

export const getDashboard = async (req, res) => {
  const totalResources = await prisma.resource.count();
  const totalRequests = await prisma.request.count();
  const pendingRequests = await prisma.request.count({
    where: { status: "PENDING" },
  });

  res.json({
    totalResources,
    totalRequests,
    pendingRequests,
  });
};
