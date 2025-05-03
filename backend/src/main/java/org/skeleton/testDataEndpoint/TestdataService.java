package org.skeleton.testDataEndpoint;

import org.skeleton.DTO.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TestdataService {

    private final UmzugRepository umzugRepository;
    private final LocationRepository addressRepository;
    private final PersonRepository personRepository;

    @Autowired
    public TestdataService(UmzugRepository umzugRepository, LocationRepository addressRepository, PersonRepository personRepository) {
        this.umzugRepository = umzugRepository;
        this.addressRepository = addressRepository;
        this.personRepository = personRepository;
    }

    public void clearTestData() {
        umzugRepository.deleteAll();
        addressRepository.deleteAll();
        personRepository.deleteAll();
    }

    public boolean idDataPresent(){
        return umzugRepository.count()+addressRepository.count()+personRepository.count()>0;
    }
}
