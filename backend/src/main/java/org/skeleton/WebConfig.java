package org.skeleton;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // Erlaubt alle Endpunkte
                .allowedOrigins("http://localhost:4200") // Erlaubt Angular-App
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Erlaubt HTTP-Methoden
                .allowedHeaders("*") // Akzeptiert alle Header
                .allowCredentials(true); // Erlaubt Cookies/Authentication
    }
}