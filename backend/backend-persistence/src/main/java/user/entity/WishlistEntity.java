package user.entity;

import utils.BaseEntity;

import javax.persistence.*;
import java.util.Objects;

/**
 * @author Cazacu Arina
 */

@Entity
@Table(name = "wishlist")
@NamedQueries(
        {
                //@NamedQuery(name = WishlistEntity.ADD_TO_WISHLIST, query = "INSERT INTO wishlist (id_game, id_user) user from UserEntity user"),
        }
)
public class WishlistEntity extends BaseEntity<Long> {

    //Query names
//    public static final String GET_ALL_USERS = "WishlistEntity.getAllUsers";
//    public static final String GET_USER_BY_EMAIL = "UserEntity.getUserByEmail";

    @Column(name="id_user", nullable = false)
    private Long id_user;

    @Column(name = "id_game", nullable = false)
    private Long id_game;



    public WishlistEntity(Long id_user, Long id_game) {
        this.id_user = id_user;
        this.id_game = id_game;
    }

    public WishlistEntity() {

    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        WishlistEntity that = (WishlistEntity) o;
        return Objects.equals(id_game, that.getId_game()) &&
                Objects.equals(id_user, that.getId_user());
    }

    @Override
    public int hashCode() {
        return Objects.hash(id_game,id_user);
    }

    @Override
    public String toString() {
        return "wishlistEnt{" +
                "idg='" + id_game + '\'' +
                "IDU='" + id_user + '\'' +
                '}';
    }



    public Long getId_user() {
        return id_user;
    }

    public void setId_user(Long id_user) {
        this.id_user = id_user;
    }

    public Long getId_game() {
        return id_game;
    }

    public void setId_game(Long id_game) {
        this.id_game = id_game;
    }
}
