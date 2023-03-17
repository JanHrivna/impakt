import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import SimpleLDAP from 'simple-ldap-search';
import { CredentialsDto } from "../models/credentials.dto";

@Injectable()
export class LdapAuthService {
    constructor(
        private readonly jwtService: JwtService,
    ) { }

    async validateUser(username: string, password: string): Promise<any> {
        const config = {
            url: 'ldap://localhost:10389',
            base: 'ou=users',
            dn: `cn=${username},ou=users`,
            password
        }
        const ldap = new SimpleLDAP(config)
        const filter = `(cn=${username})`
        const attributes = ['cn']

        return await ldap.search(filter, attributes)
            .catch(() => null)
    }

    signJwt(credentials: CredentialsDto): string {
        const payload = { username: credentials.username }
        return this.jwtService.sign(payload)
    }
}