package game.converter;

import com.sun.org.apache.regexp.internal.RE;
import game.converter.dto.ReviewDto;
import game.converter.dto.ViewGameDto;
import game.entity.GameEntity;
import game.entity.ReviewEntity;

import javax.ejb.Stateless;
import java.util.List;

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

    public ReviewEntity convertReviewDtoToReviewEntity(ReviewDto reviewDto){
        return new ReviewEntity(
                reviewDto.getId_user(),
                reviewDto.getId_game(),
                reviewDto.getReview(),
                reviewDto.getRating()
        );
    }
    //public List<Long>

}
