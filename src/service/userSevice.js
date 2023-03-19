import bcrypt from "bcrypt";
import mysql from "mysql2/promise";
import db from "../models/index";

const hashUserPassword = async (userPassword) => {
  const salt = await bcrypt.genSalt(10);
  let hashPassword = await bcrypt.hash(userPassword, salt);
  return hashPassword;
};

const createNewUser = async ({ email, password, username }) => {
  let hashPassword = await hashUserPassword(password);
  try {
    await db.User.create({
      username: username,
      password: password,
      email: email,
    });
  } catch (error) {
    console.log(error);
  }
};

const getListUsers = async () => {
  try {
    const users = await db.User.findAll(); // tra 1 object {} --  findAll() or find() => 1 array object [{}, ...]
    return users;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const deleteUser = async (id) => {
  try {
    await db.User.destroy({
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const getByUserId = async (id) => {
  try {
    const user = await db.User.findOne({ where: { id: id } }); // tra 1 object {} --  findAll() or find() => 1 array object [{}, ...]
    return user;
  } catch (error) {
    console.log(error);
  }
};

const postUpdateUser = async (user) => {
  const result = await db.User.update(
    {
      email: user.email,
      username: user.username,
    },
    { where: { id: user.id } }
  );
};

// servie liên quan đến logic database

export { createNewUser, getListUsers, deleteUser, getByUserId, postUpdateUser };
