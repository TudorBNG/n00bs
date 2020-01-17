package game.dto;

import utils.BaseEntity;

public class GamePlatformsDTO extends BaseEntity<Long> {
    private Long id;
    private String nameGame;
    private String namePlatform;

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

    public String getNamePlatform() {
        return namePlatform;
    }

    public void setNamePlatform(String namePlatform) {
        this.namePlatform = namePlatform;
    }
}
