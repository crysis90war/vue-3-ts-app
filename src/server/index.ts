import express, { type Request, type Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import jsonwebtoken from "jsonwebtoken";
import type { NewUser, User } from "@/models/users";
import { bmw320, mini, bmw525, mercedes } from "../models/cars";
import { today, thisWeek, thisMonth, type Post } from "../models/posts";

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());

const SECRET = "my-secret";
const COOKIE = "vuejs-jwt";

const allPosts = [today, thisWeek, thisMonth];
const allUsers: User[] = [];

app.get("/cars", (req, res) => {
  res.json([bmw320, bmw525, mini, mercedes]);
});

app.get("/posts", (req, res) => {
  res.json(allPosts);
});

app.post<{}, {}, Post>("/posts", (req, res) => {
  const post = { ...req.body, id: (Math.random() * 100000).toFixed() };
  allPosts.push(post);
  res.json(post);
});

app.put<{}, {}, Post>("/posts", (req, res) => {
  const index = allPosts.findIndex((x) => x.id === req.body.id);
  if (index === -1) {
    throw Error(`Post with id ${req.body.id} was not found.`);
  }

  const existingPost = allPosts[index];
  allPosts[index] = { ...existingPost, ...req.body };
  res.json(allPosts[index]);
});

app.get("/current-user", (req, res) => {
  try {
    const token = req.cookies[COOKIE];
    const result = jsonwebtoken.verify(token, SECRET) as { id: string };
    console.log(result);
    res.json({ id: result.id });
  } catch (error) {
    res.status(404).end();
  }
});

app.post("/logout", (req, res) => {
  res.cookie(COOKIE, "", { httpOnly: true });
  res.status(200).end();
});

app.post<{}, {}, NewUser>("/login", (req, res) => {
  const targetUser = allUsers.find((x) => x.username === req.body.username);
  if (!targetUser || targetUser.password !== req.body.password) {
    res.status(401).end();
  } else {
    authenticate(targetUser.id, req, res);
    res.status(200).end();
  }
  // allUsers.push(user);
  // authenticate(user.id, req, res);
  // const { password, ...rest } = user;
  // res.json(rest);
});

app.post<{}, {}, NewUser>("/users", (req, res) => {
  const user: User = { ...req.body, id: (Math.random() * 100000).toFixed() };
  allUsers.push(user);
  authenticate(user.id, req, res);
  const { password, ...rest } = user;
  res.json(rest);
});

app.listen(8000, () => {
  console.log("Listening on port 8000");
});

function authenticate(id: string, req: Request, res: Response) {
  // token (sing)
  const token = jsonwebtoken.sign({ id }, SECRET, {
    issuer: "vuejs-course",
    expiresIn: "30 days",
  });
  // set a cookie
  res.cookie(COOKIE, token, { httpOnly: true });
}
