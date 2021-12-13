import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react';
import api from '../../../api';

export default function IncluirVendas() {

    const [formulario, setFormulario] = useState({
        dataVenda: "",
        quantidadeTotal: "", 
        valorVenda: "",
        valorDescontoTotal: ""
    })

    const [idVenda, setIdVenda] = useState(0)

    const onSubmit = async (event) => {
        event.preventDefault();
        console.log(formulario);
        
        try {
            const response = await api.post("https://localhost:44380/api/vendas", formulario);    
            alert("Sua venda foi salva");
            setIdVenda(response.data.id);
            console.log(response.data.id);
        } catch (error) {
            console.log(error);
            alert("X Não foi possível realizar sua requisição X");     
        }
        
    }

  return (
    <div className="container">
      <Head>
        <title>ControleEstoque-Vendas</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
      </Head>

      <div class="position-relative">
        <div class="position-absolute top-0 start-0">             
          <Link href="/vendas">
            <button type="button" class="btn-close" aria-label="Close"></button> 
          </Link>        
        </div>
      </div>

      <main>
        <h1 className="title">
          Incluir Venda
        </h1>
      
        <form style={{marginTop: '30px'}} onSubmit={onSubmit} class="row g-3">
          <div class="col-md-6">
            <label for="dataVenda" class="form-label">Data da Venda</label>
            <input 
                value={formulario.dataVenda} 
                onChange={(e) => setFormulario({...formulario, dataVenda: e.target.value})} 
                id="dataVenda" 
                type="date" 
                autocomplete="01/01/2021" 
                required 
                class="form-control"
            />
          </div>    

          <div class="col-md-6">
            <label for="quantidadeTotal" class="form-label">Quantidade Total</label>
            <input 
                value={formulario.quantidadeTotal} 
                onChange={(e) => setFormulario({...formulario, quantidadeTotal: e.target.value})} 
                id="quantidadeTotal" 
                type="number" 
                autocomplete="" 
                required 
                class="form-control"
            />
          </div>

          <div class="col-12">
            <label for="valorVenda" class="form-label">Valor Venda</label>
            <input 
                value={formulario.valorVenda}  
                onChange={(e) => setFormulario({...formulario, valorVenda: e.target.value})} 
                id="valorVenda" 
                type="number" 
                autocomplete="" 
                required 
                class="form-control"
            />
          </div>

          <div class="col-12">
            <label for="valorDescontoTotal" class="form-label">Valor Desconto</label>
            <input 
                value={formulario.valorDescontoTotal}  
                onChange={(e) => setFormulario({...formulario, valorDescontoTotal: e.target.value})} 
                id="valorDescontoTotal" 
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
        
        <a class="btn btn-primary" href={"/itens/" + idVenda} role="button">Itens da Venda</a>

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
