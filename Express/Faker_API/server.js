const { faker } = require("@faker-js/faker")
const express = require("express");
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const createUser = () => {
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  }
}
    
const createCompany = () => {
  return {
    name: faker.company.name(),
    image: faker.image.business()
  }
}

const newFakeUser = createUser();
const newFakeCompany = createCompany();


app.get("/api/users/new", (req, res) => {
  console.log(req.body);
  res.json(newFakeUser);
});

app.get("/api/companies/new", (req, res) => {
  res.json(newFakeCompany);
});

app.get("/api/user/company", (req, res) => {
  res.json({
    user: newFakeUser,
    company: newFakeCompany
  });
});




app.listen( port, () => console.log(`Listening on port: ${port}`) );