import { DataSource } from "typeorm";
import { Analyzy } from "./entities/analyzy";
import { MistoUlozeni } from "./entities/misto-ulozeni";
import { PozadovaneAnalyzy } from "./entities/pozadovane-analyzy";
import { TypyAnalyz } from "./entities/typy-analyz";
import { Vzorky } from "./entities/vzorky";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "12345",
    database: "impakt",
    entities: [
        Analyzy,
        MistoUlozeni,
        PozadovaneAnalyzy,
        TypyAnalyz,
        Vzorky
    ]
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })