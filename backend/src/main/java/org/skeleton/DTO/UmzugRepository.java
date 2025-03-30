package org.skeleton.DTO;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UmzugRepository extends JpaRepository<Umzug, UUID> {
}
