package game.entity;

import utils.BaseEntity;

import javax.persistence.*;
import java.util.Objects;

/**
 * @author Bungardean Tudor-Ionut
 */

@Entity
@Table(name = "games")
@NamedQueries(
        {
                @NamedQuery(name = GameEntity.GET_ALL_GAMES, query = "Select game from GameEntity game"),
                @NamedQuery(name = GameEntity.GET_ALL_GAMES_WISHLIST, query = "Select game from GameEntity game join WishlistEntity w on w.id_game = game.id WHERE w.id_user = :id "),
                @NamedQuery(name = GameEntity.GET_GAMES_BY_GENRES, query = "Select game from GameEntity game join GamesGenresEntity gg on gg.game_id = game.id WHERE gg.genre_id in :list ")


        }
)
public class GameEntity extends BaseEntity<Long> {
    public static final String GET_ALL_GAMES = "GameEntity.getAllGames";
    public static final String GET_ALL_GAMES_WISHLIST = "GameEntity.getAllGamesWishlist";
    public static final String GET_GAMES_BY_GENRES = "GameEntity.getGamesByGenres";

    @Id
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "release_date", nullable = false)
    private String release_date;

    @Column(name = "summary", nullable = false)
    private String summary;

    @Column(name = "cover_url", nullable = false)
    private String cover_url;

    @Column(name = "rating", nullable = false)
    private Float rating;

    public GameEntity() {
    }

    public String getRelease_date() {
        return release_date;
    }

    public void setRelease_date(String release_date) {
        this.release_date = release_date;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public String getCover_url() {
        return cover_url;
    }

    public void setCover_url(String cover_url) {
        this.cover_url = cover_url;
    }

    public GameEntity(Long id,String name, String release_date, String summary, Float rating, String cover_url) {
        this.id = id;
        this.name = name;
        this.release_date = release_date;
        this.summary = summary;
        this.rating = rating;
        this.cover_url = cover_url;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Float getRating() {
        return rating;
    }

    public void setRating(Float rating) {
        this.rating = rating;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        GameEntity that = (GameEntity) o;
        return Objects.equals(name, that.name) &&
                Objects.equals(release_date, that.release_date) &&
                Objects.equals(id, that.id) &&
                Objects.equals(summary, that.summary) &&
                Objects.equals(cover_url, that.cover_url) &&
                Objects.equals(rating, that.rating);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id,name, release_date, summary, rating, cover_url);
    }

    @Override
    public String toString() {
        return "GameEntity{" +
                "id='" + id + '\'' +
                "name='" + name + '\'' +
                ", release_date='" + release_date + '\'' +
                ", summary='" + summary + '\'' +
                ", rating=" + rating +
                '}';
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
