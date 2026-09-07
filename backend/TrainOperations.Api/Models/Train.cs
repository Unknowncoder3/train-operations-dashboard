namespace TrainOperations.Api.Models;

public sealed record Train(
    int Id,
    string Number,
    string Name,
    string Route,
    string Origin,
    string Destination,
    string Platform,
    string Status,
    int DelayMinutes,
    string Departure,
    string Arrival,
    int Coaches);
