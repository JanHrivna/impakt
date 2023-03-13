import { Body, Controller, HttpCode, InternalServerErrorException, Post, UnauthorizedException } from "@nestjs/common";
import { CredentialsDto } from "../models/credentials.dto";
import SimpleLDAP from 'simple-ldap-search';


@Controller('login')
export class LoginController {

    @HttpCode(200)
    @Post()
    async login(@Body() credentials: CredentialsDto) {
        const config = {
            url: 'ldap://localhost:10389',
            base: 'ou=users',
            dn: `cn=${credentials.username},ou=users`,
            password: credentials.password
        }
        const ldap = new SimpleLDAP(config)
        const filter = `(cn=${credentials.username})`
        const attributes = ['cn', 'sn']

        return await ldap.search(filter, attributes)
            .then(
                () => "Login success"
            )
            .catch(
                (err) => {
                    throw new UnauthorizedException()
                }
            )
    }

}