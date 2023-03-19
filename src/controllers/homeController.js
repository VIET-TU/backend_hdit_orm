import {
  createNewUser,
  deleteUser,
  getListUsers,
  getByUserId,
} from "../service/userSevice";

const homeController = {
  handleUserPage: async (req, res) => {
    const userList = await getListUsers();
    await deleteUser(3);
    return res.render("home.ejs", { userList });
  },
  handleCreateNewUser: async (req, res) => {
    const newUser = await createNewUser(req.body);
    return res.redirect("/");
  },
  handleDeleteUser: async (req, res) => {
    const id = req.params.id;
    await deleteUser(id);
    return res.redirect("/");
  },
  handleUpdateUser: async (req, res) => {
    const id = req.params.id;
    let user = await getByUserId(id);
    return res.render("update.ejs");
  },
};

export default homeController;
