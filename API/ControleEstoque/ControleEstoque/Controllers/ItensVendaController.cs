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
    public class ItensVendaController : ControllerBase
    {
        private readonly Context _context;

        public ItensVendaController(Context context)
        {
            _context = context;
        }

        // GET: api/ItensVenda
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ItemVenda>>> GetitemVenda()
        {
            return await _context.itemVenda.ToListAsync();
        }

        [HttpGet("itensDaVenda/{idVenda}")]
        public async Task<ActionResult<IEnumerable<ItemVenda>>> GetitemVendaPedido(int? idVenda)
        {
            var itemVenda = await _context.itemVenda.Where(x => x.idVenda == idVenda).ToListAsync();
              

            if (itemVenda == null)
            {
                return NotFound();
            }

            return itemVenda;
        }

        // GET: api/ItensVenda/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ItemVenda>> GetItemVenda(int? id)
        {
            var itemVenda = await _context.itemVenda.FindAsync(id);

            if (itemVenda == null)
            {
                return NotFound();
            }

            return itemVenda;
        }

        // PUT: api/ItensVenda/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutItemVenda(int? id, ItemVenda itemVenda)
        {
            if (id != itemVenda.id)
            {
                return BadRequest();
            }

            _context.Entry(itemVenda).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ItemVendaExists(id))
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

        // POST: api/ItensVenda
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ItemVenda>> PostItemVenda(ItemVenda itemVenda)
        {
            _context.itemVenda.Add(itemVenda);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetItemVenda", new { id = itemVenda.id }, itemVenda);
        }

        // DELETE: api/ItensVenda/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteItemVenda(int? id)
        {
            var itemVenda = await _context.itemVenda.FindAsync(id);
            if (itemVenda == null)
            {
                return NotFound();
            }

            _context.itemVenda.Remove(itemVenda);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ItemVendaExists(int? id)
        {
            return _context.itemVenda.Any(e => e.id == id);
        }
    }
}
