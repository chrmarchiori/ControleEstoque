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
    public class EstoquesController : ControllerBase
    {
        private readonly Context _context;

        public EstoquesController(Context context)
        {
            _context = context;
        }

        // GET: api/Estoques
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Estoque>>> Getestoques()
        {
            return await _context.estoques.ToListAsync();
        }

        // GET: api/Estoques/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Estoque>> GetEstoque(long id)
        {
            var estoque = await _context.estoques.FindAsync(id);

            if (estoque == null)
            {
                return NotFound();
            }

            return estoque;
        }

        // PUT: api/Estoques/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEstoque(long id, Estoque estoque)
        {
            if (id != estoque.id)
            {
                return BadRequest();
            }

            _context.Entry(estoque).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EstoqueExists(id))
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

        // POST: api/Estoques
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Estoque>> PostEstoque(Estoque estoque)
        {
            _context.estoques.Add(estoque);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEstoque", new { id = estoque.id }, estoque);
        }

        // DELETE: api/Estoques/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEstoque(long id)
        {
            var estoque = await _context.estoques.FindAsync(id);
            if (estoque == null)
            {
                return NotFound();
            }

            _context.estoques.Remove(estoque);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EstoqueExists(long id)
        {
            return _context.estoques.Any(e => e.id == id);
        }
    }
}
