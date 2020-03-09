/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

const cookieSession = require("cookie-session");
const bcrypt = require("bcrypt");

const chooseCategories = require("../apiroutes.js");

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  // return router;

  // router.post('/user', (req, res) => {
  //   if (req.session.id !== undefined && req.session.id !== null) {

  //       .select('items.id', 'items.user_id', 'items.category', 'items.content', 'items.status', 'users.email')
  //       .from('items')
  //       .innerJoin('users', 'items.user_id', 'users.id')
  //       .where('user_id', req.session.id)
  //       .then(results => {
  //         res.json(results);
  // });
};
