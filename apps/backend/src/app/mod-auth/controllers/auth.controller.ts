import { Body, Controller, HttpCode, Post, Res, UseGuards } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";
import { Response } from 'express';
import { JWT_COOKIE_NAME } from "../constants";
import { CredentialsDto } from "../models/credentials.dto";
import { UsernameDto } from "../models/username.dto";
import { JwtAuthGuard } from "../services/guards/jwt-auth.guard";
import { LocalAuthGuard } from "../services/guards/local-auth.guard";
import { LdapAuthService } from "../services/ldap-auth.service";

@Controller('auth')
export class AuthController {

    constructor(
        private ldapAuthService: LdapAuthService
    ) { }

    @UseGuards(LocalAuthGuard)
    @HttpCode(200)
    @ApiResponse({ type: UsernameDto })
    @Post('login')
    login(
        @Body() credentials: CredentialsDto,
        @Res({ passthrough: true }) response: Response): UsernameDto {
        response.cookie(JWT_COOKIE_NAME, this.ldapAuthService.signJwt(credentials), { httpOnly: true })
        return {
            username: credentials.username
        }
    }

    @UseGuards(JwtAuthGuard)
    @HttpCode(200)
    @Post('logout')
    logout(
        @Res({ passthrough: true }) response: Response) {
        response.clearCookie(JWT_COOKIE_NAME)
    }

}