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
                    },
                    body: JSON.stringify({
                        email: email
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

}