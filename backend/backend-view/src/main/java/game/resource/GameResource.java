package game.resource;

import game.facade.GameFacade;
import user.converter.dto.UserIdDto;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * @author Bungardean Tudor-Ionut
 */

@Stateless
@Path("/game")
public class GameResource {

    @EJB
    private GameFacade gameFacade;

    @GET
    @Path("/all")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAllGames(){
        System.out.println("all");
        return Response
                .status(Response.Status.OK)
                .entity(this.gameFacade.getAllGames())
                .build();
    }

    @GET
    @Path("/extended")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAllExtendedGames(){
        return Response
                .status(Response.Status.OK)
                .entity(this.gameFacade.getAllExtendedGames())
                .build();
    }

    @POST
    @Path("/wishlist/all")
    @Produces(MediaType.APPLICATION_JSON)
    //@Consumes(MediaType.APPLICATION_JSON)
    public Response getUserWishlist(UserIdDto userIdDto){
        return Response
                .status(Response.Status.OK)
                .entity(this.gameFacade.getAllGamesWishlist(userIdDto))
                .build();
    }
}
