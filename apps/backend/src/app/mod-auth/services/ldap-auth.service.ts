import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import SimpleLDAP from 'simple-ldap-search';
import { AppUsersService } from "../../mod-datasource/services/app-users.service";
import { CredentialsDto } from "../models/credentials.dto";

const USER_PLACEHOLDER = "{username}"

@Injectable()
export class LdapAuthService {
    constructor(
        private readonly jwtService: JwtService,
        private appUserService: AppUsersService
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
        const attributes: string[] = process.env.LDAP_ATTRIBUTES?.split(',')

        return await this.appUserService.getUsers()
            .then(
                (users) => {
                    const usernames = users.map(u => u.username)
                    if (usernames.includes(username)) return ldap.search(filter, attributes)
                    return null
                }
            )
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