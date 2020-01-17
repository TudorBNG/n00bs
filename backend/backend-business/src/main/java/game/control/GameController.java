package game.control;

import game.converter.GameConverter;
import game.converter.dto.ViewExtendedGameDTO;
import game.converter.dto.ViewGameDto;
import game.dao.GameDao;
import game.dto.GameCompanyDTO;
import game.dto.GameGenresDTO;
import game.dto.GamePlatformsDTO;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * @author Bungardean Tudor-Ionut
 */

@Stateless
public class GameController {

    @EJB
    private GameDao gameDao;

    @EJB
    private GameConverter gameConverter;

    /**
     * Converts the game entities from dao to dto
     * @return <list>ViewGameDto</list>
     */
    public List<ViewGameDto> getAllGames(){
        return this.gameDao.getAllGames()
                .stream()
                .map(this.gameConverter::convertGameEntityToViewGameDto)
                .collect(Collectors.toList());
    }
    public List<ViewExtendedGameDTO> getAllExtendedGames(){
        List<GameCompanyDTO> gameCompanyDTOList= this.gameDao.getAllGamesCompany();
        List<GamePlatformsDTO> gamePlatformsDTOList=this.gameDao.getAllGamesPlatform();
        List<GameGenresDTO> gameGenresDTOList=this.gameDao.getAllGamesGenres();

        List<ViewExtendedGameDTO> viewExtendedGameDTOList=new ArrayList<>();
        for (int i = 0; i <gameCompanyDTOList.size() ; i++) {
            ViewExtendedGameDTO viewExtendedGameDTO= new ViewExtendedGameDTO(
                    gameCompanyDTOList.get(i).getId(),
                    gameCompanyDTOList.get(i).getName(),
                    gameCompanyDTOList.get(i).getCompany(),
                    gamePlatformsDTOList.get(i).getNamePlatform(),
                    gameGenresDTOList.get(i).getNameGenres());
            viewExtendedGameDTOList.add(viewExtendedGameDTO);
        }
        return viewExtendedGameDTOList;
    }

    public List<ViewGameDto> getAllGamesWishlist(Long id){
        return this.gameDao.getAllGamesWishlist(id)
                .stream()
                .map(this.gameConverter::convertGameEntityToViewGameDto)
                .collect(Collectors.toList());
    }
}
