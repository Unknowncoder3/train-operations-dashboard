using Microsoft.AspNetCore.Mvc;
using TrainOperations.Api.Models;

namespace TrainOperations.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public sealed class AlertsController : ControllerBase
{
    [HttpGet]
    public ActionResult<IEnumerable<OperationalAlert>> GetAll() => Ok(new[]
    {
        new OperationalAlert(1, "High", "Route disruption", "Track maintenance affecting trains on the HWH–NDLS corridor.", "8 min ago"),
        new OperationalAlert(2, "Medium", "Platform change", "Train 12301 has moved from platform 7 to platform 9.", "14 min ago"),
        new OperationalAlert(3, "Low", "Coach inspection", "Routine coach inspection scheduled at Mumbai Central.", "31 min ago")
    });
}
