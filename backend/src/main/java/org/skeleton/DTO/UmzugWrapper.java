package org.skeleton.DTO;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UmzugWrapper {
    private Person person;
    private String date;
    private Location[] location;
    private String amount;
    private Info additional_info;
}
