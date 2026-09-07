namespace TrainOperations.Api.Models;

public sealed record OperationalAlert(
    int Id,
    string Severity,
    string Title,
    string Message,
    string Time);
