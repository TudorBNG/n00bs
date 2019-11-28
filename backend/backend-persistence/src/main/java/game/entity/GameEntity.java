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
                @NamedQuery(name = GameEntity.GET_ALL_GAMES, query = "Select game from GameEntity game")
        }
)
public class GameEntity extends BaseEntity<Long> {
    public static final String GET_ALL_GAMES = "GameEntity.getAllGames";

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "creator", nullable = false)
    private String creator;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "rating", nullable = false)
    private Float rating;

    public GameEntity() {
    }

    public GameEntity(String name, String creator, String description, Float rating) {
        this.name = name;
        this.creator = creator;
        this.description = description;
        this.rating = rating;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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
                Objects.equals(creator, that.creator) &&
                Objects.equals(description, that.description) &&
                Objects.equals(rating, that.rating);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, creator, description, rating);
    }

    @Override
    public String toString() {
        return "GameEntity{" +
                "name='" + name + '\'' +
                ", creator='" + creator + '\'' +
                ", description='" + description + '\'' +
                ", rating=" + rating +
                '}';
    }
}
