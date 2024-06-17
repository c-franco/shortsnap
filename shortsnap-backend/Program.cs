using Microsoft.EntityFrameworkCore;
using shortsnap_backend.Database;
using shortsnap_backend.Manager;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin", builder =>
    {
        builder.WithOrigins("https://shortsnap.vercel.app")
               .AllowAnyMethod()
               .AllowAnyHeader();
    });

    options.AddPolicy("AllowAllOrigins", builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});
builder.Services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
builder.Services.AddScoped<UrlShortenerManager>();

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("defaultConnection"),
    sqlServer => sqlServer.UseNetTopologySuite()));

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseCors("AllowAllOrigins");
}
else
{
    app.UseCors("AllowSpecificOrigin");
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
