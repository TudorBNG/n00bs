package game.entity;

import utils.BaseEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "games_companies")
public class GameCompanyEntity extends BaseEntity<Long> {
    @Id
    @Column(name = "id_game", nullable = false)
    private Long id_game;

    @Id
    @Column(name = "id_company", nullable = false)
    private Long id_company;

    public Long getId_game() {
        return id_game;
    }

    public void setId_game(Long id_game) {
        this.id_game = id_game;
    }

    public Long getId_company() {
        return id_company;
    }

    public void setId_company(Long id_company) {
        this.id_company = id_company;
    }
}
