const AUTH_FLAG = "impakt_user_authenticated"

export class AuthService {

    private constructor() { }

    static loginUser() {
        localStorage.setItem(AUTH_FLAG, 'true')
    }

    static isUserLogged() {
        return !!localStorage.getItem(AUTH_FLAG)
    }

    static logoutUser() {
        localStorage.removeItem(AUTH_FLAG)
    }

}