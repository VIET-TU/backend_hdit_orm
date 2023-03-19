import bcrypt from "bcrypt";
import mysql from "mysql2/promise";

const hashUserPassword = async (userPassword) => {
  const salt = await bcrypt.genSalt(10);
  let hashPassword = await bcrypt.hash(userPassword, salt);
  return hashPassword;
};

const createNewUser = async ({ email, password, username }) => {
  let hashPassword = await hashUserPassword(password);
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      database: "test",
    });
    const [rows, fields] = await connection.execute(
      "insert into user(email, password, username) values (?, ?, ?)",
      [email, hashPassword, username]
    );
    return rows;
  } catch (error) {
    console.log(error);
  }
};

const getListUsers = async () => {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      database: "test",
    });
    const [user] = await connection.execute("SELECT * FROM user");
    return user;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const deleteUser = async (id) => {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      database: "test",
    });
    await connection.execute("delete from user where id = ? ", [id]);
  } catch (error) {
    console.log(error);
  }
};

const getByUserId = async (id) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "test",
  });
  try {
    let [results] = await connection.execute(
      "select * from user where id = ?",
      [id]
    );
    return results;
  } catch (error) {
    console.log(error);
  }
};

// servie liên quan đến logic database

export { createNewUser, getListUsers, deleteUser, getByUserId };
