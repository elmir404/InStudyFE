using Microsoft.AspNetCore.Authorization;
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
            var hasAllRequredClaims = _requiredClaims.All(claim => context.HttpContext.User.HasClaim(x => x.Value == claim));
            //var hasAllRequredClaims = _requiredClaims.All(claim => role==claim);
            if (!hasAllRequredClaims)
            {
                context.Result = new RedirectToActionResult("Login", "Account",null);
                return;
            }
        }
    }
}