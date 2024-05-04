using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using shortsnap_backend.Entities;

namespace shortsnap_backend.Database
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public DbSet<Url> Urls { get; set; }

        public ApplicationDbContext(DbContextOptions options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
