package user.dao;

import user.entity.UserEntity;

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

    public List<UserEntity> getAllUsers(){
        return this.entityManager
                .createNamedQuery(UserEntity.GET_ALL_USERS, UserEntity.class)
                .getResultList();
    }

}