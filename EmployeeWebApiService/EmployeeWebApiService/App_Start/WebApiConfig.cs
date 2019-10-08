using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace EmployeeWebApiService
{
  public static class WebApiConfig
  {
    public static void Register(HttpConfiguration config)
    {
      // Web API configuration and services
      config.EnableCors(new EnableCorsAttribute("*", headers: "*", methods: "*"));
      // Web API routes
      config.MapHttpAttributeRoutes();

      config.Routes.MapHttpRoute(
          name: "DefaultApi",
          routeTemplate: "api/{controller}/{staffId}",
          defaults: new { staffId = RouteParameter.Optional }
      );
    }
  }
}