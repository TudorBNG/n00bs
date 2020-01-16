export class Service {
    private static baseUrl: String = 'http://localhost:8080/backend/noobs-api';

    public static getUserByEmail(email: string) {
        return new Promise((resolve, reject) =>
            fetch(`${this.baseUrl}/user/getUserByEmail`,
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': 'http://localhost:3000'

                    },
                    body: JSON.stringify({
                        email: email
                    })
                })
                .then((respo) => {
                    if (respo.ok) {
                        return respo.json()
                    }
                    else throw respo.status
                })
                .then(re => {
                    resolve(re)
                }
                )
                .catch((error) => {
                    reject(error)

                })
        );
    }

    public static addUser(name: string, email: string, uid: string) {
        return new Promise((resolve, reject) =>
            fetch(`${this.baseUrl}/user/persist`,
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': 'http://localhost:3000'

                    },
                    body: JSON.stringify({
                        username: name,
                        email: email,
                        uid: uid
                    })
                })
                .then((respo) => {
                    if (respo.ok) {
                        return respo
                    }
                    else throw respo
                })
                .then(re => {
                    resolve(re)
                }
                )
                .catch((error) => {
                    reject(error)

                })
        );
    }

    public static addToWishlist(id_user: number, id_game: number) {
        return new Promise((resolve, reject) =>
            fetch(`${this.baseUrl}/user/wishlist/add`,
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body:
                        JSON.stringify(
                            {
                                id_user: id_user,
                                id_game: id_game
                            })
                })
                .then((respo) => {
                    if (respo.ok) {
                        return respo.ok
                    }
                    else throw respo
                })
                .then(re => {
                    resolve(re)
                }
                )
                .catch((error) => {
                    reject(error)

                })
        );
    }

    public static removeFromWishlist(id_user: number, id_game: number) {
        return new Promise((resolve, reject) =>
            fetch(`${this.baseUrl}/user/wishlist/remove`,
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body:
                        JSON.stringify(
                            {
                                id_user: id_user,
                                id_game: id_game
                            })
                })
                .then((respo) => {
                    if (respo.ok) {
                        return respo.ok
                    }
                    else throw respo
                })
                .then(re => {
                    resolve(re)
                }
                )
                .catch((error) => {
                    reject(error)

                })
        );
    }


    public static getGenres() {
        return new Promise((resolve, reject) => {
            fetch('http://localhost:8080/backend/noobs-api/genre/all')
                .then(res => res.json())
                .then((data) => {
                    resolve(data);
                })
                .catch(err => reject(err));
        })
    }

    public static getUserWishlist(id_user: number) {
        return new Promise((resolve, reject) =>
            fetch(`${this.baseUrl}/game/wishlist/all`,
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body:
                        JSON.stringify(
                            {
                                id: id_user
                            })
                })
                .then((respo) => {
                    if (respo.ok) {
                        return respo.json()
                    }
                    else throw respo
                })
                .then(re => {
                    resolve(re)
                }
                )
                .catch((error) => {
                    reject(error)

                })
        );
    }

    public static isInWishlist(id_user: number, id_game: number) {
        return new Promise((resolve, reject) =>
            fetch(`${this.baseUrl}/user/wishlist/exists`,
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body:
                        JSON.stringify(
                            {
                                id_user: id_user,
                                id_game: id_game
                            })
                })
                .then((respo) => {
                    if (respo.ok) {
                        return respo
                    }
                    else throw respo
                })
                .then(re => {
                    resolve(re)
                }
                )
                .catch((error) => {
                    reject(error)

                })
        );
    }

    public static getGamesByGenres(genreIds: [number]) {
        return new Promise((resolve, reject) =>
            fetch(`${this.baseUrl}/game/genres/filter`,
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body:
                        JSON.stringify(
                            {
                                genreIds: genreIds
                            })
                })
                .then((respo) => {
                    if (respo.ok) {
                        return respo.json()
                    }
                    else throw respo
                })
                .then(re => {
                    resolve(re)
                }
                )
                .catch((error) => {
                    reject(error)

                })
        );
    }


}