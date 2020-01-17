package game.dao;

import game.dto.GameCompanyDTO;
import game.dto.GameGenresDTO;
import game.dto.GamePlatformsDTO;
import game.entity.GameEntity;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

/**
 * @author Bungardean Tudor-Ionut
 */

@Stateless
public class GameDao {

    @PersistenceContext(unitName = "backend-persistence")
    private EntityManager entityManager;

    /**
     * Returns all games from the database
     *
     * @return <list>GameEntity</list>
     */
    public List<GameEntity> getAllGames() {
        return this.entityManager
                .createNamedQuery(GameEntity.GET_ALL_GAMES, GameEntity.class)
                .getResultList();
    }

    public List<GameGenresDTO> getAllGamesGenres() {
        return this.entityManager
                .createNativeQuery("Select games.id, games.name, genres.name from GameEntity games join GameGenreEntity games_genres on games.id= games_genres.game_id join GenreEntity genres on games_genres.genre_id=genres.id group by games.id")
                .getResultList();
    }

    public List<GamePlatformsDTO> getAllGamesPlatform() {
        return this.entityManager
                .createNativeQuery("Select games.id, games.name, platforms.name from GameEntity games join GamePlatformEntity games_platforms on games.id= games_platforms.game_id join PlatformEntity platforms on games_platforms.platform_id=platforms.id group by games.id")
                .getResultList();
    }

    public List<GameCompanyDTO> getAllGamesCompany() {
        return this.entityManager
                .createNativeQuery("select games.id, games.name,companies.company from GameEntity games join GameCompanyEntity games_companies on games.id=games_companies.id_game join CompanyEntity companies on games_companies.id_company=companies.id group by games.id")
                .getResultList();
    }

    public List<GameEntity> getAllGamesWishlist(Long id) {
        return this.entityManager
                .createNamedQuery(GameEntity.GET_ALL_GAMES_WISHLIST, GameEntity.class)
                .setParameter("id", id)
                .getResultList();
    }


}
