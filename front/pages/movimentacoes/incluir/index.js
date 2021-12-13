import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react';
import api from '../../../api';

export default function IncluirProduto() {

  const [formulario, setFormulario] = useState({
      idEstoque: 0, 
      idProduto: 0, 
      idItemVenda: 0, 
      quantidade: 0, 
      tipoMovimentacao: "",
      dataMovimentacao: 0,
      valorMovimentacao: 0
  })

  const onSubmit = async (event) => {
      event.preventDefault();
      console.log(formulario);
      
      try {
          api.create(formulario)
          const response = await api.post("https://controleestoqueapi.herokuapp.com/api/movimentacoesestoque", formulario);    
          alert("Sua movimentação foi salva");
          setFormulario({idEstoque: 0, 
            idProduto: 0, 
            idItemVenda: 0, 
            quantidade: 0, 
            tipoMovimentacao: "",
            dataMovimentacao: 0,
            valorMovimentacao: 0
          });
      } catch (error) {
          console.log(error);
          alert("X Não foi possível sua requisição X");     
      }        
  }

  return (
    <div className="container">
      <Head>
        <title>ControleEstoque-Movimentações</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
      </Head>

      <div class="position-relative">
        <div class="position-absolute top-0 start-0">             
          <Link href="/movimentacoes">
            <button type="button" class="btn-close" aria-label="Close"></button> 
          </Link>        
        </div>
      </div>

      <main>
        <h1 className="title">
          Incluir Movimentação
        </h1>
      
        <form style={{marginTop: '30px'}} onSubmit={onSubmit} class="row g-3">
          <div class="col-md-6">
            <label for="idEstoque" class="form-label">Código Estoque</label>
            <input 
                value={formulario.idEstoque} 
                onChange={(e) => setFormulario({...formulario, idEstoque: e.target.value})} 
                id="idEstoque" 
                type="number" 
                autocomplete="" 
                required 
                class="form-control"
            />
          </div>    

          <div class="col-md-6">
            <label for="idProduto" class="form-label">Código Produto</label>
            <input 
                value={formulario.idProduto} 
                onChange={(e) => setFormulario({...formulario, idProduto: e.target.value})} 
                id="idProduto" 
                type="number" 
                autocomplete="" 
                required 
                class="form-control"
            />
          </div>

          <div class="col-12">
            <label for="quantidade" class="form-label">Quantidade</label>
            <input 
                value={formulario.quantidade}  
                onChange={(e) => setFormulario({...formulario, quantidade: e.target.value})} 
                id="quantidade" 
                type="number" 
                autocomplete="" 
                required 
                class="form-control"
            />
          </div>

          <div class="col-12">
            <label for="tipoMovimentacao" class="form-label">Tipo</label>
            <input 
                value={formulario.tipoMovimentacao}  
                onChange={(e) => setFormulario({...formulario, tipoMovimentacao: e.target.value})} 
                id="tipoMovimentacao" 
                type="text" 
                autocomplete="+" 
                required 
                class="form-control"
            />
          </div>

          <div class="col-md-6">
            <label for="dataMovimentacao" class="form-label">Data</label>
            <input 
                value={formulario.dataMovimentacao}  
                onChange={(e) => setFormulario({...formulario, dataMovimentacao: e.target.value})} 
                id="dataMovimentacao" 
                type="date" 
                autocomplete="" 
                required 
                class="form-control"
            />      
          </div>

          <div class="col-md-4">
            <label for="valorMovimentacao" class="form-label">Valor</label>
            <input 
                value={formulario.valorMovimentacao}  
                onChange={(e) => setFormulario({...formulario, valorMovimentacao: e.target.value})} 
                id="valorMovimentacao" 
                type="number" 
                autocomplete="" 
                required 
                class="form-control"
            />     
          </div>
          
          <div class="col-12">
            <button type="submit" class="btn btn-primary">Salvar</button>
          </div>
        </form>

      </main>

      <footer>
        <p>Criado por Chrystian e Dieimesson</p>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
