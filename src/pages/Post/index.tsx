import ReactMarkdown from "react-markdown";

export function Post() {
  return (
    <>
      <section>
        <div>
          <button>
            <span></span> Voltar
          </button>
          <a href="https://github.com/viniciusmartins1">Ver no github</a>
        </div>

        <h2>JavaScript data types and data structures</h2>

        <div>
          <p>
            <span></span> cameronwll
          </p>
          <p>
            <span></span> Há 1 dia
          </p>
          <p>
            <span></span> 5 comentários
          </p>
        </div>
      </section>
      <section>
        <ReactMarkdown>`teste`</ReactMarkdown>
      </section>
    </>
  );
}
