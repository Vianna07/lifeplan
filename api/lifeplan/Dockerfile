FROM maven:3.9.6-eclipse-temurin-22-alpine AS build

WORKDIR /app

COPY pom.xml ./
COPY src ./src

RUN mvn clean install -DskipTests

FROM eclipse-temurin:22-jre-alpine

WORKDIR /app

COPY --from=build /app/target/lifeplan-1.0-SNAPSHOT.jar app.jar

CMD ["java", "-jar", "app.jar"]

# Build: docker build -t lifeplan-api-image .
# Run: docker run -p 8080:8080 --name lifeplan-api lifeplan-api-image
