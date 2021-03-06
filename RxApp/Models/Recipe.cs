﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace RxApp.Models
{
    public class Recipe
    {
        [Key]
        public int Id { get; set; }    
        public string MedicId { get; set; }

        public string PatientId { get; set; }

        public virtual Customer Medic { get; set; }

        public virtual Customer Patient { get; set; }

        public DateTime DateCreated { get; set; }

        public virtual ICollection<RecipeDrug> RecipeDrugs { get; set; }

        public bool IsDeletedForMedic { get; set; }

        public bool IsDeletedForPatient { get; set; }




    }
}
