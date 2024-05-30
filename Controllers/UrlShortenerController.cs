using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using shortsnap_backend.Database;
using shortsnap_backend.DTO;
using shortsnap_backend.Entities;
using shortsnap_backend.Manager;

namespace shortsnap_backend.Controllers
{
    [ApiController]
    [Route("")]
    public class UrlShortenerController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        private readonly UrlShortenerManager urlShortenerManager;

        public UrlShortenerController(ApplicationDbContext context, UrlShortenerManager urlShortenerManager)
        {
            this.context = context;
            this.urlShortenerManager = urlShortenerManager;
        }

        [HttpGet("{shortUrl}")]
        public async Task<ActionResult<UrlDTO>> Get(string shortUrl)
        {
            Url url = await context.Urls.FirstOrDefaultAsync(x => x.ShortUrl == shortUrl);

            if (url == null)
            {
                return NoContent();
            }

            url.ClickCounter += 1;

            context.Urls.Update(url);
            await context.SaveChangesAsync();

            UrlDTO urlDTO = this.urlShortenerManager.MapEntityToDto(url);

            return Ok(urlDTO);
        }

        [HttpGet("urlinfo/{shortUrl}")]
        public async Task<ActionResult<UrlDTO>> GetUrlInfo(string shortUrl)
        {
            Url url = await context.Urls.FirstOrDefaultAsync(x => x.ShortUrl == shortUrl);

            if (url == null)
            {
                return NoContent();
            }

            UrlDTO urlDTO = this.urlShortenerManager.MapEntityToDto(url);

            return Ok(urlDTO);
        }

        [HttpPost("shortener")]
        public async Task<ActionResult<ShortUrlResponseDTO>> Post([FromBody] UrlDTO urlDto)
        {
            if(!Uri.TryCreate(urlDto.LongUrl, UriKind.Absolute, out var result))
            {
                return NoContent();
            }

            Url finalUrl;
            Url? existingUrl;

            do
            {
                finalUrl = await this.urlShortenerManager.GetRandomShortUrl(urlDto);
                existingUrl = await context.Urls.FirstOrDefaultAsync(x => x.ShortUrl == finalUrl.ShortUrl);
            }
            while (existingUrl != null);

            context.Urls.Add(finalUrl);
            await context.SaveChangesAsync();

            ShortUrlResponseDTO response = new ShortUrlResponseDTO()
            {
                ShortUrl = finalUrl.ShortUrl,
                LongUrl = urlDto.LongUrl
            };

            return Ok(response);
        }
    }
}
