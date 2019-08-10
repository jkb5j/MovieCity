import { connectionPool } from '../util/connection.util';
import { PoolClient } from 'pg';
import { convertSqlUser } from '../util/user.converter';
import Users from '../models/user.reimb';

export async function findAll() {
    console.log('finding users');
    let client: PoolClient;
    try {
        client = await connectionPool.connect();
        const queryString = `
        SELECT * FROM users
        INNER JOIN position USING (positionid)`;
        const result = await client.query(queryString);
        return result.rows.map(convertSqlUser);
    } catch (err) {
        console.log(err);
    } finally {
        client && client.release();
    }
    console.log('found the users');
    return undefined;
}

export async function findById(id: number) {
    console.log('finding user by id: ' + id);
    let client: PoolClient;
    try {
        client = await connectionPool.connect(); // basically .then is everything after this
        const result = await client.query(`
        SELECT * FROM users
        INNER JOIN position p USING (positionid)
        WHERE userid = $1`, [id]);
        const sqlUser = result.rows[0];
        return sqlUser && convertSqlUser(sqlUser);
    } catch (err) {
        console.log(err);
    } finally {
        client && client.release();
    }
    return undefined;
}


export async function findByFirstName(firstName: string) {
    console.log('finding users by first name');
    let client: PoolClient;
    try {
        client = await connectionPool.connect(); // basically .then is everything after this
        const result = await client.query('SELECT * FROM app_user WHERE first_name = $1', [firstName]);
        return result.rows.map(convertSqlUser);
    } catch (err) {
        console.log(err);
    } finally {
        client && client.release();
    }
    return undefined;
}

export async function findByUsernameAndPassword(username: string, password: string) {
    let client: PoolClient;
    try {
        client = await connectionPool.connect();

        const queryString = `
            SELECT * FROM users
            JOIN position
            USING (positionid)
            WHERE username = $1 AND pass = $2
        `;
        const result = await client.query(queryString, [username, password]);
        const sqlUser = result.rows[0];
        return sqlUser && convertSqlUser(sqlUser);
    } catch (err) {
        console.log(err);
    } finally {
        client && client.release();
    }
    return undefined;
}

export async function update(user: Users) {
    const oldUser = await findById(user.userId);
    if (!oldUser) {
        return undefined;
    }
    user = {
        ...oldUser,
        ...user
    };
    console.log(user);
    let client: PoolClient;
    try {
        client = await connectionPool.connect(); // basically .then is everything after this
        const queryString = `
            UPDATE users SET username = $1, pass = $2, firstname = $3, lastname = $4, email = $5, positionid = $6
            WHERE userid = $7
            RETURNING userid
        `;
        const params = [user.username, user.pass, user.firstName, user.lastName, user.email, user.role, user.userId];
        const result = await client.query(queryString, params);
        return result.rows[0].userid;
    } catch (err) {
        console.log(err);
    } finally {
        client && client.release();
    }
    console.log('found all');
    return undefined;
}

export async function updateMyself(user: Partial<Users>) {
    const oldUser = await findById(user.userId);
    if (!oldUser) {
        return undefined;
    }
    user = {
        ...oldUser,
        ...user
    };
    console.log(user);
    let client: PoolClient;
    try {
        client = await connectionPool.connect(); // basically .then is everything after this
        const queryString = `
            UPDATE users SET username = $1, pass = $2, firstname = $3, lastname = $4, email = $5, positionid = $6
            WHERE userid = $7
            RETURNING userid
        `;
        const params = [user.username, user.pass, user.firstName, user.lastName, user.email, user.role.roleId, user.userId];
        const result = await client.query(queryString, params);
        return result.rows[0].userid;
    } catch (err) {
        console.log(err);
    } finally {
        client && client.release();
    }
    console.log('found all');
    return undefined;
}
