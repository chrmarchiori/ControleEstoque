using Microsoft.EntityFrameworkCore;
using ControleEstoque.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<EstoqueContext>(opt =>
    opt.UseInMemoryDatabase("EstoqueList"));
builder.Services.AddDbContext<ProdutoContext>(opt =>
    opt.UseInMemoryDatabase("ProdutoList"));
builder.Services.AddDbContext<VendaContext>(opt =>
    opt.UseInMemoryDatabase("VendaList"));
builder.Services.AddDbContext<ItemVendaContext>(opt =>
    opt.UseInMemoryDatabase("ItemVendaList"));
builder.Services.AddDbContext<MovimentacaoEstoqueContext>(opt =>
    opt.UseInMemoryDatabase("MovimentacoesEstoqueList"));
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
//builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    //app.UseSwagger();
    //app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
