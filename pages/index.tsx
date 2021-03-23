import { GetStaticProps, GetStaticPropsResult, NextPage } from "next";
import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { Screen } from "../components/Screen";
import { Country } from "../models/country/country";
import { getAllCountries } from "../utils/getAllCountries";

interface HomeProps {
  countries: Array<Country>;
}

const Home: NextPage<HomeProps> = function ({ countries }) {
  const title = "Countries";
  const description = "Basic informations about the countries";
  const url = "https://countries-snowy.vercel.app";
  const image = `${url}/countries.jpg`;
  return (
    <Screen>
      <Head>
        <title>{title}</title>
        <link
          rel="icon"
          href={`${url}/globe.png`}
          type="image/png"
          sizes="128x128"
        />

        {/** meta tags for open graph */}
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        {/** meta tags for twitter */}
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:creator" content="devavi26" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
        <meta property="twitter:image:alt" content={title} />
      </Head>
      <Navbar title="Countries" />
      <section className="flex flex-wrap gap-4 p-4 pt-20">
        {countries.map((country, index) => (
          <a
            key={country.alpha2Code}
            className="flex-1 min-w-full sm:min-w-max max-w-full p-4 bg-blue-200 rounded-xl flex gap-2 hover:bg-blue-300 hover:shadow-md focus:outline-none focus:bg-blue-300 focus:shadow-2xl transform hover:scale-105 animate-enter"
            title={country.name}
            href={`/${country.alpha2Code}`}
          >
            <aside>
              <img src={country.flag} alt={country.name} className="w-10" />
            </aside>
            <article className="flex flex-col items-start">
              <h2 className="font-bold text-blue-900">{country.name}</h2>
              {country.capital && (
                <h3>
                  Capital -{" "}
                  <span className="text-blue-800">{country.capital}</span>
                </h3>
              )}
              {country.population ? (
                <h4>
                  Population -{" "}
                  <span className="text-blue-800">
                    {new Intl.NumberFormat().format(country.population)}
                  </span>
                </h4>
              ) : (
                <></>
              )}
            </article>
          </a>
        ))}
      </section>
    </Screen>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async (): Promise<
  GetStaticPropsResult<HomeProps>
> => {
  const countries = await getAllCountries();
  return {
    props: { countries },
  };
};

export default Home;
