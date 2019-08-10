import { PoolClient } from 'pg';
import { connectionPool } from '../util/connection.util';
import { reimbConverter } from '../util/reimb.converter';
import Reimbursement from '../models/reimbursement';
import { statusConverter } from '../util/status.converter';


export async function findAllReimbs() {
    let client: PoolClient;
    try {
        client = await connectionPool.connect(); // basically .then is everything after this
        const queryString = `
        SELECT * FROM reimbursement a
        LEFT JOIN resolverview r
        ON (a.resolver = r.ruserid)
        LEFT JOIN authorview b
        ON (a.userid = b.auserid)
        LEFT JOIN reimbursementstatus
        USING (reimbstatusid)
        LEFT JOIN reimbursementtype
        USING (reimbtypeid)
        ORDER BY datesubmitted;`;
        console.log('query set');
        const result = await client.query(queryString);
        // convert result from sql object to js object
        console.log('went to the converter');
        return result.rows.map(reimbConverter);
    } catch (err) {
        console.log(err);
    } finally {
        client && client.release();
    }
    console.log('found all');
    return undefined;
}

export async function findByStatusId(gameId: number) {
    let client: PoolClient;
    try {
        client = await connectionPool.connect(); // basically .then is everything after this
        const queryString = `
        SELECT * FROM reimbursement a
        LEFT JOIN resolverview r
        ON (a.resolver = r.ruserid)
        LEFT JOIN authorview b
        ON (a.userid = b.auserid)
        LEFT JOIN reimbursementstatus
        USING (reimbstatusid)
        LEFT JOIN reimbursementtype
        USING (reimbtypeid)
        WHERE reimbstatusid = $1
        ORDER BY datesubmitted;`;
        const result = await client.query(queryString, [gameId]);
        // convert result from sql object to js object
        return result.rows.map(reimbConverter);
    } catch (err) {
        console.log(err);
    } finally {
        client && client.release();
    }
    console.log('found all');
    return undefined;
}

export async function findByAuthorId(gameId: number) {
    let client: PoolClient;
    try {
        client = await connectionPool.connect(); // basically .then is everything after this
        const queryString = `
        SELECT * FROM reimbursement a
        LEFT JOIN resolverview r
        ON (a.resolver = r.ruserid)
        LEFT JOIN authorview b
        ON (a.userid = b.auserid)
        LEFT JOIN reimbursementstatus
        USING (reimbstatusid)
        LEFT JOIN reimbursementtype
        USING (reimbtypeid)
        WHERE auserid = $1
        ORDER BY datesubmitted;`;
        const result = await client.query(queryString, [gameId]);
        // convert result from sql object to js object
        return result.rows.map(reimbConverter);
    } catch (err) {
        console.log(err);
    } finally {
        client && client.release();
    }
    console.log('found all');
    return undefined;
}

export async function findByReimbId(gameId: number) {
    let client: PoolClient;
    try {
        client = await connectionPool.connect(); // basically .then is everything after this
        const queryString = `
        SELECT * FROM reimbursement a
        LEFT JOIN resolverview r
        ON (a.resolver = r.ruserid)
        LEFT JOIN authorview b
        ON (a.userid = b.auserid)
        LEFT JOIN reimbursementstatus
        USING (reimbstatusid)
        LEFT JOIN reimbursementtype
        USING (reimbtypeid)
        WHERE reimbursementid = $1
        ORDER BY datesubmitted;`;
        const result = await client.query(queryString, [gameId]);
        // convert result from sql object to js object
        return result.rows.map(reimbConverter);
    } catch (err) {
        console.log(err);
    } finally {
        client && client.release();
    }
    console.log('found all');
    return undefined;
}

export async function update(card: Reimbursement) {
    console.log(card.reimbursementid);
    const oldReimb = await findByReimbId(card.reimbursementid);
    if (!oldReimb) {
        return undefined;
    }
    card = {
        ...oldReimb,
        ...card
    };
    let client: PoolClient;
    try {
        client = await connectionPool.connect();
        const queryString = `
            UPDATE reimbursement SET userid = $1, amount = $2,
            datesubmitted = $3, dateresolved = $4, resolver = $5,
            reimbstatusid = $6, reimbtypeid = $7
            WHERE reimbursementid = $8
            RETURNING reimbursementid;
        `;
        const params = [card.author, card.amount, card.dateSubmitted, card.dateResolved, card.resolver,
        card.status, card.type, card.reimbursementid];
        const result = await client.query(queryString, params);
        return result.rows[0].reimbursementid;
    } catch (err) {
        console.log(err);
    } finally {
        client && client.release();
    }
    return undefined;
}

export async function updatePartialReimb(card: Partial<Reimbursement>) {
    const oldReimb = await findByReimbId(card.reimbursementid);
    if (!oldReimb) {
        return undefined;
    }
    card = {
        ...oldReimb,
        ...card
    };
    let client: PoolClient;
    const d = new Date().toLocaleDateString();
    try {
        client = await connectionPool.connect();
        const queryString = `
            UPDATE reimbursement SET dateresolved = $1, resolver = $2,
            reimbstatusid = $3
            WHERE reimbursementid = $4
            RETURNING reimbursementid;
        `;
        const params = [d, card.resolver,
        card.status, card.reimbursementid];
        const result = await client.query(queryString, params);
        return result.rows[0].reimbursementid;
    } catch (err) {
        console.log(err);
    } finally {
        client && client.release();
    }
    return undefined;
}

export async function save(card: Partial<Reimbursement>) {
    let client: PoolClient;
    console.log('connected to the save function');
    const d = new Date().toLocaleDateString();
    try {
        client = await connectionPool.connect(); // basically .then is everything after this

        const queryString = `
        INSERT INTO reimbursement (userid, amount,
            datesubmitted, reimbstatusid, reimbtypeid)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING reimbursementid;
        `;
        const params = [card.author, card.amount, d, 1, card.type];
        const result = await client.query(queryString, params);
        return result.rows[0].reimbursementid;

    } catch (err) {
        console.log(err);
    } finally {
        client && client.release();
    }
    return undefined;
}

export async function findAllStatuses() {
    let client: PoolClient;
    try {
        client = await connectionPool.connect(); // basically .then is everything after this
        const queryString = `
        SELECT * FROM reimbursementstatus
        ORDER BY reimbstatusid`;
        const result = await client.query(queryString);
        return result.rows.map(statusConverter);
    } catch (err) {
        console.log(err);
    } finally {
        client && client.release();
    }
    return undefined;
}