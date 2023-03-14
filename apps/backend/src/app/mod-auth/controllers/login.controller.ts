import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { CredentialsDto } from "../models/credentials.dto";
import { LocalAuthGuard } from "../services/guards/local-auth.guard";
import { LdapAuthService } from "../services/ldap-auth.service";

@Controller('login')
export class LoginController {

    constructor(
        private ldapAuthService: LdapAuthService
    ) { }

    @UseGuards(LocalAuthGuard)
    @Post()
    async login(@Body() credentials: CredentialsDto) {
        return this.ldapAuthService.login(credentials);
    }

}