using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudentsController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Student> GetStudents()
        {
            List<Student> lstStudents = new List<Student>()
            {
                new Student(){ Id=1, Name="Christopher Nolan"},
                new Student(){ Id=2, Name="Martin Scorcese"},
                new Student(){ Id=3, Name="Antoine Fuqua"},
                new Student(){ Id=4, Name="Steven Spielberg"},
                new Student(){ Id=5, Name="Ridley Scott"}
            };
            return lstStudents;
        }
    }
}