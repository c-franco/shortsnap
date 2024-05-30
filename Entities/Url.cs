namespace shortsnap_backend.Entities
{
    public class Url
    {
        public int Id { get; set; }
        public string LongUrl { get; set; }
        public string ShortUrl { get; set; }
        public int ClickCounter { get; set; }
    }
}
