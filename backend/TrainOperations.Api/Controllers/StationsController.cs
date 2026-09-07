using Microsoft.AspNetCore.Mvc;

namespace TrainOperations.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public sealed class StationsController : ControllerBase
{
    [HttpGet]
    public IActionResult GetAll() => Ok(new[]
    {
        new { code = "NDLS", name = "New Delhi", activePlatforms = 16, status = "Operational" },
        new { code = "HWH", name = "Howrah Junction", activePlatforms = 12, status = "Operational" },
        new { code = "MMCT", name = "Mumbai Central", activePlatforms = 8, status = "Operational" },
        new { code = "SDAH", name = "Sealdah", activePlatforms = 10, status = "Operational" },
        new { code = "MAS", name = "Chennai Central", activePlatforms = 11, status = "Operational" }
    });
}
