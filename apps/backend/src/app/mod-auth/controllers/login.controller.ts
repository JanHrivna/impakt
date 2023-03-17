import { Body, Controller, HttpCode, Post, Res, UseGuards } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";
import { Response } from 'express';
import { JWT_COOKIE_NAME } from "../constants";
import { CredentialsDto } from "../models/credentials.dto";
import { UsernameDto } from "../models/username.dto";
import { LocalAuthGuard } from "../services/guards/local-auth.guard";
import { LdapAuthService } from "../services/ldap-auth.service";

@Controller('login')
export class LoginController {

    constructor(
        private ldapAuthService: LdapAuthService
    ) { }

    @UseGuards(LocalAuthGuard)
    @HttpCode(200)
    @ApiResponse({ type: UsernameDto })
    @Post()
    login(
        @Body() credentials: CredentialsDto,
        @Res({ passthrough: true }) response: Response): UsernameDto {
        response.cookie(JWT_COOKIE_NAME, this.ldapAuthService.signJwt(credentials), { httpOnly: true })
        return {
            username: credentials.username
        }
    }

}