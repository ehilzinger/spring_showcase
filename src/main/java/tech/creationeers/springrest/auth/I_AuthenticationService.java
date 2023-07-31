package tech.creationeers.springrest.auth;

import tech.creationeers.springrest.dao.JwtAuthenticationResponse;
import tech.creationeers.springrest.dao.SignInRequest;
import tech.creationeers.springrest.dao.SignUpRequest;

public interface I_AuthenticationService {
    JwtAuthenticationResponse signup(SignUpRequest request);

    JwtAuthenticationResponse signin(SignInRequest request);
}
