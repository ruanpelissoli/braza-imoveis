import MainNavigation from "../components/MainNavigation";

const ErrorPage: React.FC = () => {
    return (
      <>
        <MainNavigation />
        <main>
          <h1>Ocorreu um problema.</h1>
        </main>
      </>
    );
  };
  
  export default ErrorPage;