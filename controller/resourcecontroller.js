import prisma from "../prisma/client.js";

export const createResource = async (req, res) => {
  const resource = await prisma.resource.create({
    data: req.body,
  });

  res.json(resource);
};

export const getResources = async (req, res) => {
  const data = await prisma.resource.findMany();
  res.json(data);
};

export const updateResource = async (req, res) => {
  const updated = await prisma.resource.update({
    where: { id: req.params.id },
    data: req.body,
  });

  res.json(updated);
};

export const deleteResource = async (req, res) => {
  await prisma.resource.delete({
    where: { id: req.params.id },
  });

  res.json({ msg: "Deleted" });
};
