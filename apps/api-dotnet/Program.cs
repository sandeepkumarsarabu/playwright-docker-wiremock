using System.Net.Http.Json;

var builder = WebApplication.CreateBuilder(args);

// ✅ Allow browser (UI) to call this API from another port (demo purpose)
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod());
});

var app = builder.Build();

// ✅ Enable CORS
app.UseCors();

app.MapGet("/health", () => Results.Ok(new { status = "ok" }));

app.MapGet("/api/assets/{assetId}", async (string assetId) =>
{
    var sapBase = Environment.GetEnvironmentVariable("SAP_STUB_URL") ?? "http://localhost:8081";
    using var http = new HttpClient { BaseAddress = new Uri(sapBase) };

    var sapResponse = await http.GetFromJsonAsync<object>($"/sap/assets/{assetId}");
    return Results.Ok(new { source = "api-dotnet", sap = sapResponse });
});

app.Run();
