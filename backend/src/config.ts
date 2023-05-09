import dotenv from 'dotenv';
import bunyan from 'bunyan';
dotenv.config({});

class Config {
  public DATABASE_URL: string | undefined;
  public JWT_TOKEN: string | undefined;
  public NODE_ENV: string | undefined;
  public SECRET_KEY: string | undefined;
  public SECRET_KEY2: string | undefined;
  public CLIENT_URL: string | undefined;
  public PORT: string | undefined;
  public REDIS_HOST: string | undefined;

  constructor() {
    this.DATABASE_URL = process.env.DATABASE_URL;
    this.JWT_TOKEN = process.env.JWT_TOKEN;
    this.NODE_ENV = process.env.NODE_ENV;
    this.SECRET_KEY = process.env.SECRET_KEY;
    this.SECRET_KEY2 = process.env.SECRET_KEY2;
    this.CLIENT_URL = process.env.CLIENT_URL;
    this.PORT = process.env.PORT;
    this.REDIS_HOST = process.env.REDIS_HOST;
  }

  public createLogger(name: string): bunyan {
    return bunyan.createLogger({
      name,
      level: 'debug'
      // streams: [
      //   {
      //     level: 'info',
      //     stream: process.stdout,
      //   },
      //   {
      //     level: 'error',
      //     path: './logs/error.log',
      //   },
      // ],
    });
  }

  public validateConfig(): void {
    for (const [key, value] of Object.entries(this)) {
      if (!value) {
        throw new Error(`Missing environment variable: ${key}`);
      }
    }
  }
}

export const config: Config = new Config();
