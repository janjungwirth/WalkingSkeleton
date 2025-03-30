package org.skeleton.DTO;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

@Repository
public interface LocationRepository extends JpaRepository<Location, UUID>{
}
