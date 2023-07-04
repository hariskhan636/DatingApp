using API.DTOs;
using API.Helpers;
using API.Models;

namespace API.Repositories
{
    public interface ILikesRepository
    {
        Task<UserLike> GetUserLike(int sourceUserId, int likedUserId);
        Task<User> GetUserWithLikes(int userId);
        Task<PagedList<LikeDto>> GetUserLikes(LikeParams likeParams);
    }
}