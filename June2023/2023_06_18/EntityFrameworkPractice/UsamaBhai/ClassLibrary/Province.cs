﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibrary
{
    public class Province
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public virtual Country Country { get; set; }
    }
}
