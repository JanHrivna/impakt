import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { LdapAuthService } from '../ldap-auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly ldapAuthService: LdapAuthService) {
        super()
    }

    async validate(username: string, password: string): Promise<any> {
        const res = await this.ldapAuthService.validateUser(username, password)
        if (!res) {
            throw new UnauthorizedException();
        }
        return res
    }
}