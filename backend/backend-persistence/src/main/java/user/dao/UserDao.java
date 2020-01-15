package user.dao;

import user.entity.UserEntity;
import user.entity.WishlistEntity;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

/**
 * @author Bungardean Tudor-Ionut
 */

@Stateless
public class UserDao {

    @PersistenceContext(unitName = "backend-persistence")
    private EntityManager entityManager;

    /**
     * Returns all users from the database
     * @return <list>UserEntity</list>
     */
    public List<UserEntity> getAllUsers(){
        return this.entityManager
                .createNamedQuery(UserEntity.GET_ALL_USERS, UserEntity.class)
                .getResultList();
    }

    /**
     * Persists the user into the database
     * @param userEntity persisted into the database
     */
    public void persistUser(UserEntity userEntity){
        this.entityManager.persist(userEntity);
    }

    public UserEntity getUserByEmail(String email){
        return this.entityManager
                .createNamedQuery(UserEntity.GET_USER_BY_EMAIL, UserEntity.class)
                .setParameter("email",email)
                .getSingleResult();
    }

    public void persistWishlist(WishlistEntity wishlistEntity){
        this.entityManager.persist(wishlistEntity);
    }

}