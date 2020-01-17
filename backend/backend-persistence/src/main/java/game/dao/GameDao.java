package game.dao;

import game.entity.GameEntity;
import game.entity.ReviewEntity;

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
     * @return <list>GameEntity</list>
     */
    public List<GameEntity> getAllGames(){
        return this.entityManager
                .createNamedQuery(GameEntity.GET_ALL_GAMES, GameEntity.class)
                .getResultList();
    }

    public List<GameEntity> getAllGamesWishlist(Long id){
        return this.entityManager
                .createNamedQuery(GameEntity.GET_ALL_GAMES_WISHLIST, GameEntity.class)
                .setParameter("id",id)
                .getResultList();
    }

    public List<GameEntity> getGamesByGenres(List<Long> genreIdsListDto){
        return this.entityManager
                .createNamedQuery(GameEntity.GET_GAMES_BY_GENRES, GameEntity.class)
                .setParameter("list",genreIdsListDto)
                .getResultList();
    }

    public GameEntity getGameById(Long id){
        return this.entityManager
                .createNamedQuery(GameEntity.GET_GAME_BY_ID, GameEntity.class)
                .setParameter(GameEntity.ID, id)
                .getSingleResult();
    }

    public void persistReview(ReviewEntity reviewEntity){
        this.entityManager.persist(reviewEntity);
    }
}
