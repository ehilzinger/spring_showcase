package tech.creationeers.springrest.service;

import org.springframework.security.core.userdetails.UserDetailsService;

public interface I_UserService {
    UserDetailsService userDetailsService();
}