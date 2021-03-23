import { GetStaticProps, GetStaticPropsResult, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Navbar } from "../components/Navbar";
import { Screen } from "../components/Screen";
import { Country } from "../models/country/country";
import { getAllCountries } from "../utils/getAllCountries";

interface HomeProps {
  countries: Array<Country>;
}

const Home: NextPage<HomeProps> = function ({ countries }) {
  const router = useRouter();

  return (
    <Screen>
      <Head>
        <title>Countries</title>
      </Head>
      <Navbar title="Countries" />
      <section className="flex flex-wrap gap-4 p-4">
        {countries.map((country) => (
          <button
            key={country.alpha2Code}
            className="flex-1 min-w-max p-4 bg-blue-200 rounded-xl flex gap-2 hover:bg-blue-300 hover:shadow-md focus:outline-none focus:bg-blue-300 focus:shadow-2xl transform hover:scale-105"
            title={country.name}
            onClick={() => router.push(`/${country.alpha2Code}`)}
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
          </button>
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
