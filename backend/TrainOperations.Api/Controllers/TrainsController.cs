using Microsoft.AspNetCore.Mvc;
using TrainOperations.Api.Models;

namespace TrainOperations.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public sealed class TrainsController : ControllerBase
{
    private static readonly IReadOnlyList<Train> Trains =
    [
        new(1, "12951", "Mumbai Rajdhani", "MMCT → NZM", "Mumbai Central", "Hazrat Nizamuddin", "4", "On Time", 0, "17:00", "08:35", 18),
        new(2, "12301", "Howrah Rajdhani", "HWH → NDLS", "Howrah", "New Delhi", "9", "Delayed", 18, "16:55", "10:00", 20),
        new(3, "12002", "Bhopal Shatabdi", "NDLS → RKMP", "New Delhi", "Rani Kamlapati", "2", "Boarding", 0, "06:00", "14:45", 16),
        new(4, "12259", "Sealdah Duronto", "SDAH → BCT", "Sealdah", "Mumbai Central", "7", "Delayed", 42, "05:50", "11:20", 18),
        new(5, "12627", "Karnataka Express", "NDLS → SBC", "New Delhi", "KSR Bengaluru", "11", "On Time", 0, "21:15", "05:30", 22),
        new(6, "12841", "Coromandel Express", "SHM → MAS", "Shalimar", "Chennai Central", "5", "Cancelled", 0, "14:55", "18:00", 21),
        new(7, "12903", "Golden Temple Mail", "MMCT → ASR", "Mumbai Central", "Amritsar", "3", "On Time", 0, "18:45", "22:10", 20),
        new(8, "12423", "Dibrugarh Rajdhani", "NDLS → DBRG", "New Delhi", "Dibrugarh", "6", "Delayed", 11, "16:10", "07:00", 18)
    ];

    [HttpGet]
    public ActionResult<IEnumerable<Train>> GetAll() => Ok(Trains);

    [HttpGet("{id:int}")]
    public ActionResult<Train> GetById(int id)
    {
        var train = Trains.FirstOrDefault(x => x.Id == id);
        return train is null ? NotFound() : Ok(train);
    }
}
