﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RxApp.Models.DTO
{
    public class DrugParams
    {

        public string PharmGroupName { get; set; }

        public string DrugName { get; set; }

        public bool AlphabeticalOrderAsc{ get; set; }
    }
}