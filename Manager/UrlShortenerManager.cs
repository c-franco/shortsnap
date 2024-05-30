using shortsnap_backend.DTO;
using shortsnap_backend.Entities;
using shortsnap_backend.Utils;

namespace shortsnap_backend.Manager
{
    public class UrlShortenerManager
    {
        public async Task<Url> GetRandomShortUrl(UrlDTO urlDto)
        {
            Random random = new Random();

            string randomString = new(Enumerable.Repeat(Constants.CHARS, Constants.SHORT_URL_LENGHT)
                .Select(x => x[random.Next(x.Length)]).ToArray());

            Url finalUrl = MapDtoToEntity(urlDto);
            finalUrl.ShortUrl = randomString;

            return finalUrl;
        }

        public Url MapDtoToEntity(UrlDTO dto)
        {
            Url url = new Url()
            {
                ShortUrl = dto.ShortUrl,
                LongUrl = dto.LongUrl,
                ClickCounter = dto.ClickCounter,
            };

            return url;
        }

        public UrlDTO MapEntityToDto(Url url)
        {
            UrlDTO dto = new UrlDTO()
            {
                ShortUrl = url.ShortUrl,
                LongUrl = url.LongUrl,
                ClickCounter = url.ClickCounter,
            };

            return dto;
        }
    }
}
