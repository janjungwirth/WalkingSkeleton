package org.skeleton.DTO;

import java.util.UUID;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "umzug")
public class Umzug {
    @Id
    @Column(name = "umzugid", nullable = false, unique = true)
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID umzugid;

    @Column(name = "personid", nullable = false)

    private UUID personid;
    @Column(name = "locationidvon", nullable = false)

    private UUID locationidvon;
    @Column(name = "locationidzu", nullable = false)

    private UUID locationidzu;
    @Column(name = "amount", nullable = false)

    private String amount;
    @Column(name = "packaging", nullable = false)
    private boolean packaging;


    public static Umzug generateUmzugFromWrapper(UmzugWrapper wrapper) {
        Umzug umzug = new Umzug();
        umzug.setAmount(wrapper.getAmount());
        umzug.setLocationidvon(wrapper.getLocation()[0].getLocationid());
        umzug.setLocationidzu(wrapper.getLocation()[1].getLocationid());
        umzug.setPersonid(wrapper.getPerson().getPersonid());
        umzug.setPackaging(wrapper.getAdditional_info().isPackaging());

        return umzug;
    }
}
