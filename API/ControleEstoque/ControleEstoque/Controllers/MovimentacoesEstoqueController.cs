using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ControleEstoque.Models;

namespace ControleEstoque.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovimentacoesEstoqueController : ControllerBase
    {
        private readonly Context _context;

        public MovimentacoesEstoqueController(Context context)
        {
            _context = context;
        }

        // GET: api/MovimentacoesEstoque
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MovimentacaoEstoque>>> GetmovimentacaoEstoque()
        {
            return await _context.movimentacaoEstoque.ToListAsync();
        }

        // GET: api/MovimentacoesEstoque/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MovimentacaoEstoque>> GetMovimentacaoEstoque(int? id)
        {
            var movimentacaoEstoque = await _context.movimentacaoEstoque.FindAsync(id);

            if (movimentacaoEstoque == null)
            {
                return NotFound();
            }

            return movimentacaoEstoque;
        }

        // PUT: api/MovimentacoesEstoque/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMovimentacaoEstoque(int? id, MovimentacaoEstoque movimentacaoEstoque)
        {
            if (id != movimentacaoEstoque.id)
            {
                return BadRequest();
            }

            _context.Entry(movimentacaoEstoque).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MovimentacaoEstoqueExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/MovimentacoesEstoque
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<MovimentacaoEstoque>> PostMovimentacaoEstoque(MovimentacaoEstoque movimentacaoEstoque)
        {
            _context.movimentacaoEstoque.Add(movimentacaoEstoque);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMovimentacaoEstoque", new { id = movimentacaoEstoque.id }, movimentacaoEstoque);
        }

        // DELETE: api/MovimentacoesEstoque/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMovimentacaoEstoque(int? id)
        {
            var movimentacaoEstoque = await _context.movimentacaoEstoque.FindAsync(id);
            if (movimentacaoEstoque == null)
            {
                return NotFound();
            }

            _context.movimentacaoEstoque.Remove(movimentacaoEstoque);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MovimentacaoEstoqueExists(int? id)
        {
            return _context.movimentacaoEstoque.Any(e => e.id == id);
        }
    }
}
