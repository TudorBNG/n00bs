package game.converter;

import game.converter.dto.ViewGameDto;
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
                gameEntity.getName(),
                gameEntity.getCreator(),
                gameEntity.getDescription(),
                gameEntity.getRating()
        );
    }
}
