import express from 'express';
import * as reimbDao from '../daos/sql-reimb.dao';
import { authMiddleware } from '../middleware/auth.middleware';

export const reimbRouter = express.Router();

/**
 * /reimb
 * Getting all reimbursements
 */
reimbRouter.get('', [
    authMiddleware(2),
    async (req, res) => {
    const reimbs = await reimbDao.findAllReimbs();
    res.json(reimbs);
}]);

reimbRouter.get('/status', async (req, res) => {
    const stati = await reimbDao.findAllStatuses();
    res.json(stati);
});

/**
 * /reimb/reimb/:ID
 * Getting reimbursements from status id
 */
reimbRouter.get('/reimb/:statusId', [
    authMiddleware(2),
    async (req, res) => {
    const statusId = +req.params.statusId;
    const reimbs = await reimbDao.findByStatusId(statusId);
    res.json(reimbs);
}]);
/**
 * /reimb/reimb/author/:ID
 * getting reimbursements from author id
 */
reimbRouter.get('/reimb/author/:reimbId', async (req, res) => {
    if (req.session.user) {
        if (+req.params.reimbId === 0) {
                const reimbId = req.session.user.userId;
                const reimbs = await reimbDao.findByAuthorId(reimbId);
                res.json(reimbs);
        } else {
            if (req.session.user.role.roleId) {
                if (req.session.user.role.roleId === 1) {
                    const reimbId = +req.params.reimbId;
                    const reimbs = await reimbDao.findByAuthorId(reimbId);
                    res.json(reimbs);
                } else if (req.session.user.role.roleId === 2) {
                    const reimbId = +req.params.reimbId;
                    const reimbs = await reimbDao.findByAuthorId(reimbId);
                    res.json(reimbs);
                } else {
                    if (req.session.user.userId === +req.params.reimbId) {
                        const reimbId = +req.params.reimbId;
                        const reimbs = await reimbDao.findByAuthorId(reimbId);
                        res.json(reimbs);
                    } else {
                        // 403 means forbidden which means we know who they are
                        res.status(403);
                        res.send('Permission Denied');
                    }
                }
            } else {
                // 401 is Unauthorized which really means Unauthenticated
                res.sendStatus(401);
            }
        }
    } else {
        res.sendStatus(401);
    }
});

/**
 * /reimb
 * adding a reimbursement to the table
 */
reimbRouter.post('', async (req, res) => {
    req.body.author = req.session.user.userId;
    const card = req.body;
    if (!card) {
        res.sendStatus(400);
    } else {
        const id = await reimbDao.save(card);
        if (!id) {
            res.sendStatus(400);
        } else {
            card.id = id;
            res.status(201); // created status code
            const reimbs = await reimbDao.findByReimbId(card.id);
            res.json(reimbs);
        }
    }
});

/**
 * /reimb
 * old reimbursement patch
 */
reimbRouter.patch('', [
    authMiddleware(2),
    async (req, res) => {
    const card = req.body;
    if (!card) {
        res.sendStatus(400);
    } else {
        console.log('sending to update');
        const id = await reimbDao.update(card);
        if (!id) {
            res.sendStatus(400);
        } else {
            card.id = id;
            res.status(201);
            const reimbs = await reimbDao.findByReimbId(card.id);
            res.json(reimbs);
        }
    }
}]);

/**
 * partial reimbursement patch
 */
reimbRouter.patch('/partial', [
    authMiddleware(2),
    async (req, res) => {
        req.body.resolver = req.session.user.userId;
    const card = req.body;
    if (!card) {
        res.sendStatus(400);
    } else {
        console.log('sending to update');
        const id = await reimbDao.updatePartialReimb(card);
        if (!id) {
            res.sendStatus(400);
        } else {
            card.id = id;
            res.status(201);
            const reimbs = await reimbDao.findByReimbId(card.id);
            res.json(reimbs);
        }
    }
}]);
