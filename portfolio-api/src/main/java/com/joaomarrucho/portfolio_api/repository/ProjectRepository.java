package com.joaomarrucho.portfolio_api.repository;

import com.joaomarrucho.portfolio_api.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Long> {
}
