import {Link} from "react-router-dom";
import {Header} from "../../Components/Header/Header";
import classes from './404.module.scss';
import {Helmet, HelmetProvider} from "react-helmet-async";

export const NotFound = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
                rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&family=Roboto:wght@100;300&display=swap"
                rel="stylesheet"/>
        </Helmet>
      </HelmetProvider>
      <Header/>
      {/*<h1>Error 404 - Page not found</h1>*/}

      <div className={classes.body}>

        <h1 className={classes.h1}>404</h1>
        <div className={classes.wrapper}>
          <div className={classes.container}>
            <div className={classes.cloak}></div>
          </div>
        </div>
        <div className={classes.info}>
          <h2 className={classes.h2}>Страница не найдена</h2>
          <p className={classes.p}>Была здесь, но пропала</p>
          <Link className={classes.link} to="/" rel="noreferrer noopener">На главную</Link>
        </div>
      </div>


      {/*  /!*<Link to="/">&lt; Вернуться на главную</Link>*!/*/}
    </>
  );
}