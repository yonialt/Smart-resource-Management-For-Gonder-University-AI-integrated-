import prisma from "../prisma/client.js";

export const createRequest = async (req, res) => {
  const { resourceId, justification } = req.body;

  const request = await prisma.request.create({
    data: {
      resourceId,
      justification,
      status: "PENDING",
      userId: req.user.id,
    },
  });

  res.json(request);
};

export const getRequests = async (req, res) => {
  const data = await prisma.request.findMany({
    include: { resource: true, user: true },
  });

  res.json(data);
};

export const updateRequestStatus = async (req, res) => {
  const { status } = req.body;

  const updated = await prisma.request.update({
    where: { id: req.params.id },
    data: { status },
  });

  res.json(updated);
};
