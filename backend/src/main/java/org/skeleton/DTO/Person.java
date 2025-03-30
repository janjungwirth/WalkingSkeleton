package org.skeleton.DTO;

import jakarta.persistence.*;
import lombok.Data;

import java.util.UUID;

@Data
@Entity
@Table(name = "person")
public class Person {
    @Id
    @Column(name = "persid", nullable = false)
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID personid;

    @Column(name = "vorname", nullable = false)
    private String vorname;

    @Column(name = "nachname", nullable = false)
    private String nachname;
}
