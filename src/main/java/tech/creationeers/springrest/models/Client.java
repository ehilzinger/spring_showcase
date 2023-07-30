package tech.creationeers.springrest.models;

import jakarta.persistence.*;

@Entity
@Table(name="client")
public class Client {


    @Id
    @GeneratedValue
    Long id;

    String name;
    String email;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
