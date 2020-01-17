package game.facade;

import game.control.GameController;
import game.converter.dto.ViewExtendedGameDTO;
import game.converter.dto.ViewGameDto;
import user.converter.dto.UserIdDto;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import java.util.List;

/**
 * @author Bungardean Tudor-Ionut
 */

@Stateless
public class GameFacade {

    @EJB
    private GameController gameController;

    public List<ViewGameDto> getAllGames() {
        return this.gameController.getAllGames();
    }

    public List<ViewExtendedGameDTO> getAllExtendedGames() {
        return this.gameController.getAllExtendedGames();
    }

    public List<ViewGameDto> getAllGamesWishlist(UserIdDto userIdDto) {
        return this.gameController.getAllGamesWishlist(userIdDto.getId());
    }

}
