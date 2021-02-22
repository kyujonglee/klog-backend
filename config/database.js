module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("HOST", "localhost"),
        port: env.int("PORT", 5432),
        database: env("NAME", "db_klog"),
        username: env("USERNAME", "kyujong"),
        password: env("PASSWORD", "toddlf20"),
      },
      options: {
        autoMigration: true,
      },
    },
  },
});
