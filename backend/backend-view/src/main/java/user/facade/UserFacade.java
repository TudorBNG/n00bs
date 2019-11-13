package user.facade;

import user.control.UserController;
import user.converter.dto.UserDto;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import java.util.List;

/**
 * @author Bungardean Tudor-Ionut
 */

@Stateless
public class UserFacade {

    @EJB
    private UserController userController;

    public List<UserDto> getAllUsers(){
        return this.userController.getAllUsers();
    }

}
