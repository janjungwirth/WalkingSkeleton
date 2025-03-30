package org.skeleton.DTO;

import jakarta.persistence.*;
import lombok.Data;

import java.util.UUID;

@Data
@Entity
@Table(name = "location")
public class Location {
    @Id
    @Column(name = "locationid", nullable = false)
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID locationid;

    @Column(name = "plz", nullable = false)
    private String plz;

    @Column(name = "city", nullable = false)
    private String city;

    @Column(name = "street", nullable = false)
    private String street;
}
