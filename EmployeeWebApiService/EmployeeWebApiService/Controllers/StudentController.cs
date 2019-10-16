using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using EmployeeWebApiService.Models;
using System.Web.Http.Cors;

namespace EmployeeWebApiService.Controllers
{
  [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class StudentController : ApiController
    {
        private StudentDatabaseEntities db = new StudentDatabaseEntities();

        // GET: api/Student
        public IQueryable<StudentData> GetStudentDatas()
        {
            return db.StudentDatas;
        }

    // GET: api/Student/5

    //////public HttpResponseMessage Get(string id)
    //////{
    //////  using (EmployeeDBEntities entities = new EmployeeDBEntities())
    //////  {
    //////    var entity = entities.Employees.FirstOrDefault(e => e.staffId == id);

    //////    if (entity != null)
    //////    {
    //////      return Request.CreateResponse(HttpStatusCode.OK, entity);
    //////    }
    //////    else
    //////    {
    //////      return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Employee with Id = " + id.ToString() + "not found");
    //////    }
    //////  }
    //////}

    //[ResponseType(typeof(StudentData))]
    //public IHttpActionResult GetStudentData(int id)
    //{

    //  StudentData studentData = db.StudentDatas.Find(id);
    //  if (studentData == null)
    //  {
    //    return NotFound();
    //  }

    //  return Ok(studentData);
    //}
    [ResponseType(typeof(StudentData))]
    public HttpResponseMessage GetStudentData(int id)
    {
      using (StudentDatabaseEntities entities = new StudentDatabaseEntities())
      { var entity = entities.StudentDatas.FirstOrDefault(s => s.studentId == id);
        if (entity != null)
        {
          return Request.CreateResponse(HttpStatusCode.OK, entity);
        }
        else {
          return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Student with Id = " + id.ToString() + "not found");

        }
      }
  
      //  StudentData studentData = db.StudentDatas.Find(id);
      //if (studentData == null)
      //{
      //  return NotFound();
      //}

      //return Ok(studentData);
    }
    // PUT: api/Student/5
    [ResponseType(typeof(void))]
        public IHttpActionResult PutStudentData(int id, StudentData studentData)
        {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      if (id != studentData.studentId)
            {
                return BadRequest();
            }

            db.Entry(studentData).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudentDataExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Student
        [ResponseType(typeof(StudentData))]
        public IHttpActionResult PostStudentData(StudentData studentData)
        {

            db.StudentDatas.Add(studentData);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = studentData.studentId }, studentData);
        }

        // DELETE: api/Student/5
        [ResponseType(typeof(StudentData))]
        public IHttpActionResult DeleteStudentData(int id)
        {
            StudentData studentData = db.StudentDatas.Find(id);
            if (studentData == null)
            {
                return NotFound();
            }

            db.StudentDatas.Remove(studentData);
            db.SaveChanges();

            return Ok(studentData);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool StudentDataExists(int id)
        {
            return db.StudentDatas.Count(e => e.studentId == id) > 0;
        }
    }
}
