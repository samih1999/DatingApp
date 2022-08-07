using API.Entities;

namespace API.Controllers
{
    public interface ITokenService
    {
        String CreateToken(AppUser user);
    }
}