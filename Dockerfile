
FROM eclipse-temurin:17.0.9_9-jre-alpine

WORKDIR /app

# Copy the JAR file
COPY target/*.jar app.jar

# Environment variables
ENV SPRING_PROFILES_ACTIVE=prod
ENV PORT=8080

# Expose the application port
EXPOSE ${PORT}

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]