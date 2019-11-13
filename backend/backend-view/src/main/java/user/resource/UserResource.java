package user.resource;

import user.converter.dto.UserDto;
import user.facade.UserFacade;

import javax.annotation.security.PermitAll;
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
    @PermitAll
    public Response getAllUsers(){
        return Response.ok(this.userFacade.getAllUsers())
                .header("Access-Control-Allow-Origin", "*")
                .header("Access-Control-Allow-Methods", "POST, GET, PUT, UPDATE, OPTIONS")
                .header("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With")
                .build();
    }

    @POST
    @PermitAll
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response get(UserDto userDto){
        return Response.ok().build();
    }
}
