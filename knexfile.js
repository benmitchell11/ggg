const path = require('path')

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    seeds: {
      directory: './server/db/seeds'
    },
    migrations: {
      directory: './server/db/migrations'
    },
    connection: {
      filename: path.join(__dirname, 'dev.sqlite3')
    }
  },

  test: {
    
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: ':memory:'
    },
    seeds: {
      directory: path.join(__dirname, 'seeds')
    },
    migrations: {
      directory: path.join(__dirname, 'migrations')
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

}