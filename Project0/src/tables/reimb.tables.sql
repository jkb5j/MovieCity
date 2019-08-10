CREATE TABLE position (
    positionid SERIAL PRIMARY KEY,
    positionname TEXT NOT NULL UNIQUE
);

CREATE TABLE users (
   userid SERIAL PRIMARY KEY,
   username TEXT NOT NULL UNIQUE,
   pass TEXT NOT NULL,
   firstname TEXT NOT NULL,
   lastname TEXT NOT NULL,
   email TEXT NOT NULL,
   positionid INTEGER REFERENCES position(positionid)
);

CREATE TABLE reimbursementstatus (
    reimbstatusid SERIAL PRIMARY KEY,
    reimbstatus TEXT NOT NULL UNIQUE
);

CREATE TABLE reimbursementtype (
    reimbtypeid SERIAL PRIMARY KEY,
    reimbtype TEXT NOT NULL UNIQUE
);

CREATE TABLE reimbursement (
    reimbursementid SERIAL PRIMARY KEY,
    userid INTEGER REFERENCES users(userid),
    amount NUMERIC (8,2),
    datesubmitted TEXT,
    dateresolved TEXT,
    resolver INTEGER REFERENCES users(userid),
    reimbstatusid INTEGER REFERENCES reimbursementstatus(reimbstatusid),
    reimbtypeid INTEGER REFERENCES reimbursementtype(reimbtypeid)
);