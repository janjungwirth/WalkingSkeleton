package org.skeleton.controller;

import org.skeleton.DTO.UmzugWrapper;
import org.skeleton.service.UmzugsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/umzug")
@CrossOrigin(origins = "http://localhost:4200")
public class UmzugsController {
    @Autowired
    private final UmzugsService umzugsService;


    public UmzugsController(final UmzugsService umzugsService) {
        this.umzugsService = umzugsService;
    }

    @PostMapping
    public void umzug(@RequestBody UmzugWrapper wrapper) {
        System.out.println(wrapper);
        umzugsService.saveUmzug(wrapper);
    }
}
