using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PakClassified
{
    //[Table("tblCountry")]
    public class Country
    {
        //[Key]
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]   
        public int Id { get; set; }

        //[Required]
        [Column(TypeName ="varchar(50)")]
        public string Name { get; set; }
        public int? Code { get; set; }
        //public virtual ICollection<Province> Provinces{ get; set; }

    }
}
