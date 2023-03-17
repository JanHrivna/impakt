import { Body, Controller, HttpCode, Post, Res, UseGuards } from "@nestjs/common";
import { Response } from 'express';
import { CredentialsDto } from "../models/credentials.dto";
import { LocalAuthGuard } from "../services/guards/local-auth.guard";
import { LdapAuthService } from "../services/ldap-auth.service";

@Controller('login')
export class LoginController {

    constructor(
        private ldapAuthService: LdapAuthService
    ) { }

    @UseGuards(LocalAuthGuard)
    @HttpCode(200)
    @Post()
    async login(
        @Body() credentials: CredentialsDto,
        @Res({ passthrough: true }) response: Response) {
        response.cookie("SESSIONID", this.ldapAuthService.signJwt(credentials), { httpOnly: true, secure: true })
    }

}