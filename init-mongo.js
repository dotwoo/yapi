db.createUser({ user: 'root', pwd: '123456', roles: [{ role: "root", db: "admin" }] });

db.auth("root", "123456");

db.createUser({
    user: 'yapi',
    pwd: 'yapi123456',
    roles: [
        { role: "dbAdmin", db: "yapi" },
        { role: "readWrite", db: "yapi" }
    ]
});