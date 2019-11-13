package user.entity;

import utils.BaseEntity;

import javax.persistence.*;
import java.util.Objects;

/**
 * @author Bungardean Tudor-Ionut
 */

@Entity
@Table(name = "user")
@NamedQueries(
        @NamedQuery(name = UserEntity.GET_ALL_USERS, query = "Select user from UserEntity user")
)
public class UserEntity extends BaseEntity<Long> {

    //Query names
    public static final String GET_ALL_USERS = "UserEntity.getAllUsers";

    @Column(name = "usernames", nullable = false)
    private String username;

    @Column(name = "passwords", nullable = false)
    private String password;

    public UserEntity() {
    }

    public UserEntity(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserEntity that = (UserEntity) o;
        return Objects.equals(username, that.username) &&
                Objects.equals(password, that.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(username, password);
    }

    @Override
    public String toString() {
        return "UserEntity{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
