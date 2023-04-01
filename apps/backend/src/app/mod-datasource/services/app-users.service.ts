import { Injectable } from "@nestjs/common";
import { DatasourceService } from "../datasource.service";
import { AppUsers } from "../entities/app-user.entity";

@Injectable()
export class AppUsersService {

    constructor(private datasourceService: DatasourceService) { }

    getUsers() {
        return this.datasourceService.getRepository(AppUsers).find()
    }

}