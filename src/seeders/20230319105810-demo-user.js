"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     
    */
    await queryInterface.bulkInsert(
      "User",
      [
        {
          email: "John Doe1",
          password: "fs",
          username: "fake1",
        },
        {
          email: "John Doe2",
          password: "fs",
          username: "fake2",
        },
        {
          email: "John Doe3",
          password: "fs",
          username: "fake3",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
