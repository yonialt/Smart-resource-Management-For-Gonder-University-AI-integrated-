import prisma from "../prisma/client.js";

export const assignTask = async (req, res) => {
  const { requestId, technicianId } = req.body;

  const task = await prisma.maintenance.create({
    data: {
      requestId,
      technicianId,
      status: "ASSIGNED",
    },
  });

  res.json(task);
};

export const updateTaskStatus = async (req, res) => {
  const { status } = req.body;

  const updated = await prisma.maintenance.update({
    where: { id: req.params.id },
    data: { status },
  });

  res.json(updated);
};
