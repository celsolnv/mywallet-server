// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require('dotenv')

dotenv.config({})
let initialDir
let extensionFile

if (process.env.NODE_ENV === 'development') {
  initialDir = 'src'
  extensionFile = 'ts'
} else {
  initialDir = 'dist'
  extensionFile = 'js'
}
module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [`${initialDir}/entities/*.${extensionFile}`],
  migrations: [`${initialDir}/database/migrations/*.${extensionFile}`],
  cli: {
    migrationsDir: 'src/database/migrations',
    entitiesDir: 'dist/entities/*.js',
  },
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
}