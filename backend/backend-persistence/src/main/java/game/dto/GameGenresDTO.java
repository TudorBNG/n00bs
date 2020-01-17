package game.dto;

import utils.BaseEntity;

public class GameGenresDTO extends BaseEntity<Long> {
    private Long id;
    private String nameGame;
    private String nameGenres;

    @Override
    public Long getId() {
        return id;
    }

    @Override
    public void setId(Long id) {
        this.id = id;
    }

    public String getNameGame() {
        return nameGame;
    }

    public void setNameGame(String nameGame) {
        this.nameGame = nameGame;
    }

    public String getNameGenres() {
        return nameGenres;
    }

    public void setNameGenres(String nameGenres) {
        this.nameGenres = nameGenres;
    }
}
