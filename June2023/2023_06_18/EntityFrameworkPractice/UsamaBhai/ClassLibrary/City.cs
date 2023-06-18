using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibrary
{
    public class City
    {
        public int Id { get; set; }
    
        public string Name { get; set; }

        public virtual Province Province { get; set; }

        [NotMapped]
        public virtual Country Country
        {
            get => Province.Country;
            set => Province.Country = value;
        }
        
    }
}
