package game.entity;

import utils.BaseEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "games_platforms")
public class GamePlatformEntity extends BaseEntity<Long> {
    @Id
    @Column(name = "game_id", nullable = false)
    private Long game_id;

    @Id
    @Column(name = "platform_id", nullable = false)
    private Long platform_id;
}
