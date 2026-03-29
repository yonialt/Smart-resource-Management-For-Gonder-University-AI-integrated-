// controller/UserController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');
const { error } = require('effect/Brand');
const jwt = require('jsonwebtoken');
const generateToken = (user) =>
  jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '30d' });


// ---------------- GET ALL USERS ----------------
exports.getAllUser = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json({ success: true, data: users });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// ---------------- GET USER BY ID ----------------
exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: { id },
    });
    if (!user)
      return res.status(404).json({ success: false, message: "User not found" });
    res.status(200).json({ success: true, data: user });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// ---------------- CREATE (REGISTER) USER ----------------
exports.registerUser = async (req, res) => {
  try {
    const { name, password, role, email } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { name, password: hashedPassword, role, email },
    });
    res.status(201).json({ success: true, data: user });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// ---------------- LOGIN USER ----------------
exports.loginUser = async (req, res) => {
  try {
    const { name, password } = req.body;
    const user = await prisma.user.findFirst({
      where: { name, password },
    });
    if (!user)
      return res.status(401).json({ success: false, message: "Invalid credentials" });
     const match = await bcrypt.compare(password, user.password); // compare password
  if (!match) return res.status(400).json({ success: false, message:error}) 
    const token = generateToken(user);  
    res.status(200).json({ success: true, data: user });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// ---------------- UPDATE USER ----------------
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedUser = await prisma.user.update({
      where: { id },
      data,
    });
    res.status(200).json({ success: true, data: updatedUser });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// ---------------- DELETE USER ----------------
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.user.delete({ where: { id } });
    res.status(200).json({ success: true, message: "User deleted" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};