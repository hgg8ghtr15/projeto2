import { DataSource } from "typeorm";

const dataSource: DataSource = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "adminlocal",
  password: "J6t2hybt26@",
  database: "clientes",
};

export default dataSource;

import { ConnectionOptions } from "typeorm";

// const dataSource: ConnectionOptions = {
//   type: "mysql",
//   host: "localhost",
//   port: 3306,
//   username: "seu_usuario",
//   password: "sua_senha",
//   database: "nome_do_banco_de_dados",
//   entities: ["src/entities/**/*.ts"],
//   migrations: ["src/migrations/**/*.ts"],
//   cli: {
//     migrationsDir: "src/migrations"
//   }
// };

// export default dataSource;