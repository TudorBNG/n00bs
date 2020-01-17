package game.entity;

import utils.BaseEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "games_genres")
public class GameGenreEntity extends BaseEntity<Long> {

    @Id
    @Column(name = "game_id", nullable = false)
    private Long game_id;

    @Id
    @Column(name = "genres_id", nullable = false)
    private Long genres_id;

    public Long getGame_id() {
        return game_id;
    }

    public void setGame_id(Long game_id) {
        this.game_id = game_id;
    }

    public Long getGenres_id() {
        return genres_id;
    }

    public void setGenres_id(Long genres_id) {
        this.genres_id = genres_id;
    }
}
