import express from 'express';
import * as userDao from '../daos/sql-user.dao';
import { authMiddleware } from '../middleware/auth.middleware';

// the user router represents a subset of the application
// for all enpoints starting with /users
export const usersRouter = express.Router();

/**
 * /users
 * find all users
 */
usersRouter.get('', [
    authMiddleware(2),
    async (req, res) => {
        const users = await userDao.findAll();
        res.json(users);
    }]);

/**
 * /users/:id
 * find user by user id
 */
usersRouter.get('/:id',
    async (req, res) => {
        if (req.session.user) {
            if (+req.params.id === 0) {
                const user = await userDao.findById(req.session.user.userId);
                    res.json(user);
            } else {
                if (req.session.user.role.roleId === 1) {
                    const user = await userDao.findById(+req.params.id);
                    res.json(user);
                } else if (req.session.user.role.roleId === 2) {
                    const user = await userDao.findById(+req.params.id);
                    res.json(user);
                } else {
                    if (req.session.user.userId && req.session.user.userId === +req.params.id) {
                        const user = await userDao.findById(+req.params.id);
                        res.json(user);
                    } else {
                        // 403 means forbidden which means we know who they are
                        res.status(403);
                        res.send('Permission Denied');
                    }
                }
            }
        } else {
            // 401 is Unauthorized which really means Unauthenticated
            res.sendStatus(401);
        }
    });


/**
 * /users
 * partially update user resource
 */
usersRouter.patch('', async (req, res) => {
    if (req.session.user && req.session.user.role.roleId) {
        if (req.session.user.role.roleId === 1) {
            const updatedUser = await userDao.update(req.body);
            const user = await userDao.findById(updatedUser);
            res.json(user);
        } else {
            if (req.session.user.userId) {
                if (req.session.user.userId === +req.body.userId) {
                    const updatedUser = await userDao.update(req.body);
                    const user = await userDao.findById(updatedUser);
                    res.json(user);
                } else {
                    res.status(403);
                    res.send('Permission Denied');
                }
            } else {
                res.status(403);
                res.send('Permission Denied');
            }
        }
    } else {
        res.sendStatus(401);
    }
});

usersRouter.patch('/myself', async (req, res) => {
    if (req.session.user && req.session.user.role.roleId) {
        if (req.session.user.userId) {
            req.body.userId = +req.session.user.userId;
            console.log(req.body);
            const updatedUser = await userDao.updateMyself(req.body);
            const user = await userDao.findById(updatedUser);
            res.json(user);
        } else {
            res.status(403);
            res.send('Permission Denied');
        }
    } else {
        res.sendStatus(401);
    }
});
