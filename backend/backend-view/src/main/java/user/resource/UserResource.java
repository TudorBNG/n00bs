package user.resource;

import user.converter.dto.EmailDto;
import user.converter.dto.UserDto;
import user.converter.dto.UserIdDto;
import user.converter.dto.WishlistDto;
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
    @Path("/getUserByEmail")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Response getUserByEmail(EmailDto email){
//        this.userFacade
//                .getUserByEmail(email.getEmail());
        return Response
                .ok()
                .entity(this.userFacade.getUserByEmail(email.getEmail()))
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

//    @GET
//    @Path("/wishlist/all")
//    @Produces(MediaType.APPLICATION_JSON)
//    @Consumes(MediaType.APPLICATION_JSON)
//    public Response getAllUserWishlist(UserIdDto userDto){
//        return Response
//                .ok()
//                .entity(this.userFacade.getUserWishlist())
//                .build();
//    }

    @POST
    @Path("/wishlist/add")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response addToWishlist(WishlistDto wishlistDto){
        this.userFacade
                .addToWishlist(wishlistDto);
        return Response
                .ok()
                .build();
    }

    @POST
    @Path("/wishlist/exists")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response isInWishlist(WishlistDto wishlistDto){
        if(this.userFacade
                .isInWishlist(wishlistDto)) {
            return Response
                    .ok()
                    .build();
        }
        else{
            return Response
                    .status(404)
                    .build();
        }
    }
}
