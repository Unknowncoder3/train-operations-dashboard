using Microsoft.AspNetCore.Mvc;

namespace TrainOperations.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public sealed class DashboardController : ControllerBase
{
    [HttpGet("summary")]
    public IActionResult Summary() => Ok(new
    {
        totalTrains = 1248,
        activeTrains = 1234,
        delayedTrains = 127,
        cancelledTrains = 14,
        onTimePercentage = 89.8
    });
}
