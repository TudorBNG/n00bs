package game.converter.dto;

import java.util.Objects;

/**
 * @author Bungardean Tudor-Ionut
 */
public class ViewGameDto {

    private String name;

    private String creator;

    private String description;

    private Float rating;

    public ViewGameDto() {
    }

    public ViewGameDto(String name, String creator, String description, Float rating) {
        this.name = name;
        this.creator = creator;
        this.description = description;
        this.rating = rating;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Float getRating() {
        return rating;
    }

    public void setRating(Float rating) {
        this.rating = rating;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ViewGameDto that = (ViewGameDto) o;
        return Objects.equals(name, that.name) &&
                Objects.equals(creator, that.creator) &&
                Objects.equals(description, that.description) &&
                Objects.equals(rating, that.rating);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, creator, description, rating);
    }

    @Override
    public String toString() {
        return "ViewGameDto{" +
                "name='" + name + '\'' +
                ", creator='" + creator + '\'' +
                ", description='" + description + '\'' +
                ", rating=" + rating +
                '}';
    }
}
