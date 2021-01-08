const express = require("express");
const Router = require("express").Router;
const knex = require("./database/connection");
const path = require("path");

const app = express();
app.use(express.json());

const test = async () => {
  /* await knex("question").insert([
    {
      question: "A good question 1",
      form_id: "1",
    },
    {
      question: "A good question 2",
      form_id: "1",
    },
    {
      question: "A good question 3",
      form_id: "1",
    },
  ]); */
};

test();

const routes = Router();

routes.post("/forms/create", async (req, res) => {
  const { user, form_target, awnsers, lat, long } = req.body;

  if (user && form_target && awnsers && lat && long) {
    await knex.transaction(async t => {
      // seleciona o id das questoes desse formulario
      const questions = await knex("question")
        .transacting(t)
        .select("id")
        .where("form_id", form_target);

      // salva a resposta
      await knex("awnser")
        .transacting(t)
        .insert({
          user: user,
          form_id: form_target,
          lat: lat,
          long: long,
        })
        .then(async id => {
          // salva o texto das respostas relacionado
          questions.forEach(async (question, index) => {
            await knex("awnsers").transacting(t).insert({
              awnser_text: awnsers[index],
              awnser_id: id,
              question_id: question.id,
            });
          });
        });
    });
  }
  res.status(200).send("test");
});

app.use(routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server on in: http://localhost:" + port);
});
