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

    public List<UserDto> getAllUsers(){
        return this.userDao.getAllUsers()
                .stream()
                .map(this.userConverter::convertEntityToDto)
                .collect(Collectors.toList());
    }

}
