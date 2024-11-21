package com.joaomarrucho.portfolio_api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.joaomarrucho.portfolio_api.model.Project;
import com.joaomarrucho.portfolio_api.repository.ProjectRepository;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")  // Permite CORS do frontend
@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    private final ProjectRepository projectRepository;

    public ProjectController(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    @GetMapping
    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }
}
