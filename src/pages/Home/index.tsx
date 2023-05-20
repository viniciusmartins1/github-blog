import { Header } from "../../components/Header";

export function Home() {
  return (
    <>
      <Header />
      <main>
        <section>
          <img
            src="https://github.com/viniciusmartins1.png"
            alt="Imagem de perfil"
          />
          <div>
            <div>
              <h2>Vinicius Martins</h2>
              <a href="https://github.com/viniciusmartins1"></a>
            </div>
            <p>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
              viverra massa quam dignissim aenean malesuada suscipit. Nunc,
              volutpat pulvinar vel mass.
            </p>

            <div>
              <p>
                <span></span> cameronwll
              </p>
              <p>
                <span></span> Rocketseat
              </p>
              <p>
                <span></span> 32 seguidores
              </p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3>Publicações</h3>
            <p>6 publicações</p>
          </div>
          <form action="">
            <input type="text" placeholder="Buscar conteúdo" />
          </form>
        </section>

        <section>
          <div>
            <div>
              <h3>JavaScript data types and data structures</h3>
              <p>Há 1 dia</p>
            </div>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
