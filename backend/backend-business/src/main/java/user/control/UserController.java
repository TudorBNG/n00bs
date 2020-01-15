package user.control;

import user.converter.UserConverter;
import user.converter.dto.UserDto;
import user.dao.UserDao;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import java.util.List;
import java.util.stream.Collectors;

/**
 * @author Bungardean Tudor-Ionut
 */

@Stateless
public class UserController {

    @EJB
    private UserDao userDao;

    @EJB
    private UserConverter userConverter;

    /**
     * Converts the user entities from dao to dto
     * @return <list>UserDto</list>
     */
    public List<UserDto> getAllUsers(){
        return this.userDao.getAllUsers()
                .stream()
                .map(this.userConverter::convertUserEntityToUserDto)
                .collect(Collectors.toList());
    }

    /**
     * Converts the user dto to entity
     * Calls the persistUser method from dao using the converted entity as param
     * @param userDto used in the conversion
     */
    public void createUser(UserDto userDto){
        this.userDao.persistUser(this.userConverter.convertUserDtoToUserEntity(userDto));
    }

    public UserDto getUserByEmail(String email){
        return this.userConverter.convertUserEntityToUserDto(this.userDao.getUserByEmail(email));
    }

}
