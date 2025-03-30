package org.skeleton.service;

import org.skeleton.DTO.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UmzugsService {
    private final UmzugRepository umzugRepository;
    private final LocationRepository addressRepository;
    private final PersonRepository personRepository;

    @Autowired
    public UmzugsService(UmzugRepository umzugRepository, LocationRepository addressRepository, PersonRepository personRepository) {
        this.umzugRepository = umzugRepository;
        this.addressRepository = addressRepository;
        this.personRepository = personRepository;
    }

    public Umzug saveUmzug(UmzugWrapper wrapper) {
        addressRepository.save(wrapper.getLocation()[0]);
        addressRepository.save(wrapper.getLocation()[1]);

        personRepository.save(wrapper.getPerson());

        return umzugRepository.save(Umzug.generateUmzugFromWrapper(wrapper));
    }
}
