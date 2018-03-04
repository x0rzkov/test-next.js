import knex from 'knex';
import { return24Volume } from '../../services/influxdb/common/poloniex/client';

const {
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
} = process.env;

let instance: knex;
export function getKnexClient() {
  if (instance) {
    return instance;
  }

  instance = knex({
    client: 'pg',
    connection: {
      host: String(POSTGRES_HOST),
      user: String(POSTGRES_USER),
      port: Number(POSTGRES_PORT),
      password: String(POSTGRES_PASSWORD),
      database: String(POSTGRES_DB),
    },
  });

  return instance;
}
