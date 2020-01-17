package game.converter;

import game.converter.dto.ViewExtendedGameDTO;
import game.converter.dto.ViewGameDto;
import game.dto.GameCompanyDTO;
import game.entity.GameEntity;

import javax.ejb.Stateless;

/**
 * @author Bungardean Tudor-Ionut
 */

@Stateless
public class GameConverter {

    /**
     * Converts the game entity to view dto
     * @param gameEntity user for the ViewGameDto
     * @return ViewGameDto
     */
    public ViewGameDto convertGameEntityToViewGameDto(GameEntity gameEntity){
        return new ViewGameDto(
                gameEntity.getId(),
                gameEntity.getName(),
                gameEntity.getRelease_date(),
                gameEntity.getSummary(),
                gameEntity.getRating(),
                gameEntity.getCover_url()
        );
    }
}
