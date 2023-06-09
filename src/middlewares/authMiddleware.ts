import { Request, Response } from "express";

function isLogin(req:Request, res: Response, next) {
    const accessToken = req.headers['authorization'];
  if (req.session.user) {
    next();
  } else {
    res.redirect('/login');
  }
}