using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Localization;
using Microsoft.IdentityModel.Tokens;
using System.Globalization;
using System.Text;

var builder = WebApplication.CreateBuilder(args);
// Add services to the container.
builder.Services.AddControllersWithViews().AddViewLocalization();
builder.Services.AddLocalization(option => { option.ResourcesPath = "Resources"; });
//builder.Services.AddHttpContextAccessor();
#region Session
builder.Services.AddDistributedMemoryCache();
builder.Services.AddSession(conf =>
{
    conf.IdleTimeout = TimeSpan.FromDays(1);
    conf.Cookie.HttpOnly = false;
    conf.Cookie.IsEssential = true;
    conf.Cookie.SameSite = SameSiteMode.None;
    conf.Cookie.SecurePolicy = CookieSecurePolicy.Always;

});
#endregion

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(token =>
{
    token.RequireHttpsMetadata = false;
    token.SaveToken = true;
    token.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        //Same Secret key will be used while creating the token
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("toogookeytoogookeytoogookey")),
        ValidateIssuer = true,
        //Usually, this is your application base URL
        ValidIssuer = "education",
        ValidateAudience = true,
        //Here, we are creating and using JWT within the same application.
        //In this case, base URL is fine.
        //If the JWT is created using a web service, then this would be the consumer URL.
        ValidAudience = "education",
        RequireExpirationTime = true,
        ValidateLifetime = true,
        ClockSkew = TimeSpan.Zero
    };
});


builder.Services.AddHttpClient("InStudy", c =>
{
    c.BaseAddress = new Uri("https://api.instudy.net/");
});
var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();
app.UseSession();

app.Use(async (context, next) =>
{
    var JWToken = context.Request.Cookies["JWToken"];
    if (!string.IsNullOrEmpty(JWToken))
    {
        context.Request.Headers.Add("Authorization", "Bearer " + JWToken);
    }
    
    await next();
});

app.UseAuthentication();
app.UseAuthorization();
var supportedCultures = new[]
{
    new CultureInfo("az"),
    new CultureInfo("en"),
    new CultureInfo("ru"),
};

app.UseRequestLocalization(new RequestLocalizationOptions
{
    DefaultRequestCulture = new RequestCulture("az"),
    SupportedCultures = supportedCultures,
    SupportedUICultures = supportedCultures
});
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllerRoute(
       name: "areas",
       pattern: "{area:exists}/{controller=About}/{action=Index}/{id?}");
    endpoints.MapControllerRoute(
        name: "default",
        pattern: "{controller=Home}/{action=Index}/{id?}/{value?}");
});

app.Run();
