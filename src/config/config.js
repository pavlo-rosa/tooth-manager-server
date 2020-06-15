const enviroments = {
    development: {
        username: "thmin",
        password: null,
        database: "teethdb",
        host: "127.0.0.1",
    },
    production: {
        username: "root",
        password: null,
        database: "database_production",
        host: "127.0.0.1",
    }
};

const env = process.env.NODE_ENV ||  'development';

module.exports = {
    dbName: process.env.POSTGRES_NAME || enviroments[env].database,
    dbUser: process.env.POSTGRES_USER || enviroments[env].username,
    dbPass: process.env.POSTGRES_PASS || enviroments[env].password,
    dbHost: process.env.POSTGRES_HOST || enviroments[env].host,
}
