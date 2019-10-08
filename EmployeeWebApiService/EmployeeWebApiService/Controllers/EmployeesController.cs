using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EmployeeWebApiService.Controllers
{
    public class EmployeesController : ApiController
    {
    public IEnumerable<Employee> Get()
    {
      using (EmployeeDBEntities entities = new EmployeeDBEntities())
      {
        return entities.Employees.ToList();
      }
    }
    public HttpResponseMessage Get(string staffId)
    {
      using (EmployeeDBEntities entities = new EmployeeDBEntities())
      {
        var entity = entities.Employees.FirstOrDefault(e => e.staffId == staffId);

        if (entity != null)
        {
          return Request.CreateResponse(HttpStatusCode.OK, entity);
        }
        else {
          return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Employee with Id = " + staffId.ToString() + "not found");
        }
      }
    }
    public HttpResponseMessage Post([FromBody] Employee employee)
    {
      try
      {
        using (EmployeeDBEntities entities = new EmployeeDBEntities())
        {
          entities.Employees.Add(employee);
          entities.SaveChanges();

          var message = Request.CreateResponse(HttpStatusCode.Created, employee);
          message.Headers.Location = new Uri(Request.RequestUri +
              employee.staffId.ToString());

          return message;
        }
      }
      catch (Exception ex)
      {
        return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
      }
    }

  }
}