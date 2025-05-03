package org.skeleton.testDataEndpoint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/test")
@CrossOrigin(origins = "http://localhost:8080")
public class TestdataController {
    @Autowired
    private final TestdataService testdataService;

    public TestdataController(final TestdataService testdataService) {
        this.testdataService = testdataService;
    }

    @GetMapping("/del")
    public void delete() {
        testdataService.clearTestData();
    }

    @GetMapping("/present")
    public boolean isPresent() {
        return testdataService.idDataPresent();
    }

}
