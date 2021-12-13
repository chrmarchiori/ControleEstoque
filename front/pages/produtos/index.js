import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react';
import { useState } from 'react';
import api from '../../api';

export const axiosConfig = {
  
}

export default function Produtos() {

  const onDelete = async (event, id) => {
    event.preventDefault();
    console.log("tá passando");

    try {
        await api.delete("https://controle-estoque-seven.vercel.app/api/produtos/" + id);    
        alert("Seu produto foi deletado com sucesso");
    } catch (error) {
        console.log(error);
        alert("X Não foi possível deletar seu produto X");     
    }        
  }
  
  
  const [produtos, setProdutos] = useState([])

  const getProdutos = async () => {
    try {
      const {data} = await api.get("https://controle-estoque-seven.vercel.app/api/produtos");
      console.log(data);
      setProdutos(data);
    } catch (error) {
      console.log(error);  
    }
  }

  useEffect(() => {
    getProdutos();
  }, [])
  
  return (
    <div className="container">
      <Head>
        <title>ControleEstoque-Produtos</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
      </Head>

      <div class="position-relative">
        <div class="position-absolute top-0 start-0">             
          <Link href="/">
            <button type="button" class="btn-close" aria-label="Close"></button> 
          </Link>        
        </div>
      </div>

      <main>
        <h1 className="title">
          Produtos
        </h1>

          <table
            class="table table-striped table-hover"
            style={{width: '1000px', marginTop: '30px'}}>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Descrição</th>
                <th scope="col">Preço</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {produtos.map(produto => (
                <tr key={produto.id}>
                  <th scope="row">{produto.id}</th>
                  <td>{produto.descricao}</td>
                  <td>{produto.preco}</td>
                  <td>
                    <button type="button" class="btn btn-danger">Excluir</button>
                  </td>
                </tr>
              ))}              
            </tbody>
          </table>

        <Link href="/produtos/incluir">
          <a className="card">
            <p>Incluir Produto</p>
          </a>
        </Link>
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
