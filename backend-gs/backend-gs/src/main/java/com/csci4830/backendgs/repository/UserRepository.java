package com.csci4830.backendgs.repository;


import com.csci4830.backendgs.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
    User findByEmail(String email);
    List<User> findByRoles_Name(String roleName);
    // Additional custom queries can be added as needed.
}
