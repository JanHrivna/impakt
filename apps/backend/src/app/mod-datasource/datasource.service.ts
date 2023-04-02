import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";
import { Analyzy } from "./entities/analyzy.entity";
import { AppUsers } from "./entities/app-user.entity";
import { MistoUlozeni } from "./entities/misto-ulozeni";
import { TypyAnalyz } from "./entities/typy-analyz";
import { Vzorky } from "./entities/vzorky.entity";

@Injectable()
export class DatasourceService extends DataSource {

    constructor() {
        super({
            type: process.env.DB_TYPE as any,
            host: process.env.DB_HOST,
            port: process.env.DB_PORT as any,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            entities: [
                Analyzy,
                MistoUlozeni,
                TypyAnalyz,
                Vzorky,
                AppUsers
            ]
        })

        super.initialize()
            .then(() => {
                console.log("Data Source has been initialized!")
            })
            .catch((err) => {
                console.error("Error during Data Source initialization", err)
            })
    }

}


