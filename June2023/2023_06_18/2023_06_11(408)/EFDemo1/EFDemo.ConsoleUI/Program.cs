
using PakClassified;

namespace EFDemo.ConsoleUI
{
    public class Program
    {
        public static void Main(string[] args)
        {

            using (PakClassifiedContext context = new PakClassifiedContext())
            {
                context.Countries.Add(new Country { Code=92, Name="Pakistan" });
                context.Countries.Add(new Country { Code = 93, Name = "Afghanistan" });
                context.SaveChanges();

                List<Country> countries = context.Countries.ToList();
                foreach (Country c in countries) { 
                    Console.WriteLine(c.Name);    
                }
            }

            Console.ReadKey();
            Console.WriteLine("Done");
        }
    }
}