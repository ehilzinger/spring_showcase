package tech.creationeers.springrest.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.creationeers.springrest.models.Client;

public interface ClientRepository extends JpaRepository<Client, Long> {
}
