using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace InStudyFE.Extensions
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
    public class CustomAuthorizeAttribute : Attribute, IAuthorizationFilter
    {
        readonly string[] _requiredClaims;
        public CustomAuthorizeAttribute(params string[] claims)
        {
            _requiredClaims = claims;
        }
        public void OnAuthorization(AuthorizationFilterContext context)
        {
            var isAuthenticated = context.HttpContext.User.Identity.IsAuthenticated;
            if (!isAuthenticated)
            {
                context.Result = new RedirectToActionResult("Login", "Account", new { area = "" });
                return;
            }
        }
    }
}