module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "localhost"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "db_klog"),
        username: env("DATABASE_USERNAME", "kyujong"),
        password: env("DATABASE_PASSWORD", "toddlf20"),
      },
      options: {
        autoMigration: true,
      },
    },
  },
});
