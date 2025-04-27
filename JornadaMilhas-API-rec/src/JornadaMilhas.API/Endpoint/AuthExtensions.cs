using JornadaMilhas.API.DTO.Auth;
using JornadaMilhas.API.Service;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace JornadaMilhas.API.Endpoint;

public static class AuthExtensions
{
    public static void AddAuth(this WebApplication app)
    {
        //app.MapPost("/auth-registrar", async(
        //      [FromServices] UserManager<IdentityUser> userManager,
        //      [FromServices] SignInManager<IdentityUser> signInManager,
        //      [FromServices] GenerateToken generateToken,
        //      [FromBody] UserDTO user) =>
        //{
        //    var identityUser = new IdentityUser
        //    {
        //        UserName = user.Email,
        //        Email = user.Email,
        //        EmailConfirmed = true
        //    };

        //    var result = await userManager.CreateAsync(identityUser, user.Password!);
        //    if (!result.Succeeded)
        //    {
        //        return Results.BadRequest("Falha ao criar usuário. Contacte o administrador ===>" + result.Errors);
        //    }
        //    await signInManager.SignInAsync(identityUser, false);
        //    return Results.Ok(generateToken.GenerateUserToken(user));

        //}).WithTags("Autenticação").WithSummary("Registrar um novo usuário de autenticação.").WithOpenApi();

        app.MapPost("/auth-login", async (             
              [FromServices] SignInManager<IdentityUser> signInManager,
              [FromServices] GenerateToken generateToken,
              [FromBody] UserDTO user) =>
        {
            var result = await signInManager.PasswordSignInAsync(user.Email!,
               user.Password!, isPersistent: false, lockoutOnFailure: false);

            if (!result.Succeeded)
            {
                return Results.BadRequest("Login inválido.");
            }
            return Results.Ok(generateToken.GenerateUserToken(user));

        }).WithTags("Autenticação").WithSummary("Realiza o login de um usuário.").WithOpenApi();
    }
}
