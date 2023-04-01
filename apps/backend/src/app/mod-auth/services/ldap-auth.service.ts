import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import SimpleLDAP from 'simple-ldap-search';
import { CredentialsDto } from "../models/credentials.dto";

const USER_PLACEHOLDER = "{username}"

@Injectable()
export class LdapAuthService {
    constructor(
        private readonly jwtService: JwtService,
    ) { }

    async validateUser(username: string, password: string): Promise<any> {
        const config = {
            url: process.env.LDAP_URL,
            base: process.env.LDAP_BASE,
            dn: this.getDn(username),
            password
        }
        const ldap = new SimpleLDAP(config)
        const filter = this.getFilter(username)
        const attributes = process.env.LDAP_ATTRIBUTES

        return await ldap.search(filter, attributes)
            .catch(() => null)
    }

    signJwt(credentials: CredentialsDto): string {
        const payload = { username: credentials.username }
        return this.jwtService.sign(payload)
    }

    private getDn(username: string) {
        return process.env.LDAP_DN.replace(USER_PLACEHOLDER, username)
    }

    private getFilter(username: string) {
        return process.env.LDAP_FILTER.replace(USER_PLACEHOLDER, username)
    }
}