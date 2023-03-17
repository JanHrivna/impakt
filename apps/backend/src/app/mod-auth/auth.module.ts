import { Module } from "@nestjs/common";
import { AuthController } from "./controllers/auth.controller";
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LdapAuthService } from "./services/ldap-auth.service";
import { JwtStrategy } from "./services/strategies/jwt.strategy";
import { LocalStrategy } from "./services/strategies/local.strategy";

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: '1d' },
        }),
    ],
    controllers: [AuthController],
    providers: [LdapAuthService, LocalStrategy, JwtStrategy],
    exports: []
})
export class AuthModule {
}
