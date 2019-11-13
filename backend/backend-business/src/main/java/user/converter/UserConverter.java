package user.converter;

import user.converter.dto.UserDto;
import user.entity.UserEntity;

import javax.ejb.Stateless;

/**
 * @author Bungardean Tudor-Ionut
 */

@Stateless
public class UserConverter {

    public UserDto convertEntityToDto(UserEntity userEntity){
        return new UserDto(userEntity.getUsername(), userEntity.getPassword());
    }
}
