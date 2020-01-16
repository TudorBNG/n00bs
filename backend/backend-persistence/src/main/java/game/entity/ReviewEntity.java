package game.entity;

import javax.persistence.*;

/**
 * @author Cazacu Arina
 */

@Entity
@Table(name = "comment_rating")
@NamedQueries(
        {
                //@NamedQuery(name = WishlistEntity.GET_ALL_WISHLIST, query = "Select wishlist from WishlistEntity wishlist"),
        }
)
public class ReviewEntity {
    //extends BaseEntity<Long> {

    //Query names
    //public static final String GET_ALL_WISHLIST = "WishlistEntity.getAllWishlist";
//    public static final String GET_USER_BY_EMAIL = "UserEntity.getUserByEmail";

    @Id
    @Column(name="id_user", nullable = false)
    private Long id_user;

    @Id
    @Column(name = "id_game", nullable = false)
    private Long id_game;

    @Column(name = "comment")
    private String comment;

    @Column(name = "rating", nullable = false)
    private double rating;


    public ReviewEntity(Long id_user, Long id_game, String comment, double rating) {
        this.id_user = id_user;
        this.id_game = id_game;
        this.comment = comment;
        this.rating = rating;
    }

    public ReviewEntity(){

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

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }
}
