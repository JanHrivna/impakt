const KEY = "impakt_username"

export class AuthService {

    private constructor() { }

    static loginUser(username: string) {
        localStorage.setItem(KEY, username)
    }

    static isUserLogged() {
        return !!localStorage.getItem(KEY)
    }

    static getUser() {
        return localStorage.getItem(KEY)
    }

    static logoutUser() {
        localStorage.removeItem(KEY)
    }

}