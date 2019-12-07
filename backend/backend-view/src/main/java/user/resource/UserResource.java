package user.resource;

import user.converter.dto.UserDto;
import user.facade.UserFacade;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * @author Bungardean Tudor-Ionut
 */

@Stateless
@Path("/user")
public class UserResource {

    @EJB
    private UserFacade userFacade;

    @GET
    @Path("/all")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAllUsers(){
        return Response
                .ok()
                .entity(this.userFacade.getAllUsers())
                .build();
    }

    @POST
    @Path("/persist")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response createUser(UserDto userDto){
        this.userFacade
                .createUser(userDto);
        return Response
                .ok()
                .build();
    }
}
