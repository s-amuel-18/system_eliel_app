/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from "@ioc:Adonis/Core/Route";

Route.get("/", "AuthController.index");
Route.get("/login", "AuthController.index").as("auth.index");
Route.post("/login", "AuthController.login").as("auth.login");

Route.get("/dashboard", "DashboardController.index").as("survey.create");
Route.post("/dashboard/survey", "DashboardController.survey").as("survey.post");

Route.get("/necesidades/", "NeedsController.index").as("need.index");
Route.get("/necesidades/crear", "NeedsController.create").as("need.create");
Route.post("/necesidades/crear", "NeedsController.store").as("need.store");
Route.post("/necesidades/:id/delete", "NeedsController.destroy").as(
  "need.destroy",
);
// Route.get("/", async ({ view }) => {
//   return view.render("welcome");
// });
