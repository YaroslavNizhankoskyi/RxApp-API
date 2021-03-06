﻿using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace RxApp.Controllers
{
    public class FallbackController : Controller
    {
        public IActionResult Index()
        {
            return PhysicalFile(
                Path.Combine(
                    Directory.GetCurrentDirectory(),
                    "wwwroot",
                    "index.html"),
                "text/HTML");
        }

        [HttpGet]
        public ActionResult<string> GetHello()
        {
            return "Hello from backend";
        }
    }
}
