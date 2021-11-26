using System;
using Microsoft.AspNetCore.Mvc;

using Aula_25_11.Models;

namespace Aula_25_11.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AulaController : Controller
    {   
        [HttpPost]
        public ActionResult Post(Person model)
        {   
            var newModel = new ObjectReturn()
            {
                NomeCompletoObj = $"{model.Nome}, {model.Sobrenome}",
                NomeCatalagoObj = $"{model.Sobrenome.ToUpper()}, {model.Nome}", 
            };

            return Ok(newModel);
        
        }   
    }
}