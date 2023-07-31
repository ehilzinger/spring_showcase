package tech.creationeers.springrest.service;

import org.springframework.security.core.userdetails.UserDetails;

public interface I_JwtService {
    String extractUserName(String token);

    String generateToken(UserDetails userDetails);

    boolean isTokenValid(String token, UserDetails userDetails);
}