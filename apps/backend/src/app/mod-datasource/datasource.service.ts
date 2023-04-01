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
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "12345",
            database: "impakt",
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


