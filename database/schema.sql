-- Initial schema for SQL Server/PostgreSQL adaptation.
-- Run after selecting your railway operations database.

CREATE TABLE trains (
    id INT PRIMARY KEY,
    train_number VARCHAR(20) NOT NULL,
    train_name VARCHAR(120) NOT NULL,
    origin VARCHAR(120) NOT NULL,
    destination VARCHAR(120) NOT NULL,
    platform VARCHAR(20),
    status VARCHAR(30) NOT NULL,
    delay_minutes INT NOT NULL DEFAULT 0,
    departure_time VARCHAR(10),
    arrival_time VARCHAR(10),
    coach_count INT NOT NULL DEFAULT 0
);

CREATE TABLE operational_alerts (
    id INT PRIMARY KEY,
    severity VARCHAR(20) NOT NULL,
    title VARCHAR(160) NOT NULL,
    message VARCHAR(500) NOT NULL,
    created_at TIMESTAMP NOT NULL
);

CREATE INDEX ix_trains_status ON trains(status);
CREATE INDEX ix_alerts_severity ON operational_alerts(severity);
